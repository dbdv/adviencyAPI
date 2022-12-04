import express from "express";
const app = express();
const port = 3000;
import giftRouter from "./routes/gifts.route.js";
import bodyParser from "body-parser";
import cors from "cors";

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/gifts", giftRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
