const express = require("express");

const controllers = require("./controllers");
const middlewares = require("./middlewares");
const routes = express.Router();

// Elastic Search management
routes.get("/elastic/health", controllers.Elastic.health);

// Search
routes.get("/search", middlewares.hasQuery, controllers.Search.index);

module.exports = routes;
