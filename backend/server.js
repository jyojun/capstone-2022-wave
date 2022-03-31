const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
const models = require('./models/index');
const port = 5000;

app.use(
  cors({
    origin: "http://127.0.0.1:3000",
    credentials: true,
  })
);
models.sequelize.sync().then(() => {
  console.log("DB 연결 성공")
}).catch(err => {
  console.log("연결 실패");
  console.log(err);
})

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
  key: 'sid', // 세션의 키값
  secret: 'secret', // 세션의 비밀키, 이 값을 통해 세선을 암호화 하여 저장
  resave: false, // 세션을 항상 저장 하지 않음
  saveUninitialized: true, // 세션이 저장되기 전에 uninitialize 상태로 만들어 저장
  cookie: {
    maxAge: 1000 * 60 * 60 // 쿠키 유효시간 1시간
  }
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`)
})
