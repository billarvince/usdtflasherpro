import React from 'react';
import styled from 'styled-components';
import Section from '../common/Section';
import PricingCard from '../common/PricingCard';

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      title: 'Demo License',
      price: '$15',
      period: 'One-time use',
      description: 'Perfect for beginners who want to try out our USDT flashing software.',
      features: [
        { text: '$40 Max Flash USDT (One Time)', included: true },
        { text: 'One-Time Use', included: true },
        { text: 'All Supported Networks', included: true },
        { text: '365+ Days Live Flash', included: true },
        { text: 'Email Support', included: true },
        { text: 'Software Updates', included: false },
        { text: 'Priority Support', included: false },
      ],
      ctaText: 'Get Started',
      ctaLink: '/payment/demo',
      highlighted: false,
    },
    {
      title: 'Starter License',
      price: '$500',
      period: 'One-time payment',
      description: 'Great entry plan for users who want a daily flashing allowance for a month.',
      features: [
        { text: '$5,000 Daily Flash USDT', included: true },
        { text: '30 Days of Access', included: true },
        { text: 'All Supported Networks', included: true },
        { text: '365+ Days Live Flash', included: true },
        { text: 'Email Support', included: true },
        { text: 'Software Updates', included: true },
        { text: 'Priority Support', included: false },
      ],
      ctaText: 'Get Started',
      ctaLink: '/payment/starter',
      highlighted: false,
    },
    {
      title: 'Standard License',
      price: '$1,000',
      period: 'One-time payment',
      description: 'Our most popular plan for serious users who need more daily flashing power.',
      features: [
        { text: '$10,000 Daily Flash USDT', included: true },
        { text: '30 Days of Access', included: true },
        { text: 'All Supported Networks', included: true },
        { text: '365+ Days Live Flash', included: true },
        { text: 'Email Support', included: true },
        { text: 'Software Updates', included: true },
        { text: 'Priority Support', included: true },
      ],
      ctaText: 'Get Started',
      ctaLink: '/payment/standard',
      highlighted: true,
    },
    {
      title: 'Advanced License (Yearly)',
      price: '$1,500',
      period: 'One-time payment',
      description: 'A full year of daily flashing for users who need long-term access.',
      features: [
        { text: '$10,000 Daily Flash USDT', included: true },
        { text: '365 Days of Access', included: true },
        { text: 'All Supported Networks', included: true },
        { text: '365+ Days Live Flash', included: true },
        { text: 'Email Support', included: true },
        { text: 'Software Updates', included: true },
        { text: 'Priority Support', included: true },
      ],
      ctaText: 'Get Started',
      ctaLink: '/payment/advanced',
      highlighted: false,
    },
    {
      title: 'Basic License (Yearly)',
      price: '$2,500',
      period: 'One-time payment',
      description: 'For serious users who need maximum flashing power for a full year.',
      features: [
        { text: '$20,000,000 Daily Flash USDT', included: true },
        { text: '365 Days of Access', included: true },
        { text: 'All Supported Networks', included: true },
        { text: '365+ Days Live Flash', included: true },
        { text: 'Email Support', included: true },
        { text: 'Software Updates', included: true },
        { text: 'Priority Support', included: true },
      ],
      ctaText: 'Get Started',
      ctaLink: '/payment/basic',
      highlighted: false,
    },
    {
      title: 'Pro License (Lifetime)',
      price: '$5,000',
      period: 'One-time payment',
      description: 'For professional traders and businesses who need lifetime flashing access.',
      features: [
        { text: '$20,000,000 Daily Flash USDT', included: true },
        { text: 'Lifetime Access', included: true },
        { text: 'All Supported Networks', included: true },
        { text: '365+ Days Live Flash', included: true },
        { text: 'Email Support', included: true },
        { text: 'Software Updates', included: true },
        { text: 'Priority Support', included: true },
      ],
      ctaText: 'Get Started',
      ctaLink: '/payment/pro',
      highlighted: false,
    },
  ];

  return (
    <Section
      id="pricing"
      title="Pricing Plans"
      subtitle="Choose the plan that best fits your needs. All plans include our core features with different flashing limits."
      centered
      background="light"
      padding="large"
    >
      <PricingGrid>
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            period={plan.period}
            description={plan.description}
            features={plan.features}
            ctaText={plan.ctaText}
            ctaLink={plan.ctaLink}
            highlighted={plan.highlighted}
          />
        ))}
      </PricingGrid>
    </Section>
  );
};

export default Pricing;
