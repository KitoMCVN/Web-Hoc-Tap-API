import express from "express";
import LearningModel from "../database/model/databaseModel";

const learningRouter = express.Router();

learningRouter.get("/", async (req, res) => {
  try {
    const learnings = await LearningModel.find();
    res.json(learnings);
  } catch (error) {
    res.status(500).json({ message: "Có gì đấy bị lỗi", error: "true" });
  }
});

export default learningRouter;
