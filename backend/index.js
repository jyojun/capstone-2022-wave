const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
const config = require("./config/key.js");

const http = require("http").Server(app);
var io = require("socket.io")(http);

const UserRouter = require("./Router/user.js");
const PostRouter = require("./Router/post.js");
const RepleRouter = require("./Router/reple.js");
const PlaceRouter = require("./Router/place.js");
const PlaceRepleRouter = require("./Router/placeReple.js");
const PetRouter = require("./Router/pet.js");
const CarePostRouter = require("./Router/carePost.js");
const MessageRouter = require("./Router/message.js");

app.use(express.static(path.join(__dirname, "../frontend/build"))); // static 폴더를 사용
app.use("/image", express.static("./image")); // image 파일을 server 아래 image폴더 안에서 사용
// client에서 보내는 request.body 정보를 얻기위해 body parser를 사용
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", UserRouter);
app.use("/api/post", PostRouter);
app.use("/api/reple", RepleRouter);
app.use("/api/place", PlaceRouter);
app.use("/api/placeReple", PlaceRepleRouter);
app.use("/api/pet", PetRouter);
app.use("/api/carePost", CarePostRouter);
app.use("/api/message", MessageRouter);

io.on("connection", () => {
  console.log("a user is connected");
});

mongoose
  .connect(config.mongoURI)
  .then(() => {
    // console.log(`Example app listening at http://localhost:${port}`);
    console.log("Connecting MongoDB...");
  })
  .catch((err) => {
    console.log(err);
  });

var server = http.listen(port, () => {
  console.log("server is running on port", server.address().port);
});
// app.listen(port, () => {
//   mongoose
//     .connect(config.mongoURI)
//     .then(() => {})
//     .catch((err) => {
//       console.log(err);
//     });
// });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});
