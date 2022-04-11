const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
const PostRouter = require("./Router/post.js");
app.use(express.static(path.join(__dirname, "../frontend/build"))); // static 폴더를 사용

// client에서 보내는 request.body 정보를 얻기위해 body parser를 사용
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/post", PostRouter);

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
