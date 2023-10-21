import mongoose, { model, models } from "mongoose";

const Schema = mongoose.Schema;

const BookmarkSchema = new Schema({
  JobId: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
});

export const Bookmarks = models.Bookmarks || model("Bookmarks", BookmarkSchema);
