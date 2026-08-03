import AboutHero from "@/components/sections/AboutHero";
import SchoolIntro from "@/components/sections/SchoolIntro";
import MissionVision from "@/components/sections/MissionVision";
import PrincipalMessage from "@/components/sections/PrincipalMessage";
import HistoryTimeline from "@/components/sections/HistoryTimeline";
import Achievements from "@/components/sections/Achievements";
import Facilities from "@/components/sections/Facilities";
import AboutCTA from "@/components/sections/AboutCTA";
export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <SchoolIntro />

      <MissionVision />

      <PrincipalMessage />

      <HistoryTimeline />

      <Achievements />

      <Facilities />
      <AboutCTA />
    </>
  );
}
