const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;
const config = require("./server/config/key.js");

const http = require("http").Server(app);
var io = require("socket.io")(http);

const UserRouter = require("./server/Router/user.js");
const PostRouter = require("./server/Router/post.js");
const RepleRouter = require("./server/Router/reple.js");
const PlaceRouter = require("./server/Router/place.js");
const PlaceRepleRouter = require("./server/Router/placeReple.js");
const PetRouter = require("./server/Router/pet.js");
const CarePostRouter = require("./server/Router/carePost.js");
const MessageRouter = require("./server/Router/message.js");

app.use(express.static(path.join(__dirname, "./frontend/build"))); // static 폴더를 사용
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

// io.on("connection", (socket) => {
//   console.log("a user is connected");
//   socket.emit("message", {
//     name: "hyojun",
//     message: "hello",
//   });
// });

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
  res.sendFile(path.join(__dirname, "./frontend/build/index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontend/build/index.html"));
});
