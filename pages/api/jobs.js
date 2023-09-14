import { Jobs } from "@/models/Job";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handler(req, res) {
  await mongooseConnect();
  const { method } = req;

  if (method == "GET") {
    try {
      const jobs = await Jobs.find({});
      res.status(200).json(jobs).send(jobs);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  if (method == "POST") {
    const { title, description, company, location, salary } = req.body;
    const newJob = new Jobs({
      title,
      description,
      company,
      location,
      salary,
    });
    try {
      const job = await newJob.save();
      res.status(201).json(job);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
