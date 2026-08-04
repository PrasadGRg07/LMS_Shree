import CourseList from "@/features/teacher/courses/components/CourseList";

export default function CoursesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Courses</h1>

        <p className="text-muted-foreground mt-2">
          Manage your courses, lessons and students.
        </p>
      </div>

      <CourseList />
    </div>
  );
}
