import Container from "@/components/common/Container";

export default function PrincipalMessage() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div
          className="
        grid
        items-center
        gap-12
        lg:grid-cols-2
        "
        >
          <div
            className="
            overflow-hidden
            rounded-3xl
            shadow-xl
            "
          >
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
              alt="Principal"
              className="
              h-[450px]
              w-full
              object-cover
              "
            />
          </div>

          <div>
            <span
              className="
            text-sm
            font-semibold
            text-blue-600
            "
            >
              Principal's Message
            </span>

            <h2
              className="
            mt-4
            text-4xl
            font-bold
            text-slate-900
            "
            >
              Inspiring Students To Achieve Excellence
            </h2>

            <p
              className="
            mt-6
            leading-8
            text-slate-600
            "
            >
              Education is not only about gaining knowledge. It is about
              building confidence, discipline, creativity, and leadership
              skills.
            </p>

            <p
              className="
            mt-4
            leading-8
            text-slate-600
            "
            >
              Our dedicated teachers and staff work together to create an
              environment where every student can discover their potential.
            </p>

            <div className="mt-8">
              <h3
                className="
              text-xl
              font-bold
              text-slate-900
              "
              >
                Dr. John Smith
              </h3>

              <p className="text-slate-500">Principal</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
