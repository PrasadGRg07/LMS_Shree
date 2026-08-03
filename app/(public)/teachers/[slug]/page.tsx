import { notFound } from "next/navigation";

import { teachers } from "@/data/teachers";

import TeacherProfileHero from "@/components/sections/TeacherProfileHero";
import TeacherProfileContent from "@/components/sections/TeacherProfileContent";

interface TeacherPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TeacherPage({ params }: TeacherPageProps) {
  const { slug } = await params;

  const teacher = teachers.find((item) => item.slug === slug);

  if (!teacher) {
    notFound();
  }

  return (
    <>
      <TeacherProfileHero teacher={teacher} />

      <TeacherProfileContent teacher={teacher} />
    </>
  );
}
