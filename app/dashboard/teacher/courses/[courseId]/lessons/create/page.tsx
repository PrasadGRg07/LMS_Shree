import LessonForm from "@/features/teacher/lessons/components/LessonForm";

interface PageProps {
  params: Promise<{
    courseId: string;
  }>;
}

export default async function CreateLessonPage({ params }: PageProps) {
  const { courseId } = await params;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Create Lesson</h1>

        <p className="text-muted-foreground">
          Add a new lesson to your course curriculum.
        </p>
      </div>

      <LessonForm courseId={courseId} />
    </div>
  );
}
