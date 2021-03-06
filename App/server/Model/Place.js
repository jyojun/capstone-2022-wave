const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema(
  {
    name: String,
    category: String,
    address: String,
    detail: String,
    placeNum: Number,
    image: String,
    repleNum: {
      type: Number,
      default: 0,
    },
  },
  { collection: "Places" }
);

const Place = mongoose.model("Place", placeSchema);

module.exports = { Place };
