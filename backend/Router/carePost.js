const express = require("express");
const router = express.Router();
const { CarePost } = require("../Model/CarePost.js");
const { Counter } = require("../Model/Counter.js");
const { User } = require("../Model/User.js");
const { Pet } = require("../Model/Pet.js");
const setUpload = require("../Util/upload.js");

router.post("/submit", (req, res) => {
  let temp = {
    title: req.body.title,
    content: req.body.content,
    address: req.body.address,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
  };
  //   console.log(req.body);
  Counter.findOne({ name: "counter" })
    .exec()
    .then((counter) => {
      temp.carePostNum = counter.carePostNum;
      Pet.findOne({ _id: req.body.petId })
        .exec()
        .then((petInfo) => {
          temp.pet = petInfo._id;
          User.findOne({ uid: req.body.uid })
            .exec() // userInfo를 return 하기 위해서
            .then((userInfo) => {
              temp.author = userInfo._id;
              const NewCarePost = new CarePost(temp);
              NewCarePost.save().then(() => {
                // counter를 1씩 증가하여 postNum을 증가
                Counter.updateOne(
                  { name: "counter" },
                  { $inc: { carePostNum: 1 } }
                ).then(() => {
                  res.status(200).json({ success: true });
                });
              });
            });
        });
    });

  //   .catch((err) => {
  //     res.status(400).json({ success: false });
  //   });
});

// 저장한 post 모두 list에 보여주기
router.post("/list", (req, res) => {
  CarePost.find()
    .populate("author") // Post 정보를 찾을 때, author의 정보도 모두 추적해서 찾음.
    .populate("pet")
    .exec()
    .then((doc) => {
      res.status(200).json({ success: true, carePostList: doc });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

router.post("/getPostInfo", (req, res) => {
  CarePost.findOne({ carePostNum: req.body.carePostNum })
    .populate("author")
    .exec()
    .then((carePostInfo) => {
      res.status(200).json({ success: true, carePostInfo: carePostInfo });
    });
});

module.exports = router;
