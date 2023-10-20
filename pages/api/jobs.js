import { Jobs } from "@/models/Job";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handler(req, res) {
  await mongooseConnect();
  const { method } = req;

  if (method == "GET") {
    if (req.query?.id) {
      try {
        const jobs = await Jobs.findOne({ _id: req.query?.id });
        res.status(201).json(jobs);
      } catch (error) {
        res.status(400).json(error);
      }
    } else {
      try {
        const jobs = await Jobs.find({});
        res.status(200).json(jobs);
      } catch (error) {
        res.status(400).json(error);
      }
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
