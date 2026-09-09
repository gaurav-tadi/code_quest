export const LearnigPath = () => {
    return (
        <div className="lg:col-span-2 space-y-6">
          
          <div className="bg-[#0d1117] border border-[#30363d] rounded-xl p-5">
            <h2 className="text-xs font-bold text-[#8b949e] uppercase tracking-wider mb-4">
              Learning Paths <span className="text-[#8b949e]/60 font-normal">(FreeCodeCamp Style)</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">     
              
              <div className="bg-[#21262d] border border-[#30363d] hover:border-[#22d3ee]/50 p-4 rounded-lg flex items-center gap-3 transition cursor-pointer">
                <div className="w-10 h-10 rounded bg-amber-500/10 text-amber-400 font-bold flex items-center justify-center shrink-0">
                  JS
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">JavaScript Algorithms</h3>
                  <p className="text-xs text-[#8b949e]">25 Lessons</p>
                </div>
              </div>
              
              <div className="bg-[#21262d] border border-[#30363d] hover:border-[#22d3ee]/50 p-4 rounded-lg flex items-center gap-3 transition cursor-pointer">
                <div className="w-10 h-10 rounded bg-blue-500/10 text-blue-400 font-bold flex items-center justify-center shrink-0">
                  PY
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">Python Data Structures</h3>
                  <p className="text-xs text-[#8b949e]">18 Lessons</p>
                </div>
              </div>
   
              <div className="bg-[#21262d] border border-[#30363d] hover:border-[#22d3ee]/50 p-4 rounded-lg flex items-center gap-3 transition cursor-pointer">
                <div className="w-10 h-10 rounded bg-cyan-500/10 text-[#22d3ee] font-bold flex items-center justify-center shrink-0">
                  WEB
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">Web Development</h3>
                  <p className="text-xs text-[#8b949e]">32 Lessons</p>
                </div>
              </div>

            </div>
          </div>   

        </div>
    )
}