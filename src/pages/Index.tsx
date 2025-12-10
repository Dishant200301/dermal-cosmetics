import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ContactInfoStrip } from '@/components/ContactInfoStrip';
import { StatsRow } from '@/components/StatsRow';
import { ServicesSection } from '@/components/ServicesSection';
import { ProcessSection } from '@/components/ProcessSection';
import { FAQSection } from '@/components/FAQSection';
import { Marquee } from '@/components/Marquee';
import { Footer } from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { ExpertTeamSection } from '@/components/ExpertTeamSection';
import { LatestBlogSection } from '@/components/LatestBlogSection';
import { BeforeAfterSection } from '@/components/BeforeAfterSection';
import ContactSection from '@/components/ContactSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import { BenefitsSection } from '@/components/BenefitsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import { HowWeWorkSection } from '@/components/HowWeWorkSection';
const Index = () => {
  return (
    <>
      <Helmet>
        <title>Dermal - Comprehensive Dermatology & Cosmetology Clinic</title>
        <meta name="description" content="Expert dermatology care for healthy, radiant skin. From preventive care to specialized treatments, Dermal provides comprehensive skincare solutions." />
      </Helmet>
      <div className="min-h-screen bg-[#fef7f8]">
        <Header />
        <main className='overflow-hidden bg-[#fef7f8]'>
          <Hero />
          <ContactInfoStrip />
          <WhyChooseUs />
          <StatsRow />
          <ServicesSection />
          <WhyChooseUsSection />
          <ProcessSection />
          <HowWeWorkSection />
          <BenefitsSection />
          <BeforeAfterSection />
          <FAQSection />
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
