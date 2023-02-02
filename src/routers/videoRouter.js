import express from "express";
import {
  see,
  edit,
  upload,
  deleteVideo,
} from "../controllers/videoControllers";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id", see);
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/delete", deleteVideo);

// 각 js 는 독립적이므로 Video 지우고 다른 js 함수와 같아도 된다.
export default videoRouter;
