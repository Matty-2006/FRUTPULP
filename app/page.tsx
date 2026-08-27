import LoadingScreen from "@/components/LoadingScreen";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import HorizontalShowcase from "@/components/HorizontalShowcase";
import ProcessSteps from "@/components/ProcessSteps";
import QualityGrid from "@/components/QualityGrid";
import Testimonials from "@/components/Testimonials";
import GallerySection from "@/components/GallerySection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />

      <main className="min-h-screen bg-[#f8f5ed] text-[#173b2b]">
        <Navbar />
        <Hero />
        <Marquee />
        <HorizontalShowcase />
        <ProcessSteps />
        <QualityGrid />
        <Testimonials />
        <GallerySection />
        <ContactCTA />
        <Footer />
        <WhatsAppFloat />
      </main>
    </>
  );
}
