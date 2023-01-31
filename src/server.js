import express from "express";

const PORT = 4000;

const app = express();

const gossipMiddleware = (req, res, next) => {
  console.log(`Someone is going to: ${req.url}`);
  next();
};

const handleHome = (req, res) => {
  return res.send("I love middleware");
};
app.get("/", gossipMiddleware, handleHome); //(route, callback)

//middleware - request, response 사이의 소프트웨어
//all handlers(controller) are middlewares, all middlewares are handlers(controller - .ex handleHome/handleLogin)
//(앞부분-request 오브젝트, 두번째-response 오브젝트)

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
//(포트, 콜백) cont +c 터미널 실행중단
