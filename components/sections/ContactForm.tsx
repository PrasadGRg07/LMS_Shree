import Container from "@/components/common/Container";

export default function ContactForm() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Send Us A Message</h2>

          <form className="mt-8 space-y-5">
            <input
              placeholder="Your Name"
              className="w-full rounded-xl border p-4"
            />

            <input
              placeholder="Your Email"
              className="w-full rounded-xl border p-4"
            />

            <input
              placeholder="Subject"
              className="w-full rounded-xl border p-4"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full rounded-xl border p-4"
            />

            <button className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
