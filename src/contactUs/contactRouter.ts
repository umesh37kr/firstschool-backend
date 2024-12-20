import express from "express";
import { createPost } from "./contactController";
import contactValidator from "./contact-validator";
const contactRouter = express.Router();

contactRouter.post("/create", contactValidator, createPost);

export default contactRouter;
