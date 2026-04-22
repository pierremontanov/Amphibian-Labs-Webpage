import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import OutcomesSection from "@/components/OutcomesSection";
import ProcessSection from "@/components/ProcessSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import AboutSection from "@/components/AboutSection";
import EngagementSection from "@/components/OptionsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <OutcomesSection />
      <ProcessSection />
      <BlogPreviewSection />
      <AboutSection />
      <EngagementSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
