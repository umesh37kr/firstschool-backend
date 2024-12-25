import express from "express";
import { createPost, postList } from "./contactController";
import contactValidator from "./contact-validator";
import authenticate from "../middlewares/authenticate";
const contactRouter = express.Router();

contactRouter.post("/create", contactValidator, createPost);
contactRouter.get("/post-list", authenticate, postList);

export default contactRouter;
