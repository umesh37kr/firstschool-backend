import { NextFunction, Request, Response } from "express";
import noticeBoardModel from "./noticeBoardModel";
import createHttpError from "http-errors";
import moment from "moment";

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

export const noticeList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const noticeData = await noticeBoardModel.find();
    const noticeList = noticeData.map((notice) => {
      return {
        _id: notice._id,
        notice: notice.notice,
        createdAt: moment(notice.createdAt).format("DD/MM/YYYY"), // Format the date
      };
    });
    return res.status(200).json({ data: noticeList });
  } catch (error) {
    next(error);
    return createHttpError(500, "something went worong..");
  }
};