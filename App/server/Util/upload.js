const AWS = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const path = require("path");
const config = require("../config/key.js");
const s3 = new AWS.S3({
  accessKeyId: config.access_key,
  secretAccessKey: config.secret_key,
  region: "ap-northeast-2",
});

function setUpload(bucket) {
  const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: bucket,
      key: function (req, file, cb) {
        let extension = path.extname(file.originalname);
        cb(null, Date.now().toString() + extension);
      },
      acl: "public-read-write",
    }),
  }).single("file");
  return upload;
}
module.exports = setUpload;
