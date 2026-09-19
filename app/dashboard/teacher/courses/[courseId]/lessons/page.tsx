import { notFound } from "next/navigation";

import LessonList from "@/features/teacher/lessons/components/LessonList";

interface PageProps {
  params: Promise<{
    courseId: string;
  }>;
}

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:5001/api";

export default async function LessonsPage({
  params,
}: PageProps) {
  const { courseId } = await params;

  try {
    // Get the real course from Express
    const courseResponse = await fetch(
      `${API_URL}/courses/${courseId}`,
      {
        cache: "no-store",
      }
    );

    if (!courseResponse.ok) {
      notFound();
    }

    const courseResult = await courseResponse.json();

    if (!courseResult.success || !courseResult.data) {
      notFound();
    }

    const course = courseResult.data;

    // Chapters and lessons are already included
    // by your backend course endpoint.
    const chapters = [...(course.chapters ?? [])].sort(
      (a, b) => a.order - b.order
    );

    const lessons = chapters
      .flatMap((chapter) =>
        (chapter.lessons ?? []).map((lesson) => ({
          ...lesson,
          courseId: course.id,
          chapterId: chapter.id,
        }))
      )
      .sort((a, b) => a.order - b.order);

    return (
      <div className="space-y-6">
        {/* Page Header */}
        <div className="rounded-xl border bg-card p-6">
          <h1 className="text-3xl font-bold">
            {course.title}
          </h1>

          <p className="mt-2 text-muted-foreground">
            Manage your course curriculum by organizing
            chapters and lessons.
          </p>
        </div>

        <LessonList
          courseId={courseId}
          chapters={chapters}
          lessons={lessons}
        />
      </div>
    );
  } catch (error) {
    console.error(
      "Failed to load course:",
      error
    );

    notFound();
  }
}
