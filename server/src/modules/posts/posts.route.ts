import { Router } from "express";
import { authenticate, validateRequestBody } from "../common/middlewares";
import * as controller from "./posts.controller";
import { createPostSchema } from "./posts.schemas";

export const postsRouter = Router();

postsRouter.use(authenticate);
postsRouter.get("/", controller.getPosts);
postsRouter.post(
  "/",
  validateRequestBody(createPostSchema),
  controller.createPost
);
postsRouter.delete("/:id", controller.deletePost);
