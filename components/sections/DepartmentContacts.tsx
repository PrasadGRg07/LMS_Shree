import Container from "@/components/common/Container";
import { GraduationCap, Users, CreditCard, Building2 } from "lucide-react";

const departments = [
  {
    icon: Building2,
    title: "Administration Office",
    phone: "+977 9800000000",
    email: "admin@school.com",
  },
  {
    icon: GraduationCap,
    title: "Admission Office",
    phone: "+977 9811111111",
    email: "admission@school.com",
  },
  {
    icon: CreditCard,
    title: "Accounts Department",
    phone: "+977 9822222222",
    email: "accounts@school.com",
  },
  {
    icon: Users,
    title: "Academic Department",
    phone: "+977 9833333333",
    email: "academic@school.com",
  },
];

export default function DepartmentContacts() {
  return (
    <section className="py-20">
      <Container>
        <h2 className="text-3xl font-bold text-center">Contact Departments</h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {departments.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border p-6 shadow-sm"
              >
                <Icon className="h-10 w-10 text-blue-600" />

                <h3 className="mt-5 font-bold text-xl">{item.title}</h3>

                <p className="mt-3 text-slate-600">{item.phone}</p>

                <p className="text-slate-600">{item.email}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
