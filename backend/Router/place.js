const express = require("express");
const router = express.Router();
const { Place } = require("../Model/Place.js");
const { Counter } = require("../Model/Counter.js");
const setUpload = require("../Util/upload.js");

// 장소정보 등록
router.post("/submit", (req, res) => {
  let temp = {
    name: req.body.name,
    address: req.body.address,
    detail: req.body.detail,
    image: req.body.image,
  };
  //   console.log(req.body);
  Counter.findOne({ name: "counter" })
    .exec()
    .then((counter) => {
      temp.placeNum = counter.placeNum;
      const CommunityPlace = new Place(temp);
      CommunityPlace.save().then(() => {
        Counter.updateOne({ name: "counter" }, { $inc: { placeNum: 1 } }).then(
          () => {
            res.status(200).json({ success: true });
          }
        );
      });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

// 모든 장소정보 리스트
router.post("/list", (req, res) => {
  let sort = {};

  if (req.body.sort === "기본순") {
    // 기본순
    sort.createdAt = -1; // 기본순으로 내림차순
  } else {
    // 후기순
    sort.repleNum = -1; // 후기순 내림차순
  }
  Place.find({
    $and: [
      { category: { $regex: req.body.category } },
      { address: { $regex: req.body.area } },
    ],
    $or: [
      { name: { $regex: req.body.searchTerm } },
      { address: { $regex: req.body.searchTerm } },
    ],
  })
    .sort(sort)
    .exec()
    .then((doc) => {
      res.status(200).json({ success: true, placeList: doc });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

// 한 장소의 detail 정보
router.post("/detail", (req, res) => {
  Place.findOne({ placeNum: Number(req.body.placeNum) })
    .exec()
    .then((doc) => {
      res.status(200).json({ success: true, placeInfo: doc });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

// 장소이미지 aws s3에 업로드
router.post("/image/upload", setUpload("pecus2022/place"), (req, res, next) => {
  res.status(200).json({ success: true, filePath: res.req.file.location });
});

module.exports = router;
