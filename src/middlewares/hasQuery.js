module.exports = (request, response, next) => {
  const { query } = request.query;
  if (!query) {
    return response.status(400).json({ error: "Query not provided." });
  }

  next();
};
