import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './Routes';
import mongoose from 'mongoose';
import 'dotenv/config';

class App {
  express;

  constructor() {
    this.express = express();
    this.middlewares();
    this.database();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(
      cors({
        allowedHeaders: ['x-total-count', 'Content-Type'],
      }),
    );
    this.express.use(morgan(`${process.env.MORGAN_CONFIG}`));
  }

  database() {
    // mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  }

  routes() {
    // this.express.use(process.env.PREFIX, routes);
    this.express.use(routes);
  }
}

export default new App().express;
