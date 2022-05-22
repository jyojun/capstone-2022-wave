const express = require("express");
const router = express.Router();
const { Post } = require("../Model/Post.js");
const { Counter } = require("../Model/Counter.js");
const { User } = require("../Model/User.js");
const setUpload = require("../Util/upload.js");

router.post("/submit", (req, res) => {
  let temp = {
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    image: req.body.image,
  };
  //   console.log(req.body);
  Counter.findOne({ name: "counter" })
    .exec()
    .then((counter) => {
      temp.postNum = counter.postNum;
      User.findOne({ uid: req.body.uid })
        .exec() // userInfo를 return 하기 위해서
        .then((userInfo) => {
          temp.author = userInfo._id;
          const CommunityPost = new Post(temp);
          CommunityPost.save().then(() => {
            // counter를 1씩 증가하여 postNum을 증가
            Counter.updateOne(
              { name: "counter" },
              { $inc: { postNum: 1 } }
            ).then(() => {
              res.status(200).json({ success: true });
            });
          });
        });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

// 저장한 post 모두 list에 보여주기
router.post("/list", (req, res) => {
  let sort = {};

  if (req.body.sort === "최신순") {
    // 최신순
    sort.createdAt = -1; // 최신순으로 내림차순
  } else {
    // 인기순
    sort.repleNum = -1; // 인기순 내림차순
  }
  Post.find({
    // 제목이나 내용에 일치하는 내용이 있는지 확인 $regex객체에 포함하는 검색내용
    $and: [{ category: { $regex: req.body.category } }],
    $or: [
      { title: { $regex: req.body.searchTerm } },
      { content: { $regex: req.body.searchTerm } },
    ],
  })
    .populate("author") // Post 정보를 찾을 때, author의 정보도 모두 추적해서 찾음.
    .sort(sort)
    .skip(req.body.skip) // 0, 5, 10, ...
    .limit(5) // 한번에 찾을 document 숫자
    .exec()
    .then((doc) => {
      res.status(200).json({ success: true, postList: doc });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

router.post("/detail", (req, res) => {
  Post.findOne({ postNum: Number(req.body.postNum) })
    .populate("author")
    .exec()
    .then((doc) => {
      res.status(200).json({ success: true, postList: doc });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

router.post("/edit", (req, res) => {
  let temp = {
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
  };
  Post.updateOne({ postNum: Number(req.body.postNum) }, { $set: temp })
    .exec()
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

router.post("/delete", (req, res) => {
  Post.deleteOne({ postNum: Number(req.body.postNum) }) // postNum으로 삭제할 글 추적
    .exec()
    .then((doc) => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

// 집사와의 일상
router.post("/daily", (req, res) => {
  let sort = {};

  sort.createdAt = -1; // 최신순으로 내림차순

  Post.find({ category: "집사와의 하루" })
    .populate("author") // Post 정보를 찾을 때, author의 정보도 모두 추적해서 찾음.
    .sort(sort)
    .limit(2) // 한번에 찾을 document 숫자
    .exec()
    .then((doc) => {
      res.status(200).json({ success: true, postList: doc });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

router.post("/image/upload", setUpload("pecus2022/post"), (req, res, next) => {
  res.status(200).json({ success: true, filePath: res.req.file.location });
});

module.exports = router;
