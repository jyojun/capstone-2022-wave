const express = require("express");
const router = express.Router();
const { User } = require("../Model/User.js");
const { Counter } = require("../Model/Counter.js");
const setUpload = require("../Util/upload.js");

// 회원가입
router.post("/register", (req, res) => {
  let temp = req.body;
  Counter.findOne({ name: "counter" })
    .then((doc) => {
      temp.userNum = doc.userNum;
      const userData = new User(req.body);
      userData.save().then(() => {
        Counter.updateOne({ name: "counter" }, { $inc: { userNum: 1 } }).then(
          () => {
            res.status(200).json({ success: true });
          }
        );
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false });
    });
});

// 닉네임 중복체크
router.post("/namecheck", (req, res) => {
  User.findOne({ displayName: req.body.displayName })
    .exec()
    .then((doc) => {
      let check = true;
      if (doc) {
        // 요청한 닉네임이 존재하면 false
        check = false;
      }
      res.status(200).json({ success: true, check: check });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false });
    });
});

// 마이페이지에 불러올 유저정보
router.post("/getUser", (req, res) => {
  User.findOne({ displayName: req.body.displayName })
    .exec()
    .then((userInfo) => {
      res.status(200).json({ success: true, userInfo: userInfo });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false });
    });
});

//마이페이지 유저 프로필 이미지 aws에 저장 후 URL불러오기
router.post("/profile/img", setUpload("pecus2022/user"), (req, res, next) => {
  console.log(res.req);
  res.status(200).json({ success: true, filePath: res.req.file.location });
});

// 마이페이지 유저정보 수정
router.post("/profile/update", (req, res) => {
  let temp = {
    photoURL: req.body.photoURL,
  };
  User.findOneAndUpdate({ uid: req.body.uid }, { $set: temp })
    .exec()
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

module.exports = router;
