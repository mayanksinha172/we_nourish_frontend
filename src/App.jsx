import { Routes, Route } from 'react-router-dom';
import Navbar       from './components/Navbar';
import Footer       from './components/Footer';
import FloatingWA   from './components/FloatingWA';
import MobileCTA    from './components/MobileCTA';
import EmailPopup   from './components/EmailPopup';
import Home           from './pages/Home';
import NutritionPlans from './pages/NutritionPlans';
import Recipes        from './pages/Recipes';
import About          from './pages/About';
import Blog           from './pages/Blog';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"                 element={<Home />} />
          <Route path="/nutrition-plans"  element={<NutritionPlans />} />
          <Route path="/recipes"          element={<Recipes />} />
          <Route path="/about"            element={<About />} />
          <Route path="/blog"             element={<Blog />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWA />
      <MobileCTA />
      <EmailPopup />
    </>
  );
}
