export interface Lesson {
  id: number;
  courseId: number;

  title: string;
  description: string;

  chapter: string;

  duration: string;

  type:
    | "Video"
    | "PDF"
    | "Live Class"
    | "Assignment";

  status:
    | "Published"
    | "Draft";

  createdAt: string;

  updatedAt: string;
}

export const lessons: Lesson[] = [
  {
    id: 1,
    courseId: 1,
    title: "Introduction to Algebra",
    description:
      "Learn the fundamentals of algebra and variables.",
    chapter: "Chapter 1",
    duration: "45 mins",
    type: "Video",
    status: "Published",
    createdAt: "2026-08-01",
    updatedAt: "2026-08-02",
  },
  {
    id: 2,
    courseId: 1,
    title: "Linear Equations",
    description:
      "Understanding one-variable linear equations.",
    chapter: "Chapter 2",
    duration: "50 mins",
    type: "Video",
    status: "Published",
    createdAt: "2026-08-02",
    updatedAt: "2026-08-03",
  },
  {
    id: 3,
    courseId: 2,
    title: "Introduction to Biology",
    description:
      "Basic concepts of biology.",
    chapter: "Chapter 1",
    duration: "40 mins",
    type: "PDF",
    status: "Draft",
    createdAt: "2026-08-03",
    updatedAt: "2026-08-03",
  },
];