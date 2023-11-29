import { z } from "zod";

export const issueSchema = z.object({
  title: z.string().min(1, "Tittle is required").max(225),
  description: z.string().min(1, "Description is required").max(65535),
});

export const patchIssueSchema = z.object({
  title: z.string().min(1, "Tittle is required").max(225).optional(),
  description: z
    .string()
    .min(1, "Description is required")
    .max(65535)
    .optional(),
  assignedToUserId: z
    .string()
    .min(1, "AssigedToUserId is Required.")
    .max(255)
    .optional()
    .nullable(),
});
