export interface Lesson {
  id: string;
  courseId: string;

  chapterId: string; // ✅

  title: string;
  description: string;

  type:
    | "Video"
    | "PDF"
    | "Document"
    | "Assignment"
    | "Live Class";

  duration: string;

  videoUrl?: string;
  pdfUrl?: string;

  resources: string[];

  isPreview: boolean;

  status: "Draft" | "Published";

  order: number;

  createdAt: string;
}