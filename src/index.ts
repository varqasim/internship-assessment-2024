import express, { Express } from "express";
import dotenv from "dotenv";

import { sequelize } from "./libs/repository/db";
import userSignUp from "./user/signUp";
import createPool from "./pool/createPool";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

app.use(express.json())

// User
app.post("/user", userSignUp);

// Pool
app.post("/pool", createPool);


app.listen(port, async () => {
  await sequelize.sync({ force: true });
  console.log(`[server]: Server is running at http://localhost:${port}`);
});