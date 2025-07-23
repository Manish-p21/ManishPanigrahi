import { useState, useRef, useEffect } from 'react';
import { HiOutlineX, HiDocumentText, HiLink } from 'react-icons/hi';

function ProblemSolving() {
  const [activeIndex, setActiveIndex] = useState(null);
  const popupRef = useRef(null);
  const sectionRef = useRef(null);
  const scrollPositionRef = useRef(0); // Store scroll position

  // Prevent scrolling of body when modal is open, and manage scroll position
  useEffect(() => {
    if (activeIndex !== null) {
      // Save current scroll position
      scrollPositionRef.current = window.scrollY;
      document.body.style.overflow = 'hidden';
      if (sectionRef.current) {
        sectionRef.current.style.overflow = 'hidden';
      }
    } else {
      // Restore scroll position
      document.body.style.overflow = 'auto';
      if (sectionRef.current) {
        sectionRef.current.style.overflow = '';
      }
      window.scrollTo(0, scrollPositionRef.current); // Restore scroll position
    }
    return () => {
      // Cleanup on component unmount
      document.body.style.overflow = 'auto';
      if (sectionRef.current) {
        sectionRef.current.style.overflow = '';
      }
      window.scrollTo(0, scrollPositionRef.current); // Restore scroll position on unmount
    };
  }, [activeIndex]);

  // Handle click outside to close modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setActiveIndex(null);
      }
    };
    if (activeIndex !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeIndex]);

  const steps = [
    {
      step: '/01',
      title: 'How I Approached a Complex Frontend Bug',
      description: 'Taming a stubborn layout issue across responsive breakpoints.',
      pdfLink: '/pdfs/frontend-bug.pdf',
      figmaLink: 'https://www.figma.com/proto/frontend-bug',
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">The Problem</h2>
          <p>
            While working on a dashboard project, I encountered a complex bug where the sidebar would overlap the content area on smaller screens.
          </p>
          <img src="/images/4.jpg" alt="Bug example" className="rounded-xl shadow-md" />
          <h3 className="text-2xl font-semibold">The Process</h3>
          <p>
            After debugging the layout flow using Chrome DevTools, I discovered flexbox misconfigurations causing overflow issues. I refactored the layout grid and used Tailwind's responsive utilities.
          </p>
          <img src="/images/6.jpg" alt="Fixing structure" className="rounded-xl shadow-md" />
          <p>
            Eventually, the component worked seamlessly across all screen sizes.
          </p>
        </div>
      ),
    },
    {
      step: '/02',
      title: 'Scaling MongoDB Queries',
      description: 'When product filters slowed down our e-commerce app.',
      pdfLink: '/pdfs/mongodb-queries.pdf',
      figmaLink: 'https://www.figma.com/proto/mongodb-queries',
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">The Performance Issue</h2>
          <p>
            With over 100k products, our filtering queries became sluggish. Users experienced delays while applying multiple filters.
          </p>
          <img src="/images/8.png" alt="MongoDB dashboard" className="rounded-xl shadow-md" />
          <h3 className="text-2xl font-semibold">The Fix</h3>
          <p>
            We added compound indexes on key filter fields, reduced aggregation pipeline stages, and cached common results. Response time improved by 70%.
          </p>
        </div>
      ),
    },
    {
      step: '/03',
      title: 'Building a Real-Time Chat System',
      description: 'WebSocket, group rooms, and instant updates.',
      pdfLink: '/pdfs/chat-system.pdf',
      figmaLink: 'https://www.figma.com/proto/chat-system',
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Initial Goal</h2>
          <p>
            We wanted a real-time chat experience, similar to Slack. We chose Socket.io and Node.js to power the backend.
          </p>
          <img src="/images/10.jpg" alt="Socket structure" className="rounded-xl shadow-md" />
          <p>
            Rooms-sharing were dynamically created, and events were scoped per user/channel.
          </p>
          <h3 className="text-2xl font-semibold">Challenges</h3>
          <p>
            Handling disconnects and syncing message states was tricky, especially across tabs. I implemented heartbeat checks and DB fallbacks.
          </p>
        </div>
      ),
    },
    {
      step: '/04',
      title: 'Optimizing React Performance',
      description: 'Reducing re-renders in a data-heavy dashboard.',
      pdfLink: '/pdfs/react-performance.pdf',
      figmaLink: 'https://www.figma.com/proto/react-performance',
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">The Issue</h2>
          <p>
            A dashboard with real-time data updates was causing excessive re-renders, leading to sluggish UI performance.
          </p>
          <img src="/images/react-perf.jpg" alt="React performance" className="rounded-xl shadow-md" />
          <h3 className="text-2xl font-semibold">The Solution</h3>
          <p>
            I used React.memo, useCallback, and useMemo to optimize component rendering and prevent unnecessary updates. Lazy loading was added for heavy chart components.
          </p>
        </div>
      ),
    },
    {
      step: '/05',
      title: 'Fixing a CSS Animation Lag',
      description: 'Smoothing out transitions on a landing page.',
      pdfLink: '/pdfs/css-animation.pdf',
      figmaLink: 'https://www.figma.com/proto/css-animation',
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">The Problem</h2>
          <p>
            A landing page had choppy CSS animations on mobile devices, degrading user experience.
          </p>
          <img src="/images/animation-lag.jpg" alt="Animation issue" className="rounded-xl shadow-md" />
          <h3 className="text-2xl font-semibold">The Fix</h3>
          <p>
            I switched to GPU-accelerated properties like transform and opacity, and reduced reflow triggers by avoiding layout-affecting styles.
          </p>
        </div>
      ),
    },
    {
      step: '/06',
      title: 'Migrating to GraphQL',
      description: 'Refactoring REST endpoints for a mobile app.',
      pdfLink: '/pdfs/graphql-migration.pdf',
      figmaLink: 'https://www.figma.com/proto/graphql-migration',
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">The Challenge</h2>
          <p>
            Overfetching data in REST APIs was slowing down our mobile app. We decided to migrate to GraphQL.
          </p>
          <img src="/images/graphql.jpg" alt="GraphQL schema" className="rounded-xl shadow-md" />
          <h3 className="text-2xl font-semibold">The Process</h3>
          <p>
            I designed a GraphQL schema, implemented resolvers, and used Apollo Client for efficient data fetching, reducing payload sizes by 60%.
          </p>
        </div>
      ),
    },
    {
      step: '/07',
      title: 'Handling Rate Limiting in APIs',
      description: 'Preventing server overload during traffic spikes.',
      pdfLink: '/pdfs/rate-limiting.pdf',
      figmaLink: 'https://www.figma.com/proto/rate-limiting',
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">The Issue</h2>
          <p>
            During a product launch, our API servers were overwhelmed by requests, causing downtime.
          </p>
          <img src="/images/rate-limit.jpg" alt="API dashboard" className="rounded-xl shadow-md" />
          <h3 className="text-2xl font-semibold">The Solution</h3>
          <p>
            I implemented a token bucket algorithm for rate limiting and added Redis to track request counts, stabilizing the servers.
          </p>
        </div>
      ),
    },
    {
      step: '/08',
      title: 'Debugging WebSocket Memory Leaks',
      description: 'Fixing a Node.js backend crash.',
      pdfLink: '/pdfs/websocket-leak.pdf',
      figmaLink: 'https://www.figma.com/proto/websocket-leak',
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">The Problem</h2>
          <p>
            Our WebSocket server was crashing due to memory leaks during high-traffic events.
          </p>
          <img src="/images/memory-leak.jpg" alt="Memory graph" className="rounded-xl shadow-md" />
          <h3 className="text-2xl font-semibold">The Fix</h3>
          <p>
            Using Node.js diagnostic tools, I identified unclosed connections. I added cleanup logic for socket events and optimized garbage collection.
          </p>
        </div>
      ),
    },
    {
      step: '/09',
      title: 'Improving CI/CD Pipeline Speed',
      description: 'Cutting deployment times for faster releases.',
      pdfLink: '/pdfs/cicd-optimization.pdf',
      figmaLink: 'https://www.figma.com/proto/cicd-optimization',
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">The Bottleneck</h2>
          <p>
            CI/CD pipelines were taking too long, delaying feature rollouts.
          </p>
          <img src="/images/cicd.jpg" alt="Pipeline dashboard" className="rounded-xl shadow-md" />
          <h3 className="text-2xl font-semibold">The Optimization</h3>
          <p>
            I parallelized test suites, cached dependencies, and split the pipeline into smaller jobs, reducing build times by 50%.
          </p>
        </div>
      ),
    },
    {
      step: '/10',
      title: 'Securing a REST API',
      description: 'Protecting endpoints from unauthorized access.',
      pdfLink: '/pdfs/rest-api-security.pdf',
      figmaLink: 'https://www.figma.com/proto/rest-api-security',
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">The Risk</h2>
          <p>
            Our REST API was vulnerable to unauthorized access due to weak authentication.
          </p>
          <img src="/images/security.jpg" alt="Security diagram" className="rounded-xl shadow-md" />
          <h3 className="text-2xl font-semibold">The Solution</h3>
          <p>
            I implemented JWT-based authentication, added role-based access control, and used rate limiting to prevent brute-force attacks.
          </p>
        </div>
      ),
    },
    {
      step: '/11',
      title: 'Optimizing Image Loading',
      description: 'Speeding up a media-heavy website.',
      pdfLink: '/pdfs/image-optimization.pdf',
      figmaLink: 'https://www.figma.com/proto/image-optimization',
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">The Issue</h2>
          <p>
            A portfolio site with large images was loading slowly, impacting user retention.
          </p>
          <img src="/images/image-opt.jpg" alt="Image optimization" className="rounded-xl shadow-md" />
          <h3 className="text-2xl font-semibold">The Fix</h3>
          <p>
            I implemented lazy loading, used next-gen image formats like WebP, and set up a CDN, reducing page load times by 40%.
          </p>
        </div>
      ),
    },
    {
      step: '/12',
      title: 'Refactoring Legacy Code',
      description: 'Modernizing a decade-old JavaScript app.',
      pdfLink: '/pdfs/legacy-code.pdf',
      figmaLink: 'https://www.figma.com/proto/legacy-code',
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">The Challenge</h2>
          <p>
            A legacy app was riddled with outdated jQuery and spaghetti code, making maintenance difficult.
          </p>
          <img src="/images/legacy-code.jpg" alt="Legacy code" className="rounded-xl shadow-md" />
          <h3 className="text-2xl font-semibold">The Process</h3>
          <p>
            I incrementally refactored the codebase to React, added TypeScript, and wrote unit tests to ensure stability.
          </p>
        </div>
      ),
    },
    {
      step: '/13',
      title: 'Building an Accessible Form',
      description: 'Ensuring WCAG compliance for a signup form.',
      pdfLink: '/pdfs/accessible-form.pdf',
      figmaLink: 'https://www.figma.com/proto/accessible-form',
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">The Goal</h2>
          <p>
            We needed a signup form that met WCAG 2.1 accessibility standards for all users.
          </p>
          <img src="/images/a11y-form.jpg" alt="Accessible form" className="rounded-xl shadow-md" />
          <h3 className="text-2xl font-semibold">The Implementation</h3>
          <p>
            I added ARIA labels, ensured keyboard navigation, and tested with screen readers to achieve full compliance.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black text-white py-24 px-6"
      id="problem-solving"
      style={{
        backgroundImage: "url('/1.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Side - Unchanged Text */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-white to-purple-500 text-transparent bg-clip-text">
              Problem Solving /
            </span>
            <br />
            <span className="bg-gradient-to-r from-white via-white to-purple-400 text-transparent bg-clip-text">
              Case Studies & Blogs
            </span>
          </h2>
          <p className="text-gray-400 text-sm max-w-md">
            These are not just problems — they’re stories of debugging, decisions, and growth.
          </p>
          <p className="text-gray-500 text-xs max-w-md">
            Explore the real-world challenges I’ve tackled across frontend, backend, and infrastructure.
          </p>
        </div>

        {/* Right Side - Vertical Grid with 2 Columns */}
        <div className="md:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className="min-w-[200px] h-[300px] cursor-pointer backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 hover:scale-[1.02] transition duration-300 shadow-md flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    <span className="text-purple-400">{item.step}</span>{' '}
                    <span className="italic">{item.title}</span>
                  </h3>
                  <p className="text-gray-300 text-sm mt-4 leading-snug">
                    {item.description}
                  </p>
                </div>
                <p className="text-sm text-purple-200 mt-6">Click to read more →</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center px-72 justify-center pt-20">
          <div
            ref={popupRef}
            className="relative bg-[#0B0F14] border border-white/10 rounded-lg w-full max-h-[85vh] overflow-y-auto p-6"
          >
            {/* Popup Buttons */}
            <div className="fixed top-32 right-[240px] flex flex-col gap-4 z-[9999]">
              <button
                onClick={() => setActiveIndex(null)}
                className="flex items-center gap-2 border-4 border-gray-500/20 text-[#DAF1FF] hover:text-purple-400 bg-black/50 backdrop-blur-md p-2 px-6 rounded-full"
              >
                <HiOutlineX className="text-2xl" />
                <span className="text-sm font-semibold">Close</span>
              </button>

              

              
            </div>

            {/* Modal Content */}
            <div className="text-white space-y-6 [&_*]:!text-white">
              {steps[activeIndex].content}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProblemSolving;