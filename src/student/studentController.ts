import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import createHttpError from "http-errors";
import studentModel from "./studentModel";

export const registerStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return next(createHttpError(400, result.array()[0].msg as string));
  }

  const {
    firstName,
    lastName,
    dateOfBirth,
    classes,
    section,
    rollNumber,
    contactInfo,
    address,
  } = req.body;

  try {
    const student = await studentModel.create({
      firstName,
      lastName,
      dateOfBirth,
      classes,
      section,
      rollNumber,
      contactInfo,
      address,
    });
    res.status(201).json({ id: student });
  } catch (error) {
    console.log(error);
    next(createHttpError(400, "something went wrong"));
  }
};
