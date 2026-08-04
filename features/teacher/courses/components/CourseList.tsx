"use client";

import { useEffect, useState } from "react";

import { getCourses } from "../services/courseService";

import { Course } from "../types/course";

import CourseCard from "./CourseCard";

export default function CourseList() {
  const [courses, setCourses] = useState<Course[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCourses() {
      const data = await getCourses();

      setCourses(data);

      setLoading(false);
    }

    loadCourses();
  }, []);

  if (loading) {
    return <div className="text-muted-foreground">Loading courses...</div>;
  }

  if (courses.length === 0) {
    return (
      <div
        className="
rounded-xl
border
p-10
text-center
"
      >
        <h3 className="font-semibold">No courses found</h3>

        <p className="text-muted-foreground mt-2">
          Create your first course to get started.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
grid
gap-6
md:grid-cols-2
xl:grid-cols-3
"
    >
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
