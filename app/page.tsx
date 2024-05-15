import { About } from "@/components/about/About";
import { Hero } from "@/components/Hero";
import { MottoText } from "@/components/MottoText";
import { ZoomGallery } from "@/components/ZoomGallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <MottoText />
      <ZoomGallery />
      <About />
    </main>
  );
}
