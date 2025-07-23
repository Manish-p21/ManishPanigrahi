// src/components/ProblemSolving.js
function ProblemSolving() {
  const steps = [
    {
      step: '/01',
      title: 'LeetCode',
      description: '300+ Problems Solved',
    },
    {
      step: '/02',
      title: 'Codeforces',
      description: 'Rated Contestant (Specialist)',
    },
    {
      step: '/03',
      title: 'GeeksforGeeks',
      description: '150+ Problems Solved',
    },
  ];

  return (
    <section
      className="relative w-full bg-black text-white py-24 px-6 overflow-hidden"
      id="problem-solving"
      style={{
        backgroundImage: "url('/public/1.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
        {/* Left Side Content */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-white to-purple-500 text-transparent bg-clip-text">
              A clear process =
            </span>
            <br />
            <span className="bg-gradient-to-r from-white via-white to-purple-400 text-transparent bg-clip-text">
              a predictable result
            </span>
          </h2>
          <p className="text-gray-400 text-sm max-w-sm">
            I don’t promise millions of dollars the day after the ad launch.
          </p>
          <p className="text-gray-500 text-xs max-w-sm">
            What I offer is a clear plan, control, and accountability at every
            step.
          </p>
        </div>

        {/* Right Side Cards */}
        <div className="md:col-span-3 grid grid-cols-2 gap-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 min-h-[140px] hover:scale-[1.02] transition duration-300 shadow-md"
              style={{
                gridColumn: index === 2 ? 'span 2 / span 2' : 'auto',
              }}
            >
              <h3 className="text-lg font-semibold text-white">
                <span className="text-purple-400">{item.step}</span>{' '}
                <span className="italic">{item.title}</span>
              </h3>
              <p className="text-gray-300 text-sm mt-2 leading-snug">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProblemSolving;
