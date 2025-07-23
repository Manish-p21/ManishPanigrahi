import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section
      className="relative bg-black text-white w-full min-h-screen py-80 px-6 overflow-hidden"
      style={{
        backgroundImage: "url('/images/5.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* Glowing Animated Line */}
      <svg
        className="absolute top-[33%] left-0 w-full h-32 z-10"
        viewBox="0 0 1000 200"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 100 Q 250 0 500 100 T 1000 100"
          fill="transparent"
          stroke="white"
          strokeOpacity="0.05"
          strokeWidth="2"
        />
        <path
          d="M 0 100 Q 250 0 500 100 T 1000 100"
          fill="transparent"
          stroke="url(#glowGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="150 850"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="1000;0"
            dur="4s"
            repeatCount="indefinite"
          />
        </path>
        <defs>
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#9333ea" stopOpacity="1" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Contact Content Grid */}
      <div className="relative z-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
        {/* Left: Heading */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-white to-purple-500 text-transparent bg-clip-text">
              Contact Me
            </span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed">
            Whether you have a project in mind or just want to say hello, feel free to reach out. I'm always open to
            discussing ideas, collaboration, or new opportunities.
          </p>
        </div>

        {/* Right: Contact Cards */}
        <div className="flex flex-col gap-6">
          {/* Email */}
          <div className="border border-white/10 rounded-xl p-5 bg-white/5 backdrop-blur-md shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-2">
              <FaEnvelope className="text-purple-400 text-lg" />
              <h4 className="text-sm font-semibold">Email Me</h4>
            </div>
            <p className="text-white/60 text-sm mb-1">Feel free to write me anytime.</p>
            <a
              href="mailto:email@gmail.com"
              className="inline-block text-sm text-purple-400 font-medium hover:underline"
            >
              email@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="border border-white/10 rounded-xl p-5 bg-white/5 backdrop-blur-md shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-2">
              <FaPhoneAlt className="text-purple-400 text-lg" />
              <h4 className="text-sm font-semibold">Call Me</h4>
            </div>
            <p className="text-white/60 text-sm mb-1">Mon–Sat, 10AM–6PM</p>
            <a
              href="tel:+917777777777"
              className="inline-block text-sm text-purple-400 font-medium hover:underline"
            >
              +91 77777 77777
            </a>
          </div>

          {/* Location */}
          <div className="border border-white/10 rounded-xl p-5 bg-white/5 backdrop-blur-md shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-2">
              <FaMapMarkerAlt className="text-purple-400 text-lg" />
              <h4 className="text-sm font-semibold">Location</h4>
            </div>
            <p className="text-white/60 text-sm mb-1">Based in Mumbai, India</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-purple-400 font-medium hover:underline"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
