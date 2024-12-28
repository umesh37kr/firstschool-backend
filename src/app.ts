import express from "express";
import cors, { CorsOptions } from "cors";
import globalErrorHandlers from "./middlewares/globalErrorHandles";
import UserRouter from "./user/userRouter";
import studentRouter from "./student/studentRouter";
import teacherRouter from "./teacher/teacherRouter";
import { config } from "./config/config";
import contactRouter from "./contactUs/contactRouter";
import noticeRouter from "./noticeBoard/noticeBoardRouter";
const app = express();

const allowedOrigins = [config.frontendUserDomain, config.frontendDomain];

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));

app.use(express.json());
// routes
app.get("/", (req, res) => {
  res.json({ message: "welcome to First School" });
});
app.use("/api/user", UserRouter);
app.use("/api/student", studentRouter);
app.use("/api/teacher", teacherRouter);
app.use("/api/contact", contactRouter);
app.use("/api/notice", noticeRouter);

// global error handlers
app.use(globalErrorHandlers);

export default app;
