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
    rollNumber,
    firstName,
    lastName,
    dateOfBirth,
    gender,
    classes,
    section,
    contactInfo,
    address,
  } = req.body;

  try {
    const rollNumberExist = await studentModel.findOne({ rollNumber });
    if (rollNumberExist) {
      const error = createHttpError(409, "Roll number already exist");
      return next(error);
    }
    const student = await studentModel.create({
      rollNumber,
      firstName,
      lastName,
      dateOfBirth,
      gender,
      classes,
      section,
      contactInfo,
      address,
    });
    res.status(201).json({ id: student });
  } catch (error) {
    console.log(error);
    return next(createHttpError(400, "something went wrong"));
  }
};

export const studentList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const students = await studentModel.find();
    if (students.length === 0) {
      res.status(200).json({ message: "No records found" });
    }
    res.status(200).json({ students: students });
  } catch (error) {
    console.log(error);
    return next(createHttpError(500, "something went wrong"));
  }
};
