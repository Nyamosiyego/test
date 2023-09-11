import mongoose, { model, models } from "mongoose";

const Schema = mongoose.Schema;

const JobSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  company: String,
  location: String,
  salary: {
    type: Number,
  },
});

export const Jobs = models.Jobs || model("Jobs", JobSchema);
