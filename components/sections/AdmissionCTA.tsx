import Link from "next/link";
import Container from "@/components/common/Container";

export default function AdmissionCTA() {
  return (
    <section className="bg-blue-600 py-24 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold">Ready to Join Our School?</h2>

          <p className="mt-6 text-lg text-blue-100">
            Start your admission journey today and become part of a vibrant
            learning community.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-slate-100"
          >
            Apply for Admission
          </Link>
        </div>
      </Container>
    </section>
  );
}
