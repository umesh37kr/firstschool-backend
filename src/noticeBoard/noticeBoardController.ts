import { NextFunction, Request, Response } from "express";
import noticeBoardModel from "./noticeBoardModel";
import createHttpError from "http-errors";

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { notice } = req.body;
    if (!notice) {
      return res
        .status(400)
        .json({ message: "Error: notice can not be empty" });
    }
    const noticeData = await noticeBoardModel.create({
      notice,
    });
    res
      .status(201)
      .json({ message: "created sucessfully..", _id: noticeData._id });
  } catch (error) {
    next(createHttpError(500, "something went wrong.."));
    next(error);
  }
};
