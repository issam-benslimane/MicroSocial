import * as z from "zod";

export const signupSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Name must have 3 or more characters" })
      .regex(/^[a-zA-Z]+$/, { message: "Invalid name" }),
    email: z.string().email(),
    password: z
      .string()
      .min(6, { message: "Password must have 6 or more characters" }),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ["passwordConfirmation"],
  });
