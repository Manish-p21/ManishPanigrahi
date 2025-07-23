import { useState, useEffect, useRef } from 'react';
import { HiOutlineX, HiDocumentText, HiLink } from 'react-icons/hi';

function CaseStudies() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hoveredId, setHoveredId] = useState(null);
  const [openPopup, setOpenPopup] = useState(null);
  const popupRef = useRef(null);

  const caseStudies = [
    {
      id: 1,
      title: 'Diamond',
      subtitle: 'Real-Time Startup Metrics',
      image: '/images/3.jpg',
      fullImage: '/casestudies/Diamond.jpg',
      pdfLink: '/pdfs/Diamond.pdf',
      figmaLink: 'https://www.figma.com/proto/saas-analytics',
    },
    {
      id: 2,
      title: 'Habit Tracker',
      subtitle: 'Freelance Developer Site',
      image: '/images/4.jpg',
      fullImage: '/casestudies/Habit_Tracker.jpg',
      pdfLink: 'https://drive.google.com/drive/u/0/folders/1mwaqqycvMGQyR-mZtycGt6zCn2Z_jtGC',
      figmaLink: 'https://www.figma.com/proto/portfolio-redesign',
    },
    {
      id: 3,
      title: 'Careerly',
      subtitle: 'Scalable Backend',
      image: '/images/5.jpg',
      fullImage: '/casestudies/Careerly.jpg',
      pdfLink: 'https://drive.google.com/file/d/1R0aU6lL5chNCYHCYDCj_YJJDMXLqqEdk/view?usp=drive_link',
      figmaLink: 'https://www.figma.com/proto/event-ticketing',
    },
    {
      id: 4,
      title: 'E-Commerce Optimization',
      subtitle: 'Performance and SEO',
      image: '/images/6.jpg',
      fullImage: '/casestudies/ecommerce-optimization.jpg',
      pdfLink: '/pdfs/ecommerce-optimization.pdf',
      figmaLink: 'https://www.figma.com/proto/ecommerce-optimization',
    },
    {
      id: 5,
      title: 'EdTech LMS System',
      subtitle: 'Learning Portal Design',
      image: '/images/7.jpg',
      fullImage: '/casestudies/edtech-lms.jpg',
      pdfLink: 'https://drive.google.com/uc?export=view&id=1QZ3S3GbDTUo0kbbLaH9bKpNj10FdtRG3',
      figmaLink: 'https://www.figma.com/proto/edtech-lms',
    },
    {
      id: 6,
      title: 'Healthcare Portal',
      subtitle: 'Doctor-Patient Interface',
      image: '/images/8.png',
      fullImage: '/casestudies/healthcare-portal.jpg',
      pdfLink: '/pdfs/healthcare-portal.pdf',
      figmaLink: 'https://www.figma.com/proto/healthcare-portal',
    },
    {
      id: 7,
      title: 'Real Estate Showcase',
      subtitle: 'Property Listing UI',
      image: '/images/9.png',
      fullImage: '/casestudies/real-estate.jpg',
      pdfLink: '/pdfs/real-estate.pdf',
      figmaLink: 'https://www.figma.com/proto/real-estate',
    },
    {
      id: 8,
      title: 'Food Delivery App',
      subtitle: 'Restaurant Analytics',
      image: '/images/10.jpg',
      fullImage: '/casestudies/food-delivery.jpg',
      pdfLink: '/pdfs/food-delivery.pdf',
      figmaLink: 'https://www.figma.com/proto/food-delivery',
    },
    {
      id: 9,
      title: 'Job Portal System',
      subtitle: 'Recruitment Flow Design',
      image: '/images/11.jpg',
      fullImage: '/casestudies/job-portal.jpg',
      pdfLink: '/pdfs/job-portal.pdf',
      figmaLink: 'https://www.figma.com/proto/job-portal',
    },
    {
      id: 10,
      title: 'Banking App UX',
      subtitle: 'Secure & Smooth Experience',
      image: '/images/12.jpg',
      fullImage: '/casestudies/banking-app.jpg',
      pdfLink: '/pdfs/banking-app.pdf',
      figmaLink: 'https://www.figma.com/proto/banking-app',
    },
    {
      id: 11,
      title: 'Travel Booking UI',
      subtitle: 'Flights & Hotel Search',
      image: '/images/4.jpg',
      fullImage: '/casestudies/travel-booking.jpg',
      pdfLink: '/pdfs/travel-booking.pdf',
      figmaLink: 'https://www.figma.com/proto/travel-booking',
    },
    {
      id: 12,
      title: 'Crypto Wallet App',
      subtitle: 'Secure Crypto Management',
      image: '/images/7.jpg',
      fullImage: '/casestudies/crypto-wallet.jpg',
      pdfLink: '/pdfs/crypto-wallet.pdf',
      figmaLink: 'https://www.figma.com/proto/crypto-wallet',
    },
    {
      id: 13,
      title: 'Learning Management UX',
      subtitle: 'Student Flow Design',
      image: '/images/10.jpg',
      fullImage: '/casestudies/lms-ux.jpg',
      pdfLink: '/pdfs/lms-ux.pdf',
      figmaLink: 'https://www.figma.com/proto/lms-ux',
    },
    {
      id: 14,
      title: 'Fitness Tracker',
      subtitle: 'Progress & Goals',
      image: '/images/9.png',
      fullImage: '/casestudies/fitness-tracker.jpg',
      pdfLink: '/pdfs/fitness-tracker.pdf',
      figmaLink: 'https://www.figma.com/proto/fitness-tracker',
    },
    {
      id: 15,
      title: 'Interior Design Gallery',
      subtitle: 'Decor & Architecture',
      image: '/images/12.jpg',
      fullImage: '/casestudies/interior-design.jpg',
      pdfLink: '/pdfs/interior-design.pdf',
      figmaLink: 'https://www.figma.com/proto/interior-design',
    },
  ];

  useEffect(() => {
    document.body.style.overflow = openPopup ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [openPopup]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setOpenPopup(null);
      }
    }
    if (openPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openPopup]);

  return (
    <section
      className="relative w-full py-40 px-6 md:px-12 overflow-hidden"
      id="casestudies"
      style={{
        backgroundColor: '#0B0F14',
        backgroundImage: "url('/assets/bg-cubes.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/75 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-[#DAF1FF] mb-12">
          <span className="bg-gradient-to-r from-[#DAF1FF] to-purple-300 text-transparent bg-clip-text">
            Case Studies
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="relative group bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg transition-all duration-300 h-[500px] cursor-none flex flex-col overflow-hidden"
              onMouseEnter={() => setHoveredId(study.id)}
              onMouseLeave={() => setHoveredId(null)}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                setCursor({ x, y });
              }}
              onClick={() => setOpenPopup(study.id)}
            >
              <div className="p-4 z-10 relative pointer-events-none">
                <p className="text-xs uppercase text-gray-400 tracking-wide">
                  {study.subtitle}
                </p>
                <h3 className="text-lg font-medium text-[#DAF1FF] mt-1">
                  {study.title}
                </h3>
              </div>

              <div className="relative w-full flex-grow">
                <img
                  src={study.image}
                  alt={study.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {hoveredId === study.id && (
                <div
                  className="absolute z-50 pointer-events-none"
                  style={{
                    top: `${cursor.y}px`,
                    left: `${cursor.x}px`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className="w-24 h-24 rounded-full border border-white/30 bg-white/10 backdrop-blur-xl shadow-2xl text-white flex items-center justify-center text-xs font-semibold tracking-widest">
                    Explore
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Popup */}
        {openPopup && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4 sm:px-6 md:px-48 pt-12 sm:pt-20 md:pt-36">
            <div
              ref={popupRef}
              className="relative bg-[#0B0F14] border border-white/10 rounded-lg w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-full max-h-[90vh] overflow-y-auto p-4 sm:p-6 md:p-6"
            >
              {/* Image */}
              <img
                src={caseStudies.find((s) => s.id === openPopup)?.fullImage}
                alt="Full Case Study"
                className="w-full h-auto object-contain rounded-lg"
              />

              {/* Popup Buttons */}
              <div className="flex flex-col gap-4 mt-4 md:mt-0 md:fixed md:top-40 md:right-[115px] z-[9999]">
                <button
                  onClick={() => setOpenPopup(null)}
                  className="flex items-center gap-2 border-4 border-gray-500/20 text-[#DAF1FF] hover:text-purple-400 bg-black/50 backdrop-blur-md p-2 rounded-full"
                >
                  <HiOutlineX className="text-2xl" />
                  <span className="text-sm font-semibold">Close</span>
                </button>

                <button
                  onClick={() => {
                    const pdfLink = caseStudies.find((s) => s.id === openPopup)?.pdfLink;
                    if (pdfLink) {
                      window.open(pdfLink, '_blank', 'noopener,noreferrer');
                    } else {
                      alert('PDF not found!');
                    }
                  }}
                  className="flex items-center gap-2 border-4 border-gray-500/20 text-[#DAF1FF] hover:text-purple-400 bg-black/50 backdrop-blur-md p-2 rounded-full"
                >
                  <HiDocumentText className="text-2xl" />
                  <span className="text-sm font-semibold">View PDF</span>
                </button>

                <a
                  href={caseStudies.find((s) => s.id === openPopup)?.figmaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border-4 border-gray-500/20 text-[#DAF1FF] hover:text-purple-400 bg-black/50 backdrop-blur-md p-2 rounded-full"
                >
                  <HiLink className="text-2xl" />
                  <span className="text-sm font-semibold">Figma Prototype</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default CaseStudies;