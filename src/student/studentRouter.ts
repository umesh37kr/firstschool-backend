import express from "express";
import { registerStudent } from "./studentController";
import studentValidator from "./student-validator";
const studentRouter = express.Router();

studentRouter.post("/register", studentValidator, registerStudent);

export default studentRouter;
