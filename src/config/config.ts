import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  dev: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD,
    databases: process.env.DB_DBNAME || "typescript_test",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    dialect: "mysql",
  },
};
