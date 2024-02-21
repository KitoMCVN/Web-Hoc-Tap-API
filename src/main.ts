import express from "express";
import connectionDatabase from "./database/connectDatabase";

const app = express();
const port = 3005;

connectionDatabase();

app.get("/", (req, res) => {
  const data = { message: "Hello, World!" };
  res.json(data);
});

const server = app.listen(port, () => {
  console.log(`✅ Máy chủ bật với port ${port}`);
});
