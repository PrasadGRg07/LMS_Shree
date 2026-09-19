"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import LessonForm from "@/features/teacher/lessons/components/LessonForm";
import { lessons } from "@/data/lessons";

export default function EditLessonPage() {
  const params = useParams();
  const router = useRouter();

  const courseIdParam = String(params.courseId);
  const lessonIdParam = String(params.lessonId);

  const courseId = Number(
    courseIdParam.replace("course-", "")
  );

  const lessonId = Number(
    lessonIdParam.replace("lesson-", "")
  );

  const lesson = lessons.find(
    (item) =>
      item.id === lessonId &&
      item.courseId === courseId
  );

  if (!lesson) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">
          Lesson Not Found
        </h1>

        <p className="text-muted-foreground">
          The lesson you are trying to edit does not exist.
        </p>

        <button
          type="button"
          onClick={() =>
            router.push(
              `/dashboard/teacher/courses/${courseIdParam}/lessons`
            )
          }
          className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm hover:bg-muted"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Lessons
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-5xl space-y-6">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() =>
            router.push(
              `/dashboard/teacher/courses/${courseIdParam}/lessons`
            )
          }
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border hover:bg-muted"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>

        <div>
          <h1 className="text-3xl font-bold">
            Edit Lesson
          </h1>

          <p className="mt-1 text-muted-foreground">
            Update lesson information and learning materials.
          </p>
        </div>
      </div>

      <LessonForm
        courseId={String(courseId)}
        lesson={lesson}
        mode="edit"
      />
    </div>
  );
}
