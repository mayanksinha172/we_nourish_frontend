import PageMeta       from '../components/PageMeta';
import Hero           from '../sections/Hero';
import HowItWorks     from '../sections/HowItWorks';
import RecipesTeaser  from '../sections/RecipesTeaser';
import Shop           from '../sections/Shop';
import CredibilityBand from '../sections/CredibilityBand';
import ReelsSlider    from '../sections/ReelsSlider';
import Testimonials   from '../sections/Testimonials';
import CommunitySignup from '../sections/CommunitySignup';
import FAQ            from '../sections/FAQ';
import ClosingCTA     from '../sections/ClosingCTA';

const HOME_SCHEMA = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Arjita',
    jobTitle: 'Nutritionist',
    url: 'https://wenourish.in',
    sameAs: [],
    worksFor: { '@type': 'Organization', name: 'WeNourish' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'WeNourish',
    url: 'https://wenourish.in',
    description: 'Personalised nutrition consulting and healthy Indian recipes by Arjita.',
    founder: { '@type': 'Person', name: 'Arjita' },
  },
];

export default function Home() {
  return (
    <>
      <PageMeta
        title="WeNourish — Nutritionist & Dietitian India | Arjita"
        description="Personalised nutrition consulting by Arjita. Weight loss, PCOS, athletic performance. Book a free call today."
        schema={HOME_SCHEMA}
      />
      <Hero />
      <Testimonials />
      <CredibilityBand />
      <ReelsSlider />
      <HowItWorks />
      <RecipesTeaser />
      <Shop />
      <CommunitySignup />
      <FAQ />
      <ClosingCTA />
      {/* <EventsSection /> — hidden until next event is scheduled */}
    </>
  );
}
