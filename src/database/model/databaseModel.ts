import mongoose from "mongoose";

interface Subject {
  name: string;
  playlist_id: string;
}

interface Class {
  id: number;
  name: string;
  description: string;
  subjects: Subject[];
}

interface LearningInterface {
  id: number;
  name: string;
  description: string;
  classes: Class[];
  number_class: number;
}

const learningSchema = new mongoose.Schema<LearningInterface & mongoose.Document>({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  classes: [
    {
      id: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      subjects: [
        {
          name: {
            type: String,
            required: true,
          },
          playlist_id: {
            type: String,
            required: true,
          },
        },
      ],
    },
  ],
  number_class: {
    type: Number,
    required: true,
  },
});

const LearningModel = mongoose.model<LearningInterface & mongoose.Document>("LearningModel", learningSchema, "learning");

export default LearningModel;
