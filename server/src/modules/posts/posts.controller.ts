import { NextFunction, Request, Response } from "express";
import * as postsService from "./posts.service";
import { PostDto, PostParams } from "./posts.types";

export const getPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const params = req.query as PostParams;
    const posts = await postsService.getPosts(params);
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newPost = {
      content: req.body.content as string,
      userId: req.user?.id,
    } as PostDto;
    const post = await postsService.createPost(newPost);
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const postId = req.params.id;
    const userId = req.user?.id as string;
    await postsService.deletePost(postId, userId);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
