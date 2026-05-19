import './index.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Clients from './components/Clients/Clients';
import About from './components/About/About';
import Services from './components/Services/Services';
import Metrics from './components/Metrics/Metrics';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <About />
        <Services />
        <Metrics />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
