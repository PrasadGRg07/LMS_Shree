import NewsHero from "@/components/sections/NewsHero";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import FeaturedNews from "@/components/sections/FeaturedNews";
import AchievementNews from "@/components/sections/AchievementNews";
import PreviousEvents from "@/components/sections/PreviousEvents";
import NewsFilters from "@/components/sections/NewsFilters";
import AllNews from "@/components/sections/AllNews";

export default function NewsPage() {
  return (
    <main>
      <NewsHero />

      <UpcomingEvents />

      <FeaturedNews />

      <AchievementNews />

      <PreviousEvents />

      <NewsFilters />

      <AllNews />
    </main>
  );
}
