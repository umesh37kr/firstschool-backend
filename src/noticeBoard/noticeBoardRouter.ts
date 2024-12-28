import express from "express";
import { create } from "./noticeBoardController";
import authenticate from "../middlewares/authenticate";
const noticeRouter = express.Router();

noticeRouter.post("/new", authenticate, create);

export default noticeRouter;
