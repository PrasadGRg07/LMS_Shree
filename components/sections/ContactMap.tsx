import Container from "@/components/common/Container";

export default function ContactMap() {
  return (
    <section className="py-20">
      <Container>
        <div className="overflow-hidden rounded-3xl">
          <iframe
            src="https://maps.google.com/maps?q=Kathmandu%20Nepal&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="h-[450px] w-full border-0"
          />
        </div>
      </Container>
    </section>
  );
}
