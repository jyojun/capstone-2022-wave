const express = require("express");
const router = express.Router();
const { Post } = require("../Model/Post.js");
const { Reple } = require("../Model/Reple.js");
const { User } = require("../Model/User.js");

// 댓글 생성
router.post("/submit", (req, res) => {
  let temp = {
    reple: req.body.reple,
    postId: req.body.postId,
  };
  User.findOne({ uid: req.body.uid })
    .exec()
    .then((userInfo) => {
      temp.author = userInfo._id;
      const NewReple = new Reple(temp);
      NewReple.save(() => {
        Post.findOneAndUpdate(
          {
            _id: req.body.postId,
          },
          { $inc: { repleNum: 1 } }
        )
          .exec()
          .then(() => {
            return res.status(200).json({ success: true });
          });
      });
    })
    .catch((err) => {
      return res.status(400).json({ success: false });
    });
});

// 해당 post의 댓글리스트 불러오기
router.post("/getReple", (req, res) => {
  // 요첯보낸 postId와 동일한 모든 reple 리스트
  Reple.find({ postId: req.body.postId })
    .populate("author")
    .exec()
    .then((repleInfo) => {
      return res.status(200).json({ success: true, repleList: repleInfo });
    })
    .catch((err) => {
      return res.status(400).json({ success: false });
    });
});

// 댓글 수정
router.post("/edit", (req, res) => {
  let temp = {
    postId: req.body.postId,
    reple: req.body.reple,
    uid: req.body.uid,
  };
  Reple.findOneAndUpdate({ _id: req.body.repleId }, { $set: temp })
    .exec()
    .then(() => {
      return res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      return res.status(400).json({
        success: false,
      });
    });
});

// 댓글 삭제
router.post("/delete", (req, res) => {
  let temp = {
    postId: req.body.postId,
    reple: req.body.reple,
    uid: req.body.uid,
  };
  Reple.deleteOne({ _id: req.body.repleId }) // postNum으로 삭제할 글 추적
    .exec()
    .then((doc) => {
      Post.findOneAndUpdate(
        {
          _id: req.body.postId,
        },
        { $inc: { repleNum: -1 } }
      )
        .exec()
        .then(() => {
          return res.status(200).json({
            success: true,
          });
        });
    })

    .catch((err) => {
      return res.status(400).json({ success: false });
    });
});

module.exports = router;
