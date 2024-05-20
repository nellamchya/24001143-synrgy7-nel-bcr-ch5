require("dotenv").config();

import express, { Express, NextFunction, Request, Response } from "express";
import knex from "knex";
import { Model } from 'objection'

const { PG_USER, PG_PASSWORD, PG_PORT, PG_HOST, DATABASE } = process.env;
const app: Express = express();
const port = 8000;
const router = require('./router')

app.use(express.json());
app.use(router)

const knexInstance = knex({
  client: "pg",
  connection: {
    user: PG_USER,
    password: PG_PASSWORD,
    port: parseInt(PG_PORT || "5432", 10),
    host: PG_HOST,
    database: DATABASE,
  }
})

Model.knex(knexInstance)

// 404 
router.use((req: Request, res: Response, next: NextFunction) => {
  return res.status(404).json({
      message: "404 Not Found!"
  });
});

// 500
router.use((err: any, res: Response) => {
  console.error(err.stack);
  return res.status(500).json({
    message: err.message
  });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
