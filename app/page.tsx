import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import FeaturesSection from '@/components/FeaturesSection';
import WorkshopSection from '@/components/WorkshopSection';
import CommunitySection from '@/components/CommunitySection';
import RegistrationSection from '@/components/RegistrationSection';
import SocialProofSection from '@/components/SocialProofSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#040816] text-white overflow-x-hidden">
      <Header />
      <HeroSection />
      <StatsSection />
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