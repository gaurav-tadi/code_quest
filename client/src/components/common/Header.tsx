export const Header = () => {
  return (
    <header className="h-12 bg-[#0d1117] border-b border-[#30363d] px-4 flex items-center justify-between text-xs font-semibold text-[#8b949e]">
      
      
      <div className="flex items-center gap-6">
        
        {/* CodeQuest Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-6 h-6 rounded bg-[#0d1117] border border-[#06b6d4]/30 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#22d3ee]">
              <path d="M16 8L12 4L4 12L12 20L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 9L9 12L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-white font-extrabold tracking-wider text-sm">
            CODEQUEST
          </span>
        </div>

        {/* Nav Links */}
        <nav className="flex items-center gap-4">
          <a href="#problems" className="bg-[#21262d] text-white px-3 py-1.5 rounded border border-[#30363d]">
            Explore Problems
          </a>
          <a href="#learning-paths" className="hover:text-white transition py-1.5">
            Learning Paths
          </a>
          <a href="#leaderboard" className="hover:text-white transition py-1.5">
            Leaderboard
          </a>
          <a href="#community" className="hover:text-white transition py-1.5">
            Community
          </a>
        </nav>
      </div>

      {/* Right Section: Auth Actions */}
      <div className="flex items-center gap-3">
        <button className="bg-[#22d3ee] hover:bg-[#38bdf8] text-slate-950 font-bold px-3 py-1 rounded transition">
          Login
        </button>
        <div className="w-7 h-7 rounded-full bg-[#21262d] border border-[#30363d] flex items-center justify-center text-white cursor-pointer overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80" 
            alt="User avatar" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>

    </header>
  );
};