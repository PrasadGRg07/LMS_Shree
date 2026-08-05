import { notFound } from "next/navigation";

import LessonForm from "@/features/teacher/lessons/components/LessonForm";
import { teacherLessons } from "@/features/teacher/lessons/data/lessons";

interface EditLessonPageProps {
  params: Promise<{
    courseId: string;
    lessonId: string;
  }>;
}

export default async function EditLessonPage({ params }: EditLessonPageProps) {
  const { courseId, lessonId } = await params;

  const lesson = teacherLessons.find(
    (lesson) => lesson.id === lessonId && lesson.courseId === courseId,
  );

  if (!lesson) {
    notFound();
  }

  return (
    <div className="space-y-6">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold">Edit Lesson</h1>

        <p className="mt-1 text-muted-foreground">
          Update lesson information and learning materials.
        </p>
      </div>

      {/* Form */}

      <LessonForm courseId={courseId} lesson={lesson} mode="edit" />
    </div>
  );
}
