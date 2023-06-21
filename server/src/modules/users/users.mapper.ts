import { User } from "@prisma/client";
import { UserJson } from "./users.types";
import { omit } from "../common/utils";

export const toJSON = (user: User) => {
  return omit(user, "passwordHash") as UserJson;
};
