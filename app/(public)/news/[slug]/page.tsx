import { notFound } from "next/navigation";

import { news } from "@/data/news";

import NewsDetailHero from "@/components/sections/NewsDetailHero";
import NewsDetailContent from "@/components/sections/NewsDetailContent";
import RelatedNews from "@/components/sections/RelatedNews";
import NewsGallery from "@/components/sections/NewsGallery";


interface NewsDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;

  const item = news.find((newsItem) => newsItem.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main>
      <NewsDetailHero item={item} />

      <NewsDetailContent item={item} />
      <NewsGallery item={item} />
      <RelatedNews currentSlug={item.slug} />
    </main>
  );
}
