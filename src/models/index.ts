import { Sequelize } from "sequelize-typescript";
import { config } from "../config/config";

export const sequelize = new Sequelize(
  config.dev.databases,
  config.dev.username,
  config.dev.password,
  {
    host: config.dev.host,
    dialect: "mysql",
  }
);
