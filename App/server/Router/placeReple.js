const express = require("express");
const router = express.Router();
const { Place } = require("../Model/Place.js");
const { PlaceReple } = require("../Model/PlaceReple.js");
const { User } = require("../Model/User.js");

// 장소 후가 작성
router.post("/submit", (req, res) => {
  let temp = {
    reple: req.body.reple,
    placeId: req.body.placeId,
  };
  User.findOne({ uid: req.body.uid })
    .exec()
    .then((userInfo) => {
      temp.author = userInfo._id;
      const NewPlaceReple = new PlaceReple(temp);
      NewPlaceReple.save(() => {
        console.log(req.body.placeId);
        Place.findOneAndUpdate(
          {
            _id: req.body.placeId,
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

// 해당 place의 후기리스트 불러오기
router.post("/getReple", (req, res) => {
  // 요첯보낸 postId와 동일한 모든 reple 리스트
  PlaceReple.find({ placeId: req.body.placeId })
    .populate("author")
    .exec()
    .then((repleInfo) => {
      return res.status(200).json({ success: true, repleList: repleInfo });
    })
    .catch((err) => {
      return res.status(400).json({ success: false });
    });
});

// 장소 후기 수정
router.post("/edit", (req, res) => {
  let temp = {
    placeId: req.body.placeId,
    reple: req.body.reple,
    uid: req.body.uid,
  };
  PlaceReple.findOneAndUpdate({ _id: req.body.repleId }, { $set: temp })
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
    placeId: req.body.placeId,
    reple: req.body.reple,
    uid: req.body.uid,
  };
  PlaceReple.deleteOne({ _id: req.body.repleId }) // postNum으로 삭제할 글 추적
    .exec()
    .then((doc) => {
      Place.findOneAndUpdate(
        {
          _id: req.body.placeId,
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
