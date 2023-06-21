import { Prisma, User } from "@prisma/client";

export type UserFindUniqueArgs = Prisma.UserFindUniqueArgs;

export type UserDto = Prisma.UserCreateInput;

export type UserJson = Omit<User, "passwordHash">;
