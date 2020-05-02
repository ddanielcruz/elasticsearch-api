const connection = require("../config/elastic").connect();

exports.query = async (term = "") => {
  // TODO: Verify if ES is ready
  const result = await connection.search({
    index: "assets",
    body: {
      query: {
        match: {
          ticker: term,
        },
      },
    },
  });

  return result;
};
