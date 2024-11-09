import express from "express";
import globalErrorHandlers from "./middlewares/globalErrorHandles";
const app = express();

// routes
app.get("/", (req, res) => {
  res.json({ message: "welcome to First School" });
});

// global error handlers
app.use(globalErrorHandlers);

export default app;
