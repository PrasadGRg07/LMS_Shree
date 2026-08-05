import { notFound } from "next/navigation";

import LessonList from "@/features/teacher/lessons/components/LessonList";

import { teacherCourses } from "@/features/teacher/courses/data/courses";
import { teacherLessons } from "@/features/teacher/lessons/data/lessons";
import { teacherChapters } from "@/features/teacher/lessons/data/chapters";

interface PageProps {
  params: Promise<{
    courseId: string;
  }>;
}

export default async function LessonsPage({ params }: PageProps) {
  const { courseId } = await params;

  const course = teacherCourses.find((course) => course.id === courseId);

  if (!course) {
    notFound();
  }

  const chapters = teacherChapters
    .filter((chapter) => chapter.courseId === courseId)
    .sort((a, b) => a.order - b.order);

  const lessons = teacherLessons
    .filter((lesson) => lesson.courseId === courseId)
    .sort((a, b) => a.order - b.order);

  return (
    <div className="space-y-6">
      {/* Page Header */}

      <div className="rounded-xl border bg-card p-6">
        <h1 className="text-3xl font-bold">{course.title}</h1>

        <p className="mt-2 text-muted-foreground">
          Manage your course curriculum by organizing chapters and lessons.
        </p>
      </div>

      <LessonList courseId={courseId} chapters={chapters} lessons={lessons} />
    </div>
  );
}
