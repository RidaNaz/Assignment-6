import Achievements from "@/components/Achievements";
import Courses from "@/components/Courses";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import LogoSec from "@/components/LogoSec";

export default function Home() {
  return (
    <div>
      <Hero />
      <LogoSec />
      <Explore />
      <Achievements />
      <Courses />
    </div>
  );
}
