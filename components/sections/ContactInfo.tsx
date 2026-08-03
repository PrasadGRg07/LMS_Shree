import { MapPin, Phone, Mail, Clock } from "lucide-react";

import Container from "@/components/common/Container";

const info = [
  {
    icon: MapPin,
    title: "Address",
    text: "Kathmandu, Nepal",
  },
  {
    icon: Phone,
    title: "Phone",
    text: "+977 9800000000",
  },
  {
    icon: Mail,
    title: "Email",
    text: "info@school.com",
  },
  {
    icon: Clock,
    title: "Office Hours",
    text: "Sunday - Friday | 9:00 AM - 5:00 PM",
  },
];

export default function ContactInfo() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {info.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border bg-white p-8 shadow-sm"
              >
                <Icon className="h-10 w-10 text-blue-600" />

                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 text-slate-600">{item.text}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
