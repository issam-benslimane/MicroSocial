import { BadRequestError, UnauthorizedError } from "../common/utils";
import * as usersService from "../users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../config";
import { LoginDto, SignupDto } from "./auth.types";
import { User } from "@prisma/client";
import { faker } from "@faker-js/faker";

export const signUp = async (data: SignupDto) => {
  const { name, email, password } = data;
  const passwordHash = await bcrypt.hash(password, 10);
  const newUser = await usersService.createUser({
    name,
    email,
    passwordHash,
    avatarUrl: faker.image.avatar(),
  });
  const token = generateToken(newUser);
  return { user: newUser, token };
};

export function login(
  credentials: LoginDto
): Promise<{ user: User; token: string }>;
export function login(token: string): User;
export function login(data: LoginDto | string) {
  return typeof data === "string"
    ? loginByToken(data)
    : loginByCredentials(data);
}

const loginByCredentials = async (credentials: LoginDto) => {
  const { email, password } = credentials;
  const user = await usersService.getUserBy({ where: { email } });
  const areValidCredentials =
    user && (await bcrypt.compare(password, user.passwordHash));
  if (!areValidCredentials)
    throw new BadRequestError("Username or Password incorrect!");
  const token = generateToken(user);
  return { user, token };
};

export const loginByToken = (token: string) => {
  try {
    return jwt.verify(token, config.JWTSECRET) as User;
  } catch (error) {
    throw new UnauthorizedError("invalid token!");
  }
};

export const logout = () => {
  //delete token
};

const generateToken = (payload: string | object) => {
  const token = jwt.sign(payload, config.JWTSECRET);
  return token;
};
