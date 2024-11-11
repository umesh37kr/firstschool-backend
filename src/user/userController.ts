import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import createHttpError from "http-errors";

const createUser = (req: Request, res: Response, next: NextFunction) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return next(createHttpError(400, result.array()[0].msg as string));
    // return res.status(400).json({ errors: result.array() });
  }
  const userData = req.body;
  res.json({ message: "user created", userData });
};

export { createUser };
