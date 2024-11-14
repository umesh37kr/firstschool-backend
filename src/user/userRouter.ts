import express from "express";
import { createUser, loginUser } from "./userController";
import userValidator from "./register-Validator";
import loginValidator from "./login-validator";
const UserRouter = express.Router();

UserRouter.post("/register", userValidator, createUser);
UserRouter.post("/login", loginValidator, loginUser);

export default UserRouter;
