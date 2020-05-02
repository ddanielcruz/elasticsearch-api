const connection = require("../config/elastic").connect();

exports.query = async (term = "") => {
  const { hits } = await connection.search({
    index: "assets",
    body: {
      query: {
        bool: {
          should: [
            {
              match: {
                identifier: term,
              },
            },
            {
              prefix: {
                ticker: term,
              },
            },
            {
              prefix: {
                identifier: term,
              },
            },
            {
              match_phrase_prefix: {
                identifier: term,
              },
            },
          ],
        },
      },
    },
  });

  return hits.hits.map((x) => x._source);
};
