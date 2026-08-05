import { Lesson } from "../types/lesson";

export const teacherLessons: Lesson[] = [
  {
    id: "lesson-1",
    courseId: "course-1",
    chapterId: "chapter-1",

    title: "Introduction to Mathematics",
    description:
      "Welcome to the course. Learn the objectives, structure, and how the lessons will be conducted.",

    type: "Video",

    duration: "15 min",

    videoUrl: "https://example.com/videos/introduction",

    resources: [
      "/resources/course-outline.pdf",
    ],

    isPreview: true,

    status: "Published",

    order: 1,

    createdAt: "2026-08-05",
  },

  {
    id: "lesson-2",
    courseId: "course-1",
    chapterId: "chapter-1",

    title: "Course Outline",
    description:
      "Download the complete course outline and syllabus.",

    type: "PDF",

    duration: "10 min",

    pdfUrl: "/documents/course-outline.pdf",

    resources: [
      "/documents/course-outline.pdf",
    ],

    isPreview: false,

    status: "Published",

    order: 2,

    createdAt: "2026-08-05",
  },

  {
    id: "lesson-3",
    courseId: "course-1",
    chapterId: "chapter-2",

    title: "Number System",
    description:
      "Understand natural numbers, whole numbers, integers, rational numbers, and real numbers.",

    type: "Video",

    duration: "30 min",

    videoUrl: "https://example.com/videos/number-system",

    resources: [],

    isPreview: false,

    status: "Published",

    order: 3,

    createdAt: "2026-08-05",
  },

  {
    id: "lesson-4",
    courseId: "course-1",
    chapterId: "chapter-2",

    title: "Practice Worksheet",
    description:
      "Complete the worksheet on number system exercises.",

    type: "Assignment",

    duration: "25 min",

    resources: [
      "/worksheets/number-system.pdf",
    ],

    isPreview: false,

    status: "Draft",

    order: 4,

    createdAt: "2026-08-05",
  },

  {
    id: "lesson-5",
    courseId: "course-1",
    chapterId: "chapter-3",

    title: "Introduction to Algebra",
    description:
      "Learn variables, constants, algebraic expressions, and simple equations.",

    type: "Video",

    duration: "35 min",

    videoUrl: "https://example.com/videos/algebra",

    resources: [],

    isPreview: false,

    status: "Draft",

    order: 5,

    createdAt: "2026-08-05",
  },
];