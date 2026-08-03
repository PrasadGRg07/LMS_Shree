import Container from "@/components/common/Container";

interface PageHeroProps {
  title: string;
  description: string;
}

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-bold text-slate-900">{title}</h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">{description}</p>
        </div>
      </Container>
    </section>
  );
}
