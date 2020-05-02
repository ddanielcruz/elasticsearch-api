const connection = require("../config/elastic").connect();

exports.health = async (request, response) => {
  const health = await connection.cluster.health({});
  return response.json(health);
};
