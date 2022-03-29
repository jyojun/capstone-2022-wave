const express = require('express');
const models = require('../models/index');
const router = express.Router();

/* GET home page. */
router.get('/api', function(req, res, next) {
  res.json({ title: 'Express' });
});

router.get('/board', function(req, res, next) {
  models.post.findAll().then( result => {
    res.json({
      result
    });
  });
});

router.post('/board', function(req, res, next) {
  let body = req.body;

  models.post.create({
    title: body.inputTitle,
    writer: body.inputWriter
  }).then( result => {
    console.log("데이터 추가 완료");
    res.redirect("/board");
  }).catch( err => {
    console.log("데이터 추가 실패");
  })
})

router.put('/board:id', function(req, res, next) {
  let postID = req.params.id;
  let body = req.body;

  models.post.update({
    title: body.editTItle,
    writer: body.editWriter
  }, {
    where: {id: postID}
  })
  .then( result => {
    console.log("데이터 수정 완료");
    res.redirect("/board");
  })
  .catch( err => {
    console.log("데이터 수정 실패");
  });
});

router.delete('/board/:id', function(req, res, next) {
  let postID = req.params.id;

  models.post.destroy({
    where: {id: postID}
  })
  .then( result => {
    res.redirect("/board")
  })
  .catch( err => {
    console.log("데이터 삭제 실패");
  })
})

module.exports = router;
