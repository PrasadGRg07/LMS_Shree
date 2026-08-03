import Container from "@/components/common/Container";

const history = [
  {
    year: "2003",
    title: "School Established",
    description:
      "Our school started with a vision to provide quality education and build strong foundations for students.",
  },
  {
    year: "2008",
    title: "Campus Expansion",
    description:
      "New classrooms, laboratories, and facilities were added to support growing student needs.",
  },
  {
    year: "2018",
    title: "Digital Transformation",
    description:
      "Technology-based learning and smart classroom systems were introduced.",
  },
  {
    year: "2026",
    title: "Modern Learning Platform",
    description:
      "A complete Learning Management System was introduced for students, teachers, and parents.",
  },
];

export default function HistoryTimeline() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="text-center">
          <span
            className="
            rounded-full
            bg-blue-100
            px-5
            py-2
            text-sm
            font-semibold
            text-blue-700
            "
          >
            Our Journey
          </span>

          <h2
            className="
            mt-6
            text-4xl
            font-bold
            text-slate-900
            md:text-5xl
            "
          >
            School History
          </h2>
        </div>

        <div className="relative mt-16">
          <div
            className="
            absolute
            left-1/2
            hidden
            h-full
            w-px
            bg-blue-200
            md:block
            "
          />

          <div className="space-y-10">
            {history.map((item, index) => (
              <div
                key={index}
                className="
                relative
                grid
                md:grid-cols-2
                md:gap-10
                "
              >
                <div
                  className={`
                  ${index % 2 === 0 ? "md:text-right" : "md:col-start-2"}
                  `}
                >
                  <div
                    className="
                    rounded-3xl
                    bg-white
                    p-8
                    shadow-lg
                    "
                  >
                    <h3
                      className="
                      text-2xl
                      font-bold
                      text-blue-600
                      "
                    >
                      {item.year}
                    </h3>

                    <h4
                      className="
                      mt-3
                      text-xl
                      font-bold
                      text-slate-900
                      "
                    >
                      {item.title}
                    </h4>

                    <p
                      className="
                      mt-3
                      leading-7
                      text-slate-600
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
