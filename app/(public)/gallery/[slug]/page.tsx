import { notFound } from "next/navigation";

import { gallery } from "@/data/gallery";

import GalleryDetailHero from "@/components/sections/GalleryDetailHero";
import GalleryDetailContent from "@/components/sections/GalleryDetailContent";

interface GalleryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function GalleryDetailPage({ params }: GalleryPageProps) {
  const { slug } = await params;

  const item = gallery.find((galleryItem) => galleryItem.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main>
      <GalleryDetailHero item={item} />

      <GalleryDetailContent item={item} />
    </main>
  );
}
