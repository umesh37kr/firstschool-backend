import express from "express";
import {
  create,
  deleteNotice,
  noticeList,
  updateNotice,
} from "./noticeBoardController";
import authenticate from "../middlewares/authenticate";
const noticeRouter = express.Router();

noticeRouter.post("/new", authenticate, create);
noticeRouter.get("/list", noticeList);
noticeRouter.delete("/:id", authenticate, deleteNotice);
noticeRouter.put("/:id", authenticate, updateNotice);

export default noticeRouter;
