const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: String,
    category: String,
    content: String,
    postNum: Number,
    image: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    repleNum: {
      type: Number,
      default: 0,
    },
  },
  { collection: "Posts", timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };
