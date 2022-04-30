const mongoose = require("mongoose");

const petSchema = new mongoose.Schema(
  {
    name: String,
    sex: String,
    type: String,
    birthday: String,
    weight: Number,
    neutrality: Boolean,
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    image: String,
  },
  { collection: "Pets" }
);

const Pet = mongoose.model("Pet", petSchema);

module.exports = { Pet };
