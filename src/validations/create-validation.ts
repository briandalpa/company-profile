import { z } from "zod";

export const blogSchemaForm = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title must be at most 100 characters"),
  category: z
    .string()
    .min(3, "Category must be at least 3 characters")
    .max(50, "Category must be at most 50 characters"),
  content: z.string().min(20, "Content must be at least 20 characters"),
});

export type BlogForm = z.infer<typeof blogSchemaForm>;
