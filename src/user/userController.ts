import { Request, Response } from "express";

const createUser = (req: Request, res: Response) => {
  res.json({ message: "user created" });
};

export { createUser };
