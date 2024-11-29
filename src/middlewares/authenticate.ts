import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config/config";
import createHttpError from "http-errors";

export interface AuthRequest extends Request {
  userId: string;
}
const authenticate = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return next(createHttpError(404, "token not found"));
    }
    const parsedToken = token.split(" ")[1];
    const decoded = jwt.verify(parsedToken, config.jwtSecret as string);
    const _req = req as AuthRequest;
    _req.userId = decoded.sub as string;
    next();
  } catch (error) {
    console.log(error);
    return next(createHttpError(401, "failed while authenticating.."));
  }
};
export default authenticate;
