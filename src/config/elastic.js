const fs = require("fs");
const path = require("path");
const { Client } = require("elasticsearch");
const { sleep } = require("../helpers");

exports.connect = () => {
  return new Client({
    host: "http://elasticsearch:9200/",
    keepAlive: true,
  });
};

const waitToConnect = async (client) => {
  while (true) {
    try {
      await client.ping();
      break;
    } catch (error) {
      await sleep(1000);
    }
  }
};

const parseStocks = () => {
  const file = path.join(__dirname, "..", "data", "stocks.json");
  const content = fs.readFileSync(file);

  return JSON.parse(content);
};

const createBulk = (stocks = []) => {
  const bulk = [];

  for (const stock of stocks) {
    bulk.push(
      {
        index: {
          _index: "assets",
          _id: stock.ticker,
        },
      },
      stock
    );
  }

  return bulk;
};

exports.config = async () => {
  const client = this.connect();
  const index = "assets";

  // Wait until connection is finished
  await waitToConnect(client);

  // Create assets index
  const indexExists = await client.indices.exists({ index });
  if (!indexExists) {
    await client.indices.create({ index });
  }

  // Create assets mappings
  await client.indices.putMapping({
    index,
    body: {
      properties: {
        identifier: {
          type: "text",
        },
        ticker: {
          type: "keyword",
        },
      },
    },
  });

  // Finally, seed the index
  const stocks = parseStocks();
  const bulk = createBulk(stocks);
  await client.bulk({
    maxRetries: 5,
    index,
    body: bulk,
  });
};
