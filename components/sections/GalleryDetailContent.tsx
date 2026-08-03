import {
  CheckCircle,
  CalendarDays,
  MapPin,
  ImageIcon,
  Clock,
  Users,
  UserRound,
} from "lucide-react";

import Container from "@/components/common/Container";
import { GalleryItem } from "@/data/gallery";

interface GalleryDetailContentProps {
  item: GalleryItem;
}

export default function GalleryDetailContent({
  item,
}: GalleryDetailContentProps) {
  const highlights = [
    "Student participation and teamwork",
    "Learning through practical activities",
    "Building confidence and creativity",
    "Creating memorable school experiences",
  ];

  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-slate-900">
              About This Program
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {item.longDescription}
            </p>

            {/* Highlights */}
            <div className="mt-12">
              <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900">
                <ImageIcon className="h-7 w-7 text-blue-600" />
                Program Highlights
              </h3>

              <div className="mt-6 space-y-4">
                {highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
                  >
                    <CheckCircle className="h-5 w-5 text-blue-600" />

                    <span className="text-slate-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Event Sidebar */}
          <div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900">
                {item.upcoming ? "Upcoming Event" : "Program Information"}
              </h3>

              <div className="mt-8 space-y-6">
                {/* Date */}
                <div className="flex gap-4">
                  <CalendarDays className="h-6 w-6 text-blue-600" />

                  <div>
                    <p className="text-sm text-slate-500">Date</p>

                    <p className="font-semibold text-slate-900">{item.date}</p>
                  </div>
                </div>

                {/* Time */}
                <div className="flex gap-4">
                  <Clock className="h-6 w-6 text-blue-600" />

                  <div>
                    <p className="text-sm text-slate-500">Time</p>

                    <p className="font-semibold text-slate-900">
                      {item.eventTime}
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4">
                  <MapPin className="h-6 w-6 text-blue-600" />

                  <div>
                    <p className="text-sm text-slate-500">Location</p>

                    <p className="font-semibold text-slate-900">
                      {item.location}
                    </p>
                  </div>
                </div>

                {/* Organizer */}
                <div className="flex gap-4">
                  <UserRound className="h-6 w-6 text-blue-600" />

                  <div>
                    <p className="text-sm text-slate-500">Organizer</p>

                    <p className="font-semibold text-slate-900">
                      {item.organizer}
                    </p>
                  </div>
                </div>

                {/* Participants */}
                <div className="flex gap-4">
                  <Users className="h-6 w-6 text-blue-600" />

                  <div>
                    <p className="text-sm text-slate-500">Participants</p>

                    <p className="font-semibold text-slate-900">
                      {item.participants}
                    </p>
                  </div>
                </div>
              </div>

              {item.upcoming && (
                <button className="mt-8 w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                  Register For Event
                </button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
