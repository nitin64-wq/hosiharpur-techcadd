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

function App() {
  const [activeCourse, setActiveCourse] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && (hash.startsWith('#course-') || hash.startsWith('#after12-') || hash.startsWith('#basic-'))) {
        setActiveCourse(hash.substring(1)); // removes the #
      } else {
        setActiveCourse(null);
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
  return (
    <>
      <Navbar />
      <main>
        {activeCourse ? (
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
            <Admissions />
            <Contact />
          </>
        )}
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2026 TechCadd Hoshiarpur / Phagwara. All rights reserved.</p>
        <p>Designed for Excellence</p>
      </footer>
    </>
  );
}

export default App;
