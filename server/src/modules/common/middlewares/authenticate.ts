import { Request, Response, NextFunction } from "express";
import { UnauthorizedError } from "../utils/";
import { login } from "../../auth/auth.service";

export const authenticate = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const authorization = req.get("authorization");
    const token = getToken(authorization);
    req.user = login(token);
    next();
  } catch (error) {
    next(error);
  }
};

const getToken = (authorization: string | undefined) => {
  if (!authorization)
    throw new UnauthorizedError("Authorization header required!");
  const [schema, token] = authorization.split(/\s/);
  if (schema.toLowerCase() !== "bearer")
    throw new UnauthorizedError("Invalid authorization schema!");
  return token;
};
