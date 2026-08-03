import Image from "next/image";

import Container from "@/components/common/Container";
import { NewsItem } from "@/data/news";

interface NewsGalleryProps {
  item: NewsItem;
}

export default function NewsGallery({ item }: NewsGalleryProps) {
  if (!item.gallery || item.gallery.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-20">
      <Container>
        <h2 className="text-3xl font-bold text-slate-900">Event Gallery</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {item.gallery.map((image, index) => (
            <div
              key={index}
              className="group relative h-64 overflow-hidden rounded-3xl"
            >
              <Image
                src={image}
                alt={`${item.title} image ${index + 1}`}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
