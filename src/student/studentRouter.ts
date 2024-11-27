import express from "express";
import multer from "multer";
import path from "node:path";
import {
  registerStudent,
  singleStudent,
  studentList,
} from "./studentController";
import studentValidator from "./student-validator";
const studentRouter = express.Router();

const upload = multer({
  dest: path.resolve(__dirname, "../../public/data/uploads"),
});
studentRouter.post(
  "/register",
  upload.single("avatar"),
  studentValidator,
  registerStudent
);
studentRouter.get("/", studentList);
studentRouter.get("/:id", singleStudent);

export default studentRouter;
