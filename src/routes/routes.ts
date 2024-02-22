import express from "express";
import learningRouter from "./learningRouter";

const routes = (app: express.Application) => {
  app.get("/", (req, res) => {
    const data = { message: "Chào cậu!", error: "false" };
    res.json(data);
  });

  app.use("/api", learningRouter);

  app.get("/*", (req, res) => {
    const data = { message: "Hình như bạn sai url rồi nhỉ?", error: "true" };
    res.json(data);
  });
};

export default routes;
