import Navbar from "@/src/components/Navbar";
import HeroSection from "@/src/components/HeroSection";
import StatsSection from "@/src/components/StatsSection";
import PracticeAreas from "@/src/components/PracticeAreas";
import AboutSection from "@/src/components/AboutSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f0f4ff]">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <PracticeAreas />
      <AboutSection />
    </main>
  );
}
