import express from "express";

const PORT = 4000;

const app = express();

const routerLogger = (req, res, next) => {
  // return res.send("ww");  종결. 다음으로 넘어가지 않는다.
  console.log(`Path - ${req.path}`);
  next();
};

const methodLogger = (req, res, next) => {
  console.log(`Method - ${req.method} URL -  ${req.url}`);
  next();
};

const home = (req, res) => {
  console.log("I will respond");
  return res.send("hello");
};

const login = (req, res) => {
  return res.send("login");
};
app.use(methodLogger, routerLogger);
app.get("/", home);
app.get("/login", login);
// app.get("/", methodLogger, routerLogger, home);
// app.get("/login", methodLogger, routerLogger,login);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
