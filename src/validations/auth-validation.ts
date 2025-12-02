import { z } from "zod";

export const loginSchemaForm = z.object({
  email: z.email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export type LoginForm = z.infer<typeof loginSchemaForm>;
