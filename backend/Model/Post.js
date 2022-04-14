const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    postNum: Number,
    image: String,
  },
  { collection: "Posts" }
);

const Post = mongoose.model("Posts", postSchema);

module.exports = { Post };
