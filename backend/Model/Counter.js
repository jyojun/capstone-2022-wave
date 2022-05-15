const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema(
  {
    name: String,
    postNum: Number,
    userNum: Number,
    placeNum: Number,
    carePostNum: Number,
  },
  {
    collection: "Counter",
  }
);

const Counter = mongoose.model("Counter", counterSchema);

module.exports = { Counter };
