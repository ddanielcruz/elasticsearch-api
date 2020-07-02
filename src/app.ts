import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes";

class App {
  public express: express.Application;

  constructor() {
    this.express = express();

    this.middleware();
    this.routes();
  }

  middleware() {
    this.express.use(morgan(process.env.MORGAN || "dev"));
    this.express.use(cors());
    this.express.use(express.json());
  }

  routes() {
    this.express.use(routes);
  }
}

export default new App().express;
