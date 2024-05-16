import { NextFunction, Request, Response } from "express";

export function userSetter(
  req: Request,
  _res: Response,
  next: NextFunction
): void {
  const header = req.headers["user-id"] as string;
  req.user = { id: header } || null;
  next();
}
