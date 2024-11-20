import express from "express";
import { registerStudent, studentList } from "./studentController";
import studentValidator from "./student-validator";
const studentRouter = express.Router();

studentRouter.post("/register", studentValidator, registerStudent);
studentRouter.get("/", studentValidator, studentList);

export default studentRouter;
