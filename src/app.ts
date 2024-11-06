import express from "express";
const app = express();

// routes
app.get("/", (req, res) => {
  res.json({ message: "welcome to First School" });
});
export default app;
