import { BadRequestError } from "../common/utils";
import { UserDto, UserFindUniqueArgs } from "./users.types";
import db from "../../db";

export const getUsers = async () => {
  const users = await db.user.findMany();
  return users;
};

export const getUserBy = async (query: UserFindUniqueArgs) => {
  const user = await db.user.findUnique(query);
  if (user == null) throw new BadRequestError("User not found!");
  return user;
};

export const createUser = async (user: UserDto) => {
  try {
    const newUser = await db.user.create({ data: user });
    return newUser;
  } catch (error) {
    throw new BadRequestError("Email already exists!");
  }
};

export const getFollowers = async (id: string) => {
  const user = await getUserBy({
    where: { id },
    select: {
      followers: {
        select: {
          followed: true,
        },
      },
    },
  });
  return user;
};

export const getFollowing = async (id: string) => {
  const user = await getUserBy({
    where: { id },
    select: {
      following: {
        select: {
          follower: true,
        },
      },
    },
  });
  return user;
};
