import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  preview: {
    type: String,
    required: true,
  },
  overview: [
    {
      type: String,
      required: true,
    },
  ],
  logoURL: {
    type: String,
    required: true,
  },
  imageURL: [
    {
      type: String,
      required: true,
    },
  ],
});

export const Project = mongoose.model("project", projectSchema);
