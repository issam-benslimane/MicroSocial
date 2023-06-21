import * as z from "zod";

export const signupSchema = z
  .object({
    name: z
      .string()
      .min(3)
      .regex(/^[a-zA-Z]+$/),
    email: z.string().email(),
    password: z.string().min(6),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ["passwordConfirmation"],
  });
