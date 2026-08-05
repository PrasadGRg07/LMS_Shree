import { Course } from "../types/course";


export const teacherCourses: Course[] = [

  {
    id: "course-1",

    title: "Grade 10 Mathematics",

    description:
      "Complete mathematics course covering algebra, geometry, and problem solving.",

    subject: "Mathematics",

    gradeLevel: "Grade 8",

    courseType: "Regular Class",

    duration: "10 Months",

    price: 0,

    thumbnail:
      "/images/courses/math.jpg",

    status: "Published",

    students: 120,

    lessons: 35,

    createdAt: "2026-07-15",

    // Extra UI Data
    rating: 4.8,

    lastUpdated: "2 days ago",

    completionRate: 85,
  },


  {
    id: "course-2",

    title: "Grade 10 Science",

    description:
      "Physics, Chemistry and Biology preparation course for SEE students.",

    subject: "Science",

    gradeLevel: "Grade 10",

    courseType: "Exam Preparation",

    duration: "9 Months",

    price: 0,

    thumbnail:
      "/images/courses/science.jpg",

    status: "Published",

    students: 95,

    lessons: 42,

    createdAt: "2026-07-20",

    // Extra UI Data
    rating: 4.6,

    lastUpdated: "5 days ago",

    completionRate: 72,
  },


  {
    id: "course-3",

    title: "Grade 11 Computer Science",

    description:
      "Programming, database, and computer fundamentals for higher secondary students.",

    subject: "Computer Science",

    gradeLevel: "Grade 11",

    courseType: "Regular Class",

    duration: "10 Months",

    price: 0,

    thumbnail:
      "/images/courses/computer-science.jpg",

    status: "Draft",

    students: 75,

    lessons: 28,

    createdAt: "2026-08-01",

    // Extra UI Data
    rating: 4.4,

    lastUpdated: "Today",

    completionRate: 45,
  },

];