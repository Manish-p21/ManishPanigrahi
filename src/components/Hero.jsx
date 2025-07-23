import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiCode } from 'react-icons/hi';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaFigma
} from 'react-icons/fa';
import { SiTailwindcss, SiUikit } from 'react-icons/si';

const techBadges = [
  { label: 'JavaScript', icon: <FaJs />, color: 'text-yellow-300', bg: 'bg-yellow-500/10', border: 'border-yellow-300/30', shadow: 'shadow-yellow-400/30' },
  { label: 'HTML', icon: <FaHtml5 />, color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-300/30', shadow: 'shadow-orange-400/30' },
  { label: 'CSS', icon: <FaCss3Alt />, color: 'text-blue-300', bg: 'bg-blue-500/10', border: 'border-blue-300/30', shadow: 'shadow-blue-400/30' },
  { label: 'Tailwind', icon: <SiTailwindcss />, color: 'text-cyan-300', bg: 'bg-cyan-500/10', border: 'border-cyan-300/30', shadow: 'shadow-cyan-400/30' },
  { label: 'React', icon: <FaReact />, color: 'text-sky-300', bg: 'bg-sky-500/10', border: 'border-sky-300/30', shadow: 'shadow-sky-400/30' },
  { label: 'Node.js', icon: <FaNodeJs />, color: 'text-green-300', bg: 'bg-green-500/10', border: 'border-green-300/30', shadow: 'shadow-green-400/30' },
  { label: 'Figma', icon: <FaFigma />, color: 'text-pink-300', bg: 'bg-pink-500/10', border: 'border-pink-300/30', shadow: 'shadow-pink-400/30' },
  { label: 'UI/UX', icon: <SiUikit />, color: 'text-violet-300', bg: 'bg-violet-500/10', border: 'border-violet-300/30', shadow: 'shadow-violet-400/30' },
];

function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-full h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-center bg-cover opacity-30"
        style={{ backgroundImage: "url('/images/2.jpg')" }}
      />

      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>

      {/* Desktop & Tablet Tag Badges */}
      <div className="hidden md:block absolute w-full h-full top-0 left-0 z-10 pointer-events-none">
        {techBadges.map((badge, index) => {
          const moveX = mousePos.x * 15;
          const moveY = mousePos.y * 15;
          const positions = [
            ['55%', '20%'], ['70%', '84%'], ['60%', '35%'], ['75%', '63%'],
            ['52%', '90%'], ['80%', '25%'], ['65%', '10%'], ['85%', '75%']
          ];
          const [top, left] = positions[index];

          return (
            <div
              key={index}
              className={`absolute text-base px-4 py-1.5 rounded-full backdrop-blur-md flex items-center gap-2 font-medium transition-transform duration-200 ease-out
                ${badge.color} ${badge.bg} ${badge.border} ${badge.shadow} border`}
              style={{
                top: top,
                left: left,
                transform: `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`,
              }}
            >
              {badge.icon}
              {badge.label}
            </div>
          );
        })}
      </div>

      {/* Hero Text Content */}
      <div className="relative z-20 max-w-4xl px-6 text-center mt-[-8vh] md:mt-0 mb-36 md:mb-0">
        <div className="flex justify-center items-center gap-3 mb-3">
          <HiCode className="text-4xl text-purple-400" />
          <span className="uppercase text-sm tracking-widest text-white/80 font-medium">
            Hello, I’m
          </span>
        </div>

        <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] font-black leading-tight tracking-tight font-sans">
          <motion.span
            className="bg-gradient-to-r from-purple-400 via-white to-purple-500 text-transparent bg-clip-text inline-block"
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 3.3 }}
          >
            Manish
          </motion.span>
        </h1>

        <p className="text-lg md:text-xl mt-6 text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
          Crafting sleek, responsive, and performant web experiences — focused on UI elegance and user-centric design.
        </p>

        <a
          href="#contact"
          className="mt-14 md:mt-10 inline-block bg-white text-black hover:bg-purple-600 hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
        >
          Contact Me
        </a>
      </div>

      {/* Mobile Tags Layout — Icon Boxes */}
      <div className="md:hidden absolute bottom-20 w-full px-6 z-20 flex flex-wrap justify-center gap-3">
        {techBadges.map((badge, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className={`flex flex-col items-center justify-center w-[70px] h-[70px] rounded-xl border backdrop-blur-md
              ${badge.bg} ${badge.border} ${badge.shadow} ${badge.color} text-sm font-semibold`}
          >
            <span className="text-xl">{badge.icon}</span>
            <span className="text-[10px] mt-1 text-white/80 text-center">{badge.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
