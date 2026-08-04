import { z } from "zod";


export const courseSchema = z.object({

  title: z
    .string()
    .min(3, "Course title must be at least 3 characters"),


  description: z
    .string()
    .min(20, "Description must be at least 20 characters"),


  subject: z
    .string()
    .min(1, "Subject is required"),


  gradeLevel: z
    .string()
    .min(1, "Grade level is required"),


  courseType: z
    .string()
    .min(1, "Course type is required"),


  duration: z
    .string()
    .min(1, "Duration is required"),


  thumbnail: z
    .string()
    .optional(),


  price: z
    .number()
    .min(0, "Price cannot be negative"),


  status: z.enum([
    "Draft",
    "Published",
    "Archived",
  ]),

});


export type CourseFormValues =
  z.infer<typeof courseSchema>;