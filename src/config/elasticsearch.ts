import { Client } from 'elasticsearch';

import sleep from '@helpers/sleep';
import stocks from '../data/stocks.json';

export const connect = () => {
  return new Client({
    host: process.env.ES_HOST,
    keepAlive: true,
  });
};

// It's important to mention this is not a real world configuration of Elasticsearch, it's
// just a development one used to simplify the example
export const configure = async () => {
  const client = connect();
  const index = 'stocks';

  // Wait until connection is finished
  await waitToConnect(client);

  // Create stocks index
  const indexAlreadyExists = await client.indices.exists({ index });
  if (!indexAlreadyExists) {
    await client.indices.create({ index });
  }

  // Create stocks mapping
  await client.indices.putMapping({
    index,
    type: 'document',
    includeTypeName: true,
    body: {
      properties: {
        identifier: {
          type: 'text',
        },
        ticker: {
          type: 'keyword',
        },
      },
    },
  });

  // Finally, seed the index
  const bulk = generateBulk();
  await client.bulk({
    maxRetries: 5,
    index,
    body: bulk,
  });
};

// Simple to trick to wait until Elasticsearch is ready
const waitToConnect = async (client: Client) => {
  while (true) {
    try {
      await client.ping({});
      break;
    } catch (error) {
      await sleep(1000);
    }
  }
};

// Generate the bulk used to seed Elasticsearch
const generateBulk = () => {
  const bulk = [];

  for (const stock of stocks) {
    bulk.push(
      {
        index: {
          _index: 'stocks',
          _id: stock.ticker,
        },
      },
      stock
    );
  }

  return bulk;
};
