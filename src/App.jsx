import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}
import Navbar       from './components/Navbar';
import Footer       from './components/Footer';
import FloatingWA   from './components/FloatingWA';
import MobileCTA    from './components/MobileCTA';
import EmailPopup   from './components/EmailPopup';
import Home                from './pages/Home';
import NutritionPlans      from './pages/NutritionPlans';
import Recipes             from './pages/Recipes';
import RecipeDetail        from './pages/RecipeDetail';
import About               from './pages/About';
import Blog                from './pages/Blog';
import BlogDetail          from './pages/BlogDetail';
import PrivacyPolicy       from './pages/PrivacyPolicy';
import TermsOfService      from './pages/TermsOfService';
import RefundPolicy        from './pages/RefundPolicy';
import BrandCollaborations from './pages/BrandCollaborations';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/"                       element={<Home />} />
          <Route path="/nutrition-plans"        element={<NutritionPlans />} />
          <Route path="/recipes"                element={<Recipes />} />
          <Route path="/recipes/:slug"          element={<RecipeDetail />} />
          <Route path="/about"                  element={<About />} />
          <Route path="/blog"                   element={<Blog />} />
          <Route path="/blog/:slug"             element={<BlogDetail />} />
          <Route path="/privacy-policy"         element={<PrivacyPolicy />} />
          <Route path="/terms"                  element={<TermsOfService />} />
          <Route path="/refund-policy"          element={<RefundPolicy />} />
          <Route path="/brand-collaborations"   element={<BrandCollaborations />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWA />
      <MobileCTA />
      <EmailPopup />
    </>
  );
}
