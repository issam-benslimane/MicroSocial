import { NextFunction, Request, Response } from "express";
import * as service from "./relationship.service";
import { mapObject } from "../common/utils";
import { toJSON } from "../users/users.mapper";
import { User } from "@prisma/client";

export const getRelationships = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.query.userId as string;
    const relationships = await service.getRelationships(userId);
    res
      .status(200)
      .json(mapObject(relationships, (users: User[]) => users.map(toJSON)));
  } catch (error) {
    next(error);
  }
};

export const createRelationship = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const followerId = req.user?.id as string;
    const followedId = req.body.followedId as string;
    await service.follow({ followerId, followedId });
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
};

export const destroyRelationship = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const followerId = req.user?.id as string;
    const followedId = req.params.id;
    await service.unfollow({ followerId, followedId });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
