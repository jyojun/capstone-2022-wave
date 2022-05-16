const mongoose = require("mongoose");

const placeRepleSchema = new mongoose.Schema(
  {
    reple: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    placeId: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  { collection: "PlaceReples", timestamps: true }
);

const PlaceReple = mongoose.model("PlaceReple", placeRepleSchema);

module.exports = { PlaceReple };
