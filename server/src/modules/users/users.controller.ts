import { NextFunction, Request, Response } from "express";
import * as usersService from "./users.service";
import * as usersMapper from "./users.mapper";

export const getUsers = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await usersService.getUsers();
    res.status(200).json(users.map(usersMapper.toJSON));
  } catch (error) {
    next(error);
  }
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const user = await usersService.getUserBy({ where: { id } });
    res.status(200).json(usersMapper.toJSON(user));
  } catch (error) {
    next(error);
  }
};

export const getFollowers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const followers = await usersService.getFollowers(id);
    res.status(200).json(followers.map(usersService.toJSON));
  } catch (error) {
    next(error);
  }
};

export const getFollowing = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const following = await usersService.getFollowing(id);
    res.status(200).json(following.map(usersService.toJSON));
  } catch (error) {
    next(error);
  }
};
