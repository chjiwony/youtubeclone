import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method}: ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed, you may continue");
  next();
};

const handleHome = (req, res) => {
  return res.send("I love middleware");
};

const handleProtected = (req, res) => {
  return res.send("Welcome to the private lounge");
};

app.use(logger); //순서. use(middleware) 먼저, 그다음 get
//app.use() global middleware. 어느 URL 에도 작동
app.use(privateMiddleware);
app.get("/", handleHome); //(route, callback)
app.get("/protected", handleProtected);

//middleware - request, response 사이의 소프트웨어
//all handlers(controller) are middlewares, all middlewares are handlers(controller - .ex handleHome/handleLogin)
//(앞부분-request 오브젝트, 두번째-response 오브젝트)

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
//(포트, 콜백) cont +c 터미널 실행중단
