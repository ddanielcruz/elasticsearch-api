const { SearchService } = require("../services");

exports.index = async (request, response) => {
  const { query } = request.query;

  try {
    const result = await SearchService.query(query);
    return response.json(result);
  } catch ({ message }) {
    return response.status(400).json({ error: message });
  }
};
