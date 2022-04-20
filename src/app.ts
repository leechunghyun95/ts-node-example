import * as dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import { sequelize } from "./models/index"; //방금 만든 sequelize객체를 import해준다.(index.ts에 만들었으므로 폴더명만 입력하면 먼저 자동으로 index.ts를 찾아 그 안에 있는거 import)

dotenv.config();

const app = express();

app.get("/welcome", (req: Request, res: Response, next: NextFunction) => {
  res.send("welcome!");
});

app.listen("1234", async () => {
  console.log(`
    ################################################
    🛡️  Server listening on port: 1234🛡️
    ################################################
  `);

  await sequelize
    .authenticate()
    .then(async () => {
      console.log("db connection success");
    })
    .catch((e) => {
      console.log("db connection failed: ", e);
    });
});
