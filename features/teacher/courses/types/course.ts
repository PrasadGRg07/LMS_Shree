export type CourseStatus =
  | "Published"
  | "Draft"
  | "Archived";


export type CourseType =
  | "Regular Class"
  | "Exam Preparation"
  | "Online Course"
  | "Workshop";


export interface Course {

  // Basic Information
  id: string;

  title: string;

  description: string;

  thumbnail?: string;


  // Academic Information
  subject: string;

  gradeLevel: string;


  // Course Details
  courseType: CourseType;

  duration: string;


  // Pricing
  price: number;


  // Publishing
  status: CourseStatus;


  // Teacher / Creator
  teacherId?: string;

  teacherName?: string;


  // Enrollment
  students: number;


  // Content
  lessons: number;

  assignments?: number;

  quizzes?: number;


  // Analytics
  rating?: number;

  completionRate?: number;


  // Dates
  createdAt: string;

  updatedAt?: string;

  lastUpdated?: string;

}