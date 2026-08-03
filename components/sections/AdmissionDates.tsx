import Container from "@/components/common/Container";
import { CalendarDays } from "lucide-react";

const dates = [
  {
    title: "Applications Open",
    date: "January 15",
  },
  {
    title: "Application Deadline",
    date: "March 31",
  },
  {
    title: "Entrance Assessment",
    date: "April 10",
  },
  {
    title: "Final Admission Result",
    date: "April 20",
  },
];

export default function AdmissionDates() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Schedule
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Important Admission Dates
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          {dates.map((item) => (
            <div
              key={item.title}
              className="mb-6 flex items-center justify-between rounded-2xl bg-white p-6 shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                  <CalendarDays />
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
              </div>

              <span className="font-bold text-blue-600">{item.date}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
