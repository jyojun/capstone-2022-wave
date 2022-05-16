const express = require("express");
const router = express.Router();
const { Message } = require("../Model/Message.js");
const { User } = require("../Model/User.js");
const { io } = require("../index.js");

router.post("/submit", async (req, res) => {
  let temp = {
    content: req.body.content,
    carePostId: req.body.carePostId,
  };
  await User.findOne({ uid: req.body.receiver })
    .exec()
    .then((userInfo) => {
      temp.receiver = userInfo._id; // receiver id
      User.findOne({ uid: req.body.sender })
        .exec()
        .then((userInfo) => {
          temp.sender = userInfo._id; // sender id
          const NewMessage = new Message(temp);
          NewMessage.save().then(() => {
            res.status(200).json({ success: true });
          });
        });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

router.post("/getMessages", async (req, res) => {
  await User.findOne({ uid: req.body.user_uid })
    .exec()
    .then((userInfo) => {
      Message.find({
        $and: [{ carePostId: req.body.carePostId }],
        $or: [{ receiver: userInfo._id }, { sender: userInfo._id }],
      })
        .populate("receiver")
        .populate("sender")
        .exec()
        .then((doc) => {
          res.status(200).json({ success: true, messages: doc });
        });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

router.post("/getSenders", async (req, res) => {
  await Message.find({ carePostId: req.body.carePostId })
    .populate("receiver")
    .populate("sender")
    .exec()
    .then((doc) => {
      let senders = [];
      doc.map((d) => {
        if (d.receiver.uid === req.body.user_uid) {
          senders.push(d.sender);
        }
      });
      let set = new Set(senders);
      let unique_senders = [...set];

      res.status(200).json({ success: true, senders: unique_senders });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

module.exports = router;
