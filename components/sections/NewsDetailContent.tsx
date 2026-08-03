import Container from "@/components/common/Container";
import { CalendarDays, MapPin, CheckCircle } from "lucide-react";

import { NewsItem } from "@/data/news";

interface NewsDetailContentProps {
  item: NewsItem;
}

export default function NewsDetailContent({ item }: NewsDetailContentProps) {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Description */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              About This Event
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {item.longDescription}
            </p>
          </div>

          {/* Timeline */}
          {item.timeline && item.timeline.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-slate-900">
                Event History
              </h2>

              <div className="mt-10 border-l-2 border-blue-200 pl-8">
                {item.timeline.map((event, index) => (
                  <div key={index} className="relative mb-10">
                    {/* Dot */}
                    <div className="absolute -left-[42px] top-1 h-5 w-5 rounded-full bg-blue-600" />

                    <span className="text-sm font-semibold text-blue-600">
                      {event.year}
                    </span>

                    <h3 className="mt-2 text-xl font-bold text-slate-900">
                      {event.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {event.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Upcoming Details */}
          {item.upcomingDetails && (
            <div className="mt-16 rounded-3xl bg-blue-50 p-8">
              <h2 className="text-3xl font-bold text-slate-900">
                Upcoming Event Details
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 text-slate-700">
                  <CalendarDays className="h-5 w-5 text-blue-600" />

                  {item.upcomingDetails.eventDate}
                </div>

                <div className="flex items-center gap-3 text-slate-700">
                  <MapPin className="h-5 w-5 text-blue-600" />

                  {item.upcomingDetails.location}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-slate-900">Activities</h3>

                <ul className="mt-4 space-y-3">
                  {item.upcomingDetails.activities.map((activity) => (
                    <li
                      key={activity}
                      className="flex items-center gap-3 text-slate-600"
                    >
                      <CheckCircle className="h-5 w-5 text-green-600" />

                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
