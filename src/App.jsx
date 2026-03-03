import React, { useState, useEffect } from 'react';
import './index.css';
import styles from './App.module.css';

// Components
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import LogoLoop from './pages/LogoLoop';
import Courses from './components/Courses';
import About from './pages/About';
import Admissions from './components/Admissions';
import Contact from './pages/Contact';
import CourseDetail from './components/CourseDetail';
import WhyChooseUs from './pages/WhyChooseUs';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import ContactPage from './pages/ContactPage';
import EnquiryPopup from './components/EnquiryPopup';

function App() {
  const [activeCourse, setActiveCourse] = useState(null);
  const [showContactPage, setShowContactPage] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);

  // Auto-show enquiry popup on every page load/refresh
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEnquiry(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#contact-page') {
        setShowContactPage(true);
        setActiveCourse(null);
        window.scrollTo(0, 0);
      } else if (hash && (hash.startsWith('#course-') || hash.startsWith('#after12-') || hash.startsWith('#basic-'))) {
        setActiveCourse(hash.substring(1)); // removes the #
        setShowContactPage(false);
      } else {
        setActiveCourse(null);
        setShowContactPage(false);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check on mount
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const clearCourse = () => {
    setActiveCourse(null);
    window.location.hash = ''; // Clear the hash when closing the template
  };

  const closeContactPage = () => {
    setShowContactPage(false);
    window.location.hash = '';
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navbar onEnquiryClick={() => setShowEnquiry(true)} />
      <main>
        {showContactPage ? (
          <ContactPage onClose={closeContactPage} />
        ) : activeCourse ? (
          <CourseDetail courseId={activeCourse} onClose={clearCourse} />
        ) : (
          <>
            <Hero />
            <WhyChooseUs />
            <LogoLoop />
            {/* Passing down the active state trigger to the Courses grid */}
            <Courses onCourseClick={() => setActiveCourse('basic-computer')} />
            <About />
            <Gallery />
            <Reviews />
            <Admissions />
            <Contact />
          </>
        )}
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2026 TechCadd Hoshiarpur / Phagwara. All rights reserved.</p>
        <p>Designed for Excellence</p>
      </footer>

      {/* Global Enquiry Popup */}
      <EnquiryPopup isOpen={showEnquiry} onClose={() => setShowEnquiry(false)} />
    </>
  );
}

export default App;
