import Hero          from '../sections/Hero';
import HowItWorks    from '../sections/HowItWorks';
import Testimonials  from '../sections/Testimonials';
import MediaFeatures from '../sections/MediaFeatures';
import RotatingPlateSection from '../sections/RotatingPlateSection';
import RecipesTeaser from '../sections/RecipesTeaser';
import Shop          from '../sections/Shop';
import EventsSection from '../sections/EventsSection';
import CommunitySignup from '../sections/CommunitySignup';
import FAQ           from '../sections/FAQ';
import ClosingCTA    from '../sections/ClosingCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Testimonials />
      <MediaFeatures />
      <RotatingPlateSection />
      <RecipesTeaser />
      <Shop />
      <EventsSection />
      <CommunitySignup />
      <FAQ />
      <ClosingCTA />
    </>
  );
}
