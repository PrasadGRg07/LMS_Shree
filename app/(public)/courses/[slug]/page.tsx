import { notFound } from "next/navigation";

import CourseHero from "@/components/course-details/CourseHero";
import CourseOverview from "@/components/course-details/CourseOverview";
import LearningOutcomes from "@/components/course-details/LearningOutcomes";
import Curriculum from "@/components/course-details/Curriculum";
import InstructorSection from "@/components/course-details/InstructorSection";
import CourseFAQ from "@/components/course-details/CourseFAQ";
import CourseCTA from "@/components/course-details/CourseCTA";
import RelatedCourses from "@/components/course-details/RelatedCourses";

import { courses } from "@/data/courses";

interface CoursePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate course routes automatically
export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

// SEO Metadata
export async function generateMetadata({ params }: CoursePageProps) {
  const { slug } = await params;

  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    return {
      title: "Course Not Found",
    };
  }

  return {
    title: `${course.title} | School LMS`,
    description: course.description,
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;

  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="bg-slate-50">
      {/* Hero */}
      <CourseHero course={course} />

      {/* Description */}
      <CourseOverview course={course} />

      {/* What students learn */}
      <LearningOutcomes course={course} />

      {/* Modules */}
      <Curriculum course={course} />

      {/* Teacher */}
      <InstructorSection course={course} />

      <RelatedCourses course={course} courses={courses} />

      {/* FAQ */}
      <CourseFAQ />

      {/* Enrollment */}
      <CourseCTA />
    </main>
  );
}
