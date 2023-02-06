import express from "express";
import {
  watch,
  edit,
  upload,
  deleteVideo,
} from "../controllers/videoControllers";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch); //:id    parameters, URL에 변수를 담는다
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
videoRouter.get("/upload", upload); //이제 제일 뒤에 와도 숫자와 구별된다.
// \d 숫자 + 끝까지 \w 글자
// 각 js 는 독립적이므로 Video 지우고 다른 js 함수와 같아도 된다.
export default videoRouter;
