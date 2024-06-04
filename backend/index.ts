import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World! Changeddd!");
});

const port = process.env.APP_PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
