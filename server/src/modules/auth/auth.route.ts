import { Router } from "express";
import { getLoggedUser, login, logout, signup } from "./auth.controller";
import { signupSchema } from "./auth.schemas";
import { authenticate, validateRequestBody } from "../common/middlewares/";

export const authRouter = Router();

authRouter.post("/signup", validateRequestBody(signupSchema), signup);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.get("/me", authenticate, getLoggedUser);
