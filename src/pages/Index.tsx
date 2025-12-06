import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ContactInfoStrip } from '@/components/ContactInfoStrip';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { StatsRow } from '@/components/StatsRow';
import { ServicesSection } from '@/components/ServicesSection';
import { ProcessSection } from '@/components/ProcessSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { FAQSection } from '@/components/FAQSection';
import { Marquee } from '@/components/Marquee';
import { Footer } from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { ExpertTeamSection } from '@/components/ExpertTeamSection';
import { LatestBlogSection } from '@/components/LatestBlogSection';
import { BeforeAfterSection } from '@/components/BeforeAfterSection';
import ContactSection from '@/components/ContactSection';
import TestimonialsSection from '@/components/TestimonialsSection';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Dermal - Comprehensive Dermatology & Cosmetology Clinic</title>
        <meta name="description" content="Expert dermatology care for healthy, radiant skin. From preventive care to specialized treatments, Dermal provides comprehensive skincare solutions." />
      </Helmet>
      <div className="min-h-screen bg-light-pink-100">
        <Header />
        <main>
          <Hero />
          <ContactInfoStrip />
          <WhyChooseUs />
          <StatsRow />
          <ServicesSection />
          <ProcessSection />
          <BenefitsSection />
          <FAQSection />
          <BeforeAfterSection />
          <TestimonialsSection />
          <ExpertTeamSection />
          <LatestBlogSection />
          <ContactSection />
          <Marquee />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
