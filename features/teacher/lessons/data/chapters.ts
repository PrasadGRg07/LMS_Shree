import { Chapter } from "../types/chapter";

export const teacherChapters: Chapter[] = [
  {
    id: "chapter-1",
    courseId: "course-1",
    title: "Chapter 1 - Introduction",
    description: "Introduction to the course",
    order: 1,
    status: "Published",
    createdAt: "2026-08-05",
  },
  {
    id: "chapter-2",
    courseId: "course-1",
    title: "Chapter 2 - Number System",
    description: "Learn numbers and operations",
    order: 2,
    status: "Published",
    createdAt: "2026-08-05",
  },
  {
    id: "chapter-3",
    courseId: "course-1",
    title: "Chapter 3 - Algebra",
    description: "Variables and equations",
    order: 3,
    status: "Draft",
    createdAt: "2026-08-05",
  },
];