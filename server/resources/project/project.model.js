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
      required: false,
    },
  ],
  logoURL: {
    type: String,
    required: false,
  },
  imageURL: [
    {
      type: String,
      required: true,
    },
  ],
  done: {
    type: Boolean,
    required: true,
  },
  siteLink: {
    type: String,
  },
  repoLink: {
    type: String,
  },
  tags: [
    {
      type: Object,
      required: true,
    },
  ],
});

export const Project = mongoose.model("project", projectSchema);
