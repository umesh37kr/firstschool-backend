import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";
import { generateToken } from "./tokenService";

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
    const payload = {
      sub: newUser._id,
      role: newUser.role,
    };
    const token = generateToken(payload);
    res.status(201).json({ accessToken: token });
  } catch (error) {
    console.log(error);
    return next(createHttpError(500, "error while creating user"));
  }
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return next(createHttpError(400, result.array()[0].msg as string));
  }
  const { username, password } = req.body;
  const user = await userModel.findOne({ username });
  try {
    if (!user) {
      return next(createHttpError(400, "username or password does not match!"));
    }
    const passwordMatched = await bcrypt.compare(password, user.password);
    if (!passwordMatched) {
      return next(createHttpError(400, "username or password does not match!"));
    }
    // token generation
    const payload = {
      sub: user._id,
      role: user.role,
    };
    const token = generateToken(payload);

    res.status(200).json({ user: user._id, token: token });
  } catch (error) {
    console.log(error);
  }
};

export { createUser, loginUser };
