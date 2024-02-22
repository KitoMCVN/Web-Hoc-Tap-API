import express from "express";
import connectionDatabase from "./database/connectDatabase";
import routes from "./routes/routes";

const app = express();
const port = 3005;

connectionDatabase();
routes(app);

const server = app.listen(port, () => {
  console.log(`✅ Máy chủ bật với port ${port}`);
});
