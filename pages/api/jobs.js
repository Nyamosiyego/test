import mongoose from "mongoose";
import { Jobs } from "../../models/jobs";
import { mongooseConnect } from "../../lib/mongoose";

export default async function handler(req, res) {
  await mongooseConnect();
  const { method } = req;

  if (method == "POST") {
    const { title, description, company, location, salary } = req.body;
    const newJob = new Jobs({
      title,
      description,
      company,
      location,
      salary,
    });
    newJob.save();
    res.status(200).json(newJob);
  }
}
