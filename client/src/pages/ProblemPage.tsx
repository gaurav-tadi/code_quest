import { ProblemEditor } from "../components/problem/ProblemEditor";
import { problems } from "../data/problems";

const problem = problems[0];

export const ProblemPage = () => {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#f0f6fc]">
      <header className="border-b border-[#30363d] bg-[#0d1117] px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-[#22d3ee]/10 text-sm font-bold text-[#22d3ee]">
              CQ
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#8b949e]">
                CodeQuest
              </p>
              <h1 className="text-sm font-semibold text-white">
                {problem.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded border border-[#30363d] bg-[#161b22] px-3 py-2 text-sm text-white">
              JavaScript
            </button>
            <button className="rounded bg-[#22d3ee] px-4 py-2 text-sm font-semibold text-slate-950">
              Run Code
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-6 px-4 py-6 lg:grid-cols-[1fr_1.4fr]">
        <aside className="rounded-xl border border-[#30363d] bg-[#161b22] p-5">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#22d3ee]">
            Problem statement
          </p>

          <h2 className="mb-4 text-2xl font-bold text-white">
            {problem.title}
          </h2>

          <div className="mb-4 flex flex-wrap gap-2 text-xs">
            <span className="rounded border border-emerald-400/30 bg-emerald-400/10 px-2 py-1 text-emerald-300">
              {problem.difficulty}
            </span>
            {problem.topics.map((topic) => (
              <span
                key={topic}
                className="rounded border border-[#30363d] bg-[#0d1117] px-2 py-1 text-[#8b949e]"
              >
                {topic}
              </span>
            ))}
          </div>

          <p className="mb-5 text-sm leading-7 text-[#c9d1d9]">
            Given an array of integers{" "}
            <span className="font-semibold text-white">nums</span> and an
            integer <span className="font-semibold text-white">target</span>,
            return the indices of the two numbers such that they add up to the
            target.
          </p>

          <div className="mb-5 rounded-lg border border-[#30363d] bg-[#0d1117] p-4">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8b949e]">
              Example
            </p>
            <pre className="text-sm leading-6 text-[#c9d1d9]">
              Input: nums = [2,7,11,15], target = 9 Output: [0,1]
            </pre>
          </div>

          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8b949e]">
              Constraints
            </p>
            <ul className="list-inside list-disc space-y-2 text-sm text-[#c9d1d9]">
              <li>2 ≤ nums.length ≤ 10^4</li>
              <li>-10^9 ≤ nums[i] ≤ 10^9</li>
              <li>-10^9 ≤ target ≤ 10^9</li>
            </ul>
          </div>
        </aside>

        <section className="rounded-xl border border-[#30363d] bg-[#161b22] p-4">
          <div className="mb-4 flex items-center justify-between border-b border-[#30363d] pb-3">
            <div className="flex gap-2 text-sm">
              <button className="rounded bg-[#21262d] px-3 py-1.5 text-white">
                Solution
              </button>
              <button className="rounded px-3 py-1.5 text-[#8b949e]">
                Tests
              </button>
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#8b949e]">
              Acceptance {problem.acceptanceRate}%
            </span>
          </div>

          <ProblemEditor />
        </section>
      </main>
    </div>
  );
};
