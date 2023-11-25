import { z } from "zod";

export const issueSchema = z.object({
  title: z.string().min(1, "Tittle is required").max(225),
  description: z.string().min(1, "Description is required"),
});
