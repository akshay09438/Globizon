import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ValueProp from "@/components/ValueProp";
import GrowthStats from "@/components/GrowthStats";
import HowItWorks from "@/components/HowItWorks";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <CustomCursor />
      <Nav />
      <Hero />
      <ValueProp />
      <GrowthStats />
      <HowItWorks />
      <Packages />
      <Testimonials />
      <FAQ />
      <BookingCTA />
      <Footer />
    </main>
  );
}
