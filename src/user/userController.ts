import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";
const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return next(createHttpError(400, result.array()[0].msg as string));
    // return res.status(400).json({ errors: result.array() });
  }
  const { username, password, role } = req.body;
  const user = await userModel.findOne({ username });
  if (user) {
    return next(createHttpError(409, "username is already exist"));
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  // token generation

  // res
  const newUser = await userModel.create({
    username,
    role,
    password: hashedPassword,
  });

  res.json({ id: newUser._id });
};

export { createUser };
