exports.index = async (request, response) => {
  const { query } = request.query;

  return response.json({ query });
};
