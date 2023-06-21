import { Router } from "express";
import { authenticate } from "../common/middlewares/authenticate";
import * as controller from "./users.controller";

export const usersRouter = Router();

usersRouter.get("/", controller.getUsers);
usersRouter.get("/:id", controller.getUser);
usersRouter.get("/:id/followers", authenticate, controller.getFollowers);
usersRouter.get("/:id/following", authenticate, controller.getFollowing);
