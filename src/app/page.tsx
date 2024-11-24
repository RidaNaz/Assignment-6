import Achievements from "@/components/Achievements";
import Courses from "@/components/Courses";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import LogoSec from "@/components/LogoSec";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <LogoSec />
      <Explore />
      <Achievements />
      <Courses />
      <Team />
      <Testimonials />
      {/* <Carousel /> */}
    </div>
  );
}
