import express from "express";
import { create, noticeList } from "./noticeBoardController";
import authenticate from "../middlewares/authenticate";
const noticeRouter = express.Router();

noticeRouter.post("/new", authenticate, create);
noticeRouter.get("/list", noticeList);

export default noticeRouter;
