export const Hero: React.FC = () => {
  return (
    <section className="pt-16 pb-12 px-4 text-center max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase mb-4">
        Master Coding Skills, One Path At A Time
      </h1>
      <p className="text-[#8b949e] text-base md:text-lg mb-8 max-w-2xl mx-auto">
         Existing backend and DSA challenges Start your journey for free.
      </p>
      <div className="flex items-center justify-center gap-4">
        <button className="bg-[#22d3ee] hover:bg-[#38bdf8] text-slate-950 font-bold px-6 py-3 rounded-lg shadow-[0_0_20px_rgba(34,211,238,0.3)] transition">
          START LEARNING PATH
        </button>
        <button className="border border-[#30363d] hover:border-[#8b949e] bg-[#21262d] text-white font-medium px-6 py-3 rounded-lg transition">
          Browse All Problems
        </button>
      </div>
    </section>
  );
};

export default Hero;