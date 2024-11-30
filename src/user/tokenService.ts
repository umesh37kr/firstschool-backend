import { JwtPayload, sign } from "jsonwebtoken";
import { config } from "../config/config";

export const generateToken = (payload: JwtPayload) => {
  const token = sign(payload, config.jwtSecret as string, {
    expiresIn: "7d",
    algorithm: "HS256",
  });
  return token;
};
