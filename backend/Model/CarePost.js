const mongoose = require("mongoose");

const carePostSchema = new mongoose.Schema(
  {
    title: String, // 제목
    content: String, // 내용
    address: String, // 주소
    pets: Array, // 케어를 원하는 펫
    author: {
      // 글쓴이
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { collection: "CarePosts", timestamps: true }
);

const CarePost = mongoose.model("CarePost", carePostSchema);

module.exports = { CarePost };
