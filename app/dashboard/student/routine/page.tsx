import RoutineHeader from "@/components/routine/RoutineHeader";
import CurrentClass from "@/components/routine/CurrentClass";
import NextClass from "@/components/routine/NextClass";
import WeeklyRoutine from "@/components/routine/WeeklyRoutine";
import RoutineLegend from "@/components/routine/RoutineLegend";
import RoutineStats from "@/components/routine/RoutineStats";
export default function StudentRoutinePage() {
  return (
    <main className="space-y-8">
      <RoutineHeader />
      <RoutineStats />

      <section className="grid gap-6 lg:grid-cols-2">
        <CurrentClass />
        <NextClass />
      </section>

      <WeeklyRoutine />

      <RoutineLegend />
    </main>
  );
}
