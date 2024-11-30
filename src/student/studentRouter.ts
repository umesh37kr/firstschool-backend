import express from "express";
import multer from "multer";
import path from "node:path";
import {
  deleteStudent,
  registerStudent,
  singleStudent,
  studentList,
} from "./studentController";
import studentValidator from "./student-validator";
import authenticate from "../middlewares/authenticate";
const studentRouter = express.Router();

const upload = multer({
  dest: path.resolve(__dirname, "../../public/data/uploads"),
});
studentRouter.post(
  "/register",
  authenticate,
  upload.single("avatar"),
  studentValidator,
  registerStudent
);
studentRouter.get("/", studentList);
studentRouter.get("/:id", singleStudent);
studentRouter.delete("/:id", authenticate, deleteStudent);

export default studentRouter;
