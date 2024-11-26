import express from "express";
import {
  registerStudent,
  singleStudent,
  studentList,
} from "./studentController";
import studentValidator from "./student-validator";
const studentRouter = express.Router();

studentRouter.post("/register", studentValidator, registerStudent);
studentRouter.get("/", studentList);
studentRouter.get("/:id", singleStudent);

export default studentRouter;
