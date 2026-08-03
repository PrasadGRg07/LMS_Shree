import Container from "@/components/common/Container";

const stats = [
  {
    number: "1200+",
    label: "Students",
  },
  {
    number: "75+",
    label: "Teachers",
  },
  {
    number: "50+",
    label: "Courses",
  },
  {
    number: "98%",
    label: "Success Rate",
  },
];

export default function Statistics() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-4xl font-bold text-blue-600">
                {stat.number}
              </h3>

              <p className="mt-3 text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}