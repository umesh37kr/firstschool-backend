import express from "express";
import { create, deleteNotice, noticeList } from "./noticeBoardController";
import authenticate from "../middlewares/authenticate";
const noticeRouter = express.Router();

noticeRouter.post("/new", authenticate, create);
noticeRouter.get("/list", noticeList);
noticeRouter.delete("/:id", authenticate, deleteNotice);

export default noticeRouter;
