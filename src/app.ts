import express from "express";
import globalErrorHandlers from "./middlewares/globalErrorHandles";
import UserRouter from "./user/userRouter";
const app = express();
app.use(express.json());
// routes
app.get("/", (req, res) => {
  res.json({ message: "welcome to First School" });
});
app.use("/api/user", UserRouter);

// global error handlers
app.use(globalErrorHandlers);

export default app;
