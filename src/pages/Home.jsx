import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero.jsx';
import CaseStudies from '../components/CaseStudies.jsx';
import Projects from '../components/Projects.jsx';
import ProblemSolving from '../components/ProblemSolving.jsx';
import Contact from '../components/Contact.jsx';

function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000); // Duration of intro
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-black">
      {/* Intro Symbol Animation */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <motion.svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              initial={{ scale: 0.5 }}
              animate={{ scale: 70, rotate: 60 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            >
              {/* Example: Triangle symbol */}
              <polygon points="50,10 90,90 10,90" />
              {/* Swap the polygon with any symbol you want */}
            </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        className="motion-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 0.5, delay: showIntro ? 0 : 1 }}
      >
        <section id="hero">
          <Hero />
        </section>
        <section id="casestudies">
          <CaseStudies />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="problemsolving">
          <ProblemSolving />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </motion.div>
    </div>
  );
}

export default Home;
