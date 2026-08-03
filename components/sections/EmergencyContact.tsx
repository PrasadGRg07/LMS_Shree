import { PhoneCall, ShieldAlert } from "lucide-react";

import Container from "@/components/common/Container";

export default function EmergencyContact() {
  return (
    <section className="bg-red-50 py-16">
      <Container>
        <div className="flex flex-col items-center rounded-3xl bg-white p-10 text-center shadow-sm">
          <ShieldAlert className="h-12 w-12 text-red-600" />

          <h2 className="mt-5 text-3xl font-bold text-slate-900">
            Emergency Contact
          </h2>

          <p className="mt-3 max-w-xl text-slate-600">
            For urgent student safety matters, medical emergencies, or immediate
            assistance, please contact our emergency line.
          </p>

          <div className="mt-6 flex items-center gap-3 rounded-full bg-red-100 px-8 py-4">
            <PhoneCall className="h-6 w-6 text-red-600" />

            <span className="text-xl font-bold text-red-600">
              +977 9800000000
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
