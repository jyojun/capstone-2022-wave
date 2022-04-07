const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, "../frontend/build"))); // static 폴더를 사용

// client에서 보내는 request.body 정보를 얻기위해 body parser를 사용
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { Post } = require("./Model/Post.js");
app.listen(port, () => {
  mongoose
    .connect(
      "mongodb+srv://wave:sky7514629@cluster0.zht62.mongodb.net/Community?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log(`Example app listening at http://localhost:${port}`);
      console.log("Connecting MongoDB...");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

app.post("/api/post/submit", (req, res) => {
  let temp = req.body;
  const CommunityPost = new Post(temp);
  CommunityPost.save()
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});
