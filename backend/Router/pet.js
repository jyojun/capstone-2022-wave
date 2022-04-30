const express = require("express");
const router = express.Router();
const { Pet } = require("../Model/Pet.js");
const { User } = require("../Model/User.js");
const setUpload = require("../Util/upload.js");

// 펫 생성
router.post("/submit", (req, res) => {
  let temp = {
    name: req.body.name,
    sex: req.body.sex,
    type: req.body.type,
    birthday: req.body.birthday,
    weight: req.body.weight,
    neutrality: req.body.neutrality,
    image: req.body.image,
  };
  User.findOne({ uid: req.body.uid })
    .exec()
    .then((userInfo) => {
      temp.owner = userInfo._id;
      const NewPet = new Pet(temp);
      NewPet.save(() => {
        return res.status(200).json({ success: true });
      });
    })
    .catch((err) => {
      return res.status(400).json({ success: false });
    });
});

// 유저의 펫 리스트 반환
router.post("/petList", (req, res) => {
  User.findOne({ uid: req.body.uid })
    .exec()
    .then((userInfo) => {
      Pet.find({ owner: userInfo._id })
        .exec()
        .then((doc) => {
          return res.status(200).json({ success: true, petList: doc });
        });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

// 펫 이미지 aws s3에 업로드
router.post("/image/upload", setUpload("pecus2022/pet"), (req, res, next) => {
  res.status(200).json({ success: true, filePath: res.req.file.location });
});
module.exports = router;
