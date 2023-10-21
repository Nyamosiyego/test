// import { mongooseConnect } from "@/lib/mongoose";
// import { Bookmarks } from "@/models/Bookmark";

// export default async function handler(req, res) {
//   await mongooseConnect();
//   const { method } = req;

//   // Extract user ID from the request, assuming it's available in req.user.id
//   console.log(req.user?.id);

//   if (method == "GET") {
//     try {
//       // Fetch bookmarks for the specific user
//       const bookmarks = await Bookmarks.find({ user: req.user?.id });
//       res.status(200).json(bookmarks);
//     } catch (error) {
//       res.status(400).json(error);
//     }
//     try {
//       res.json(await Bookmarks.find())
//     } catch (error) {
//       res.status(400).json(error)
//     }
//   }

//   if (method == "POST") {
//     const { JobId, user } = req.body;
//     // Create a new bookmark associated with the user ID
//     const newBookmark = new Bookmarks({
//       JobId,
//       user,
//     });
//     try {
//       const bookmark = await newBookmark.save();
//       res.status(201).json(bookmark);
//     } catch (error) {
//       res.status(400).json(error);
//     }
//   }

//   if (method == "DELETE") {
//     const { JobId } = req.body;
//     try {
//       // Delete the bookmark for the specific user and job
//       const bookmark = await Bookmarks.findOneAndDelete({
//         JobId,
//         user: userId,
//       });
//       res.status(201).json(bookmark);
//     } catch (error) {
//       res.status(400).json(error);
//     }
//   }
// }


import { mongooseConnect } from "@/lib/mongoose";
import { Bookmarks } from "@/models/Bookmark";

export default async function handler(req, res) {
  await mongooseConnect();
  const { method } = req;

  if (method == "GET") {
    try {
      // Fetch bookmarks for the specific user
      const bookmarks = await Bookmarks.find({ user: req.query?.id });
      res.status(200).json(bookmarks);
    } catch (error) {
      res.status(400).json(error);
    }}
  //   try {
  //     res.json(await Bookmarks.find())
  //   } catch (error) {
  //     res.status(400).json(error)
  // }

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