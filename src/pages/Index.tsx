import { AppSidebar } from "@/components/AppSidebar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { MessageCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />

      {/* Main content with left margin for sidebar on desktop */}
      <main className="flex-1 md:ml-72">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
