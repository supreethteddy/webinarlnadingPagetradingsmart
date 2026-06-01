import type { Metadata } from "next";
import { ROUTES } from "@/lib/site-config";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import StatsSection from "@/components/StatsSection";
import ExperienceSection from "@/components/ExperienceSection";
import FeaturesSection from "@/components/FeaturesSection";
import WorkshopSection from "@/components/WorkshopSection";
import CommunitySection from "@/components/CommunitySection";
import RegistrationSection from "@/components/RegistrationSection";
import SocialProofSection from "@/components/SocialProofSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: {
    canonical: ROUTES.home,
  },
};

export default function Home() {
  return (
    <main
      className="min-h-screen bg-[#040816] text-white overflow-x-hidden"
      style={{ backgroundColor: "#040816" }}
    >
      <Header />
      <HeroSection />
      <GallerySection />
      <StatsSection />
      <ExperienceSection />
      <FeaturesSection />
      <WorkshopSection />
      <CommunitySection />
      <RegistrationSection />
      <SocialProofSection />
      <CTASection />
      <Footer />
    </main>
  );
}
