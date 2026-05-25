import Hero from "@/components/Hero/Hero";
import OurStory from "@/components/OurStory/OurStory";
import CoffeeShowcase from "@/components/CoffeeShowcase/CoffeeShowcase";
import BrewingCards from "@/components/BrewingCards/BrewingCards";
import Menu from "@/components/Menu/Menu";
import CaptureMoments from "@/components/CaptureMoments/CaptureMoments";
import Rating from "@/components/Rating/Rating";
import Visit from "@/components/Visit/Visit";
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function Home() {
  return (
    <>
      <SpeedInsights />
      <Hero />

      <OurStory />

      <CoffeeShowcase />

      <BrewingCards />

      <Menu />

      <CaptureMoments />

      <Rating />

      <Visit />
    </>
  );
}