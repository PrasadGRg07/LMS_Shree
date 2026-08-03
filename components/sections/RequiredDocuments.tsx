import Container from "@/components/common/Container";
import Image from "next/image";
import { FileText, FileBadge, ImageIcon, ShieldCheck } from "lucide-react";

const documents = [
  {
    title: "Birth Certificate",
    icon: FileBadge,
  },
  {
    title: "Previous Academic Transcript",
    icon: FileText,
  },
  {
    title: "Passport-size Photographs",
    icon: ImageIcon,
  },
  {
    title: "Citizenship / Passport Copy",
    icon: ShieldCheck,
  },
];

export default function RequiredDocuments() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Documents
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Required Documents
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            Please prepare the following documents before submitting your
            admission application.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {documents.map((doc) => {
            const Icon = doc.icon;

            return (
              <div
                key={doc.title}
                className="rounded-3xl bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                  <Icon size={32} />
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-900">
                  {doc.title}
                </h3>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
