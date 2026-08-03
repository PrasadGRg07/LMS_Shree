import Container from "@/components/common/Container";

export default function SchoolIntro() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}

          <div
            className="
            overflow-hidden
            rounded-3xl
            shadow-xl
            "
          >
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
              alt="School campus"
              className="
              h-[450px]
              w-full
              object-cover
              "
            />
          </div>

          {/* Content */}

          <div>
            <span
              className="
              text-sm
              font-semibold
              text-blue-600
              "
            >
              Who We Are
            </span>

            <h2
              className="
              mt-4
              text-4xl
              font-bold
              text-slate-900
              "
            >
              A School Dedicated To Excellence
            </h2>

            <p
              className="
              mt-6
              leading-8
              text-slate-600
              "
            >
              Our school focuses on providing quality education through
              innovative teaching methods, technology, and a supportive learning
              environment.
            </p>

            <p
              className="
              mt-4
              leading-8
              text-slate-600
              "
            >
              We believe every student has unique potential. Our mission is to
              help students grow academically, socially, and personally.
            </p>

            <div
              className="
              mt-8
              grid
              grid-cols-3
              gap-6
              "
            >
              <div>
                <h3 className="text-3xl font-bold text-blue-600">25+</h3>
                <p className="text-slate-500">Years</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-600">1200+</h3>
                <p className="text-slate-500">Students</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-600">75+</h3>
                <p className="text-slate-500">Teachers</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
