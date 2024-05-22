import { About } from "@/components/about/About";
import { Hero } from "@/components/hero/Hero";
import { MottoText } from "@/components/MottoText";
import { Products } from "@/components/Products";
import { ZoomGallery } from "@/components/zoomgallery/ZoomGallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <MottoText />
      <ZoomGallery />
      <About />
      <Products />
    </main>
  );
}
