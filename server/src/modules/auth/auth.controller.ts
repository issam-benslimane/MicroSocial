import { NextFunction, Request, Response } from "express";
import * as authService from "./auth.service";
import { SignupDto, LoginDto } from "./auth.types";
import { toJSON } from "../users/users.mapper";
import { User } from "@prisma/client";

export async function signup(req: Request, res: Response, next: NextFunction) {
  try {
    const { user, token } = await authService.login(req.body as SignupDto);
    res.status(201).json({ token, user: toJSON(user) });
  } catch (error) {
    next(error);
  }
}

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { user, token } = await authService.login(req.body as LoginDto);
    res.status(200).json({ token, user: toJSON(user) });
  } catch (error) {
    next(error);
  }
}

export function getLoggedUser(req: Request, res: Response, next: NextFunction) {
  try {
    const user = req.user as User;
    res.status(200).json(toJSON(user));
  } catch (error) {
    next(error);
  }
}

export function logout(_req: Request, _res: Response, _next: NextFunction) {
  return;
}
