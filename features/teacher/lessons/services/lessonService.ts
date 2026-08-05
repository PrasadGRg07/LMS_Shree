import { teacherLessons } from "../data/lessons";
import { Lesson } from "../types/lesson";

export async function getLessonsByCourse(
  courseId: string
): Promise<Lesson[]> {
  return teacherLessons
    .filter((lesson) => lesson.courseId === courseId)
    .sort((a, b) => a.order - b.order);
}

export async function getLessonById(
  lessonId: string
): Promise<Lesson | undefined> {
  return teacherLessons.find(
    (lesson) => lesson.id === lessonId
  );
}