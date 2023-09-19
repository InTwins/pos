import { z } from "zod";

export const createBrandValidator = z.object({
  name: z.string().min(2, "Enter minimun 2 characters"),
  description: z.string().min(5),
});
