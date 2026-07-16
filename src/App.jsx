import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Clients from './components/Clients/Clients';
import About from './components/About/About';
import Services from './components/Services/Services';
import Metrics from './components/Metrics/Metrics';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import AIAutomationPage from './pages/services/AIAutomationPage';
import DataEngineeringPage from './pages/services/DataEngineeringPage';
import CloudDevOpsPage from './pages/services/CloudDevOpsPage';
import CustomSoftwarePage from './pages/services/CustomSoftwarePage';
import ProductEngineeringPage from './pages/services/ProductEngineeringPage';
import PageLoader from './components/PageLoader/PageLoader';
import ConsultationModal from './components/Modal/ConsultationModal';

function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('consultation_shown')) return;
    const t = setTimeout(() => {
      setShowModal(true);
      sessionStorage.setItem('consultation_shown', '1');
    }, 10000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <ConsultationModal open={showModal} onClose={() => setShowModal(false)}
      />
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <About />
        <Services />
        <Metrics />
        <Projects />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

function RouteLoader({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [prevPath, setPrevPath] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname === prevPath) return;
    setLoading(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const t = setTimeout(() => {
      setLoading(false);
      setPrevPath(location.pathname);
    }, 700);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <>
      {loading && <PageLoader />}
      {children}
    </>
  );
}

function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.15, smoothWheel: true });
    const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
  return children;
}

export default function App() {
  return (
    <LenisProvider>
      <BrowserRouter>
      <RouteLoader>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/services/ai-automation" element={<AIAutomationPage />} />
          <Route path="/services/data-engineering" element={<DataEngineeringPage />} />
          <Route path="/services/cloud-devops" element={<CloudDevOpsPage />} />
          <Route path="/services/custom-software" element={<CustomSoftwarePage />} />
          <Route path="/services/product-engineering" element={<ProductEngineeringPage />} />
        </Routes>
      </RouteLoader>
    </BrowserRouter>
    </LenisProvider>
  );
}
