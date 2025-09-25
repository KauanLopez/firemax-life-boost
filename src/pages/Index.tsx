import React from 'react';
import UrgencyBanner from '@/components/UrgencyBanner';
import HeroSection from '@/components/HeroSection';
import SocialProofSection from '@/components/SocialProofSection';
import BenefitsSection from '@/components/BenefitsSection';
import ProductExplanationSection from '@/components/ProductExplanationSection';
import PaymentSection from '@/components/PaymentSection';
import FAQSection from '@/components/FAQSection';
import PricingSection from '@/components/PricingSection';
import GuaranteeSection from '@/components/GuaranteeSection';
import FinalCTASection from '@/components/FinalCTASection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <UrgencyBanner />
      <HeroSection />
      <SocialProofSection />
      <BenefitsSection />
      <ProductExplanationSection />
      <div id="pricing-section">
        <PricingSection />
      </div>
      <PaymentSection />
      <FAQSection />
      <GuaranteeSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
