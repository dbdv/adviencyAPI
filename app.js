import express from "express";
import giftRouter from "./routes/gifts.route.js";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.$PORT | 3000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/gifts", giftRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
