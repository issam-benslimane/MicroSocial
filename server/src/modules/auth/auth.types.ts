import { User } from "@prisma/client";

declare global {
  namespace Express {
    export interface Request {
      user?: User;
    }
  }
}

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
