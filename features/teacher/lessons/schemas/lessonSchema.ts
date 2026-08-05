import { z } from "zod";

export const lessonSchema = z.object({
  title: z.string().min(3, "Lesson title is required"),

  description: z.string().min(10, "Description is required"),

  chapterId: z.string().min(1, "Select a chapter"),

  type: z.enum([
    "Video",
    "PDF",
    "Document",
    "Assignment",
    "Live Class",
  ]),

  duration: z.string().min(1, "Duration is required"),

  isPreview: z.boolean(),

  status: z.enum([
    "Draft",
    "Published",
  ]),
});

export type LessonFormValues = z.infer<typeof lessonSchema>;