require("./config/elastic").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes");

const app = express();

app.use(morgan(process.env.MORGAN || "dev"));
app.use(cors());
app.use(express.json());
app.use(routes);

module.exports = app;
