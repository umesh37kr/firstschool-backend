import { NextFunction, Request, Response } from "express";
import contactModel from "./contactModel";
import { validationResult } from "express-validator";
import createHttpError from "http-errors";

export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return next(createHttpError(400, result.array()[0].msg as string));
    }

    const { name, mobile, message } = req.body;
    const contacts = await contactModel.create({
      name,
      mobile,
      message,
    });

    return res.status(201).json({ message: "yor message is sent", contacts });
  } catch (error) {
    console.log(error);
  }
};

export const postList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const list = await contactModel.find();
    if (!list) {
      return res.status(404).json({ message: "Records not found.." });
    }
    return res.status(200).json({ data: list });
  } catch (error) {
    console.log("error:", error);
    return next(createHttpError(500, "something went wrong.."));
  }
};
