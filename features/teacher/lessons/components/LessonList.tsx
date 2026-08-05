"use client";

import Link from "next/link";
import {
  BookOpen,
  FileText,
  Video,
  ClipboardList,
  Presentation,
  Pencil,
  Plus,
  Clock3,
} from "lucide-react";

import { Lesson } from "../types/lesson";
import { Chapter } from "../types/chapter";

interface LessonListProps {
  courseId: string;
  lessons: Lesson[];
  chapters: Chapter[];
}

function getLessonIcon(type: Lesson["type"]) {
  switch (type) {
    case "Video":
      return <Video className="h-5 w-5 text-blue-600" />;

    case "PDF":
      return <FileText className="h-5 w-5 text-red-600" />;

    case "Assignment":
      return <ClipboardList className="h-5 w-5 text-orange-600" />;

    case "Live Class":
      return <Presentation className="h-5 w-5 text-green-600" />;

    default:
      return <BookOpen className="h-5 w-5 text-slate-600" />;
  }
}

export default function LessonList({
  courseId,
  lessons,
  chapters,
}: LessonListProps) {
  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Course Curriculum</h2>

          <p className="text-muted-foreground">
            Organize your chapters and lessons.
          </p>
        </div>

        <Link
          href={`/dashboard/teacher/courses/${courseId}/lessons/create`}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-primary-foreground transition hover:opacity-90"
        >
          <Plus className="h-4 w-4" />
          Add Lesson
        </Link>
      </div>

      {/* Chapters */}

      <div className="space-y-6">
        {chapters.map((chapter) => {
          const chapterLessons = lessons.filter(
            (lesson) => lesson.chapterId === chapter.id,
          );

          return (
            <div
              key={chapter.id}
              className="overflow-hidden rounded-xl border bg-card"
            >
              {/* Chapter Header */}

              <div className="border-b bg-muted/40 px-6 py-4">
                <h3 className="text-lg font-semibold">{chapter.title}</h3>

                {chapter.description && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {chapter.description}
                  </p>
                )}
              </div>

              {/* Lessons */}

              <div>
                {chapterLessons.length === 0 ? (
                  <div className="p-6 text-sm text-muted-foreground">
                    No lessons in this chapter.
                  </div>
                ) : (
                  chapterLessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className="flex items-center justify-between border-b p-5 last:border-b-0 hover:bg-muted/40"
                    >
                      <div className="flex items-center gap-4">
                        {getLessonIcon(lesson.type)}

                        <div>
                          <h4 className="font-medium">{lesson.title}</h4>

                          <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock3 className="h-4 w-4" />
                              {lesson.duration}
                            </span>

                            <span>{lesson.type}</span>

                            {lesson.isPreview && (
                              <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">
                                Preview
                              </span>
                            )}

                            <span
                              className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                                lesson.status === "Published"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-yellow-100 text-yellow-700"
                              }`}
                            >
                              {lesson.status}
                            </span>
                          </div>
                        </div>
                      </div>

                      <Link
                        href={`/dashboard/teacher/courses/${courseId}/lessons/${lesson.id}/edit`}
                        className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-muted"
                      >
                        <Pencil className="h-4 w-4" />
                        Edit
                      </Link>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
