import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { config } from "../config/config";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return next(createHttpError(400, result.array()[0].msg as string));
    // return res.status(400).json({ errors: result.array() });
  }
  const { username, password, role } = req.body;
  try {
    const user = await userModel.findOne({ username });
    if (user) {
      return next(createHttpError(409, "username is already exist"));
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    // res
    const newUser = await userModel.create({
      username,
      role,
      password: hashedPassword,
    });
    // token generation
    const token = sign({ sub: newUser._id }, config.jwtSecret as string, {
      expiresIn: "7d",
      algorithm: "HS256",
    });
    res.json({ accessToken: token });
  } catch (error) {
    console.log(error);
    return next(createHttpError(500, "error while creating user"));
  }
};

export { createUser };
