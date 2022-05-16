const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    content: String,
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
    carePostId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "CarePost",
    },
  },
  { collection: "Messages", timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = { Message };
