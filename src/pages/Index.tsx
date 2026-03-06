import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import OutcomesSection from "@/components/OutcomesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialSection from "@/components/TestimonialSection";
import OptionsSection from "@/components/OptionsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileStickyEmail from "@/components/MobileStickyEmail";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <OutcomesSection />
      <ProcessSection />
      <TestimonialSection />
      <OptionsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <MobileStickyEmail />
    </div>
  );
};

export default Index;
