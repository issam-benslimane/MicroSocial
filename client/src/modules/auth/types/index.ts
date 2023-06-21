import { User } from "../../users";

export type SignupDto = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export type LoginDto = {
  email: string;
  password: string;
};

export type AuthPayload = {
  user: User;
  token: string;
};
