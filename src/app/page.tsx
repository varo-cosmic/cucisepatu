import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trustbar";
import { Services } from "@/components/sections/services";
import { Pricing } from "@/components/sections/pricing";
import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Booking } from "@/components/sections/booking";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Pricing />
      <Gallery />
      <Testimonials />
      <Faq />
      <Booking />
      <Footer />
    </main>
  );
}