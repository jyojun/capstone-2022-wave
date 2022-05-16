const mongoose = require("mongoose");

const carePostSchema = new mongoose.Schema(
  {
    title: String, // 제목
    content: String, // 내용
    address: String, // 주소
    startDate: Date, // 돌봄 시작 날짜
    endDate: Date, // 돌봄 종료 날짜
    pet: {
      type: mongoose.Schema.Types.ObjectId, // 케어를 원하는 펫
      ref: "Pet",
    },
    carePostNum: Number, // 글 번호
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
