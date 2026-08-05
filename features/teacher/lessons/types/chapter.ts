export interface Chapter {
  id: string;
  courseId: string;

  title: string;
  description?: string;

  order: number;

  status: "Draft" | "Published";

  createdAt: string;
}