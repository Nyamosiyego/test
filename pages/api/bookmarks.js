import { mongooseConnect } from "@/lib/mongoose";
import { Bookmarks } from "@/models/Bookmark";

export default async function handler(req, res) {
    await mongooseConnect();
    const { method } = req;

    if (method == "GET") {
        try {
            const bookmarks = await Bookmarks.find({});
            res.status(200).json(bookmarks);
        } catch (error) {
            res.status(400).json(error);
        }
    }

    if (method == "POST") {
        const { JobId, user } = req.body;
        const newBookmark = new Bookmarks({
            JobId,
            user,
        });
        try {
            const bookmark = await newBookmark.save();
            res.status(201).json(bookmark);
        } catch (error) {
            res.status(400).json(error);
        }
    }

    if (method == "DELETE") {
        const { JobId, user } = req.body;
        try {
            const bookmark = await Bookmarks.findOneAndDelete({
                JobId,
                user,
            });
            res.status(201).json(bookmark);
        } catch (error) {
            res.status(400).json(error);
        }
    }
}