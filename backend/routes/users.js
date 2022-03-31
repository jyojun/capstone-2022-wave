const express = require('express');
const models = require('../models');
const router = express.Router();
const crypto = require('crypto');


// 유저 리스트 반환
router.get('/', function(req, res, next) {
  res.send("환영합니다!");
});

// 회원가입
router.post("/register", function(req,res,next) {
  let body = req.body;

  // 암호화
  let inputPassword = body.password;
  let salt = Math.round((new Date().valueOf() * Math.random())) + "";
  let hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");

  let result = models.user.create({
    name: body.userName,
    email: body.userEmail,
    password: hashPassword,
    salt: salt
  })

  res.redirect("/users/register");
})

router.get('/login', function(req, res, next) {
  let session = req.session;
  console.log(session.email);
  res.json({session: session});
})

// 로그인
router.post('/login', async function(req, res, next) {
  let body = req.body;

  let result = await models.user.findOne({
    where: {
      email: body.userEmail
    }
  });

  let dbPassword = result.dataValues.password;
  let inputPassword = body.password;
  let salt = result.dataValues.salt;
  let hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");

  if(dbPassword === hashPassword) {
    console.log("비밀번호 일치");

    req.session.email = body.userEmail; // 세션 설정
  } else {
    console.log("비밀번호 불일치");
  }
})

// 로그아웃
router.get("/logout", async function(req, res, next) {
  req.session.destroy();
  res.clearCookie('sid');
})
module.exports = router;
