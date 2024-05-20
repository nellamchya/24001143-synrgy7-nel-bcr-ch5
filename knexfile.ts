import type { Knex } from "knex";
const { PG_USER, PG_PASSWORD, PG_PORT, PG_HOST, DATABASE } = process.env;

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
      user: PG_USER,
      password: PG_PASSWORD,
      port: parseInt(PG_PORT || "5432", 10),
      host: PG_HOST,
      database: DATABASE,
    }
  },
};

module.exports = config;
