import express from "express";
import { create } from "./teacherController";
const teacherRouter = express.Router();

teacherRouter.post("/create", create);

export default teacherRouter;
