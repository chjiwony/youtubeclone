import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send("<h1>I still love you</h1>");
};
const handleLogin = (req, res) => {
  return res.send("Login here.");
  //   return res.send({ message: "Login here." }); JSON 메세지 보내는 법
};
//(앞부분-request 오브젝트, 두번째-response 오브젝트)
app.get("/", handleHome); //(route, callback)
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
//(포트, 콜백) cont +c 터미널 실행중단
