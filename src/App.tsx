import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Outcomes from './components/Outcomes';
import Syllabus from './components/Syllabus';
import GradeCalculator from './components/GradeCalculator';
import Sections from './components/Sections';
import Resources from './components/Resources';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero-section');

  // Smooth scroll helper
  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      // Offset for sticky header (around 70px)
      const offset = 76;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Intersection Observer to update active navigation tab on scroll
  useEffect(() => {
    const sections = ['about', 'outcomes', 'syllabus', 'calculator', 'sections', 'resources', 'faq'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Target middle of the viewport
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Special check for hero section at the top
    const handleScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection('about'); // or keep empty / highlight 'about' as default first item
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col antialiased selection:bg-hau-maroon selection:text-white">
      {/* Navigation Header */}
      <Header onNavClick={handleNavClick} activeSection={activeSection} />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero 
          onExploreClick={() => handleNavClick('syllabus')} 
          onPrereqClick={() => handleNavClick('about')} 
        />

        {/* Course Details Sections */}
        <About />
        <Outcomes />
        <Syllabus />
        <GradeCalculator />
        <Sections />
        <Resources />
        <FAQ />
      </main>

      {/* Institutional Academic Footer */}
      <Footer />
    </div>
  );
}
