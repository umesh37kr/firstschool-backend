import express from "express";
import globalErrorHandlers from "./middlewares/globalErrorHandles";
import UserRouter from "./user/userRouter";
import studentRouter from "./student/studentRouter";
import teacherRouter from "./teacher/teacherRouter";
const app = express();
app.use(express.json());
// routes
app.get("/", (req, res) => {
  res.json({ message: "welcome to First School" });
});
app.use("/api/user", UserRouter);
app.use("/api/student", studentRouter);
app.use("/api/teacher", teacherRouter);

// global error handlers
app.use(globalErrorHandlers);

export default app;
