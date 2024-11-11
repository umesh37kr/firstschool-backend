import express from "express";
import { createUser } from "./userController";
import userValidator from "./userValidator";
const UserRouter = express.Router();

UserRouter.post("/register", userValidator, createUser);

export default UserRouter;
