import { problems, type Difficulty } from "../../data/problems";

const difficultyClasses: Record<Difficulty, string> = {
  Easy: "text-emerald-400",
  Medium: "text-amber-400",
  Hard: "text-red-400",
};

export const ProblemList = () => {
  return (
    <section id="problems" className="w-full">
      <div className="mb-5 flex items-end justify-between">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#22d3ee]">
            Practice library
          </p>
          <h2 className="text-2xl font-bold text-white">Choose a problem</h2>
        </div>
        <span className="text-sm text-[#8b949e]">
          {problems.length} problems
        </span>
      </div>

      <div className="overflow-hidden rounded-xl border border-[#30363d] bg-[#0d1117]">
        {problems.map((problem, index) => (
          <a
            key={problem.id}
            href={`/problems/${problem.id}`}
            className="flex flex-col gap-4 border-b border-[#30363d] p-5 transition hover:bg-[#161b22] md:flex-row md:items-center"
          >
            <span
              className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${problem.solved ? "bg-emerald-400" : "border border-[#8b949e]"}`}
              aria-label={problem.solved ? "Solved" : "Not solved"}
            />

            <span className="w-8 shrink-0 text-sm text-[#8b949e]">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="min-w-0 flex-1">
              <strong className="block text-base text-white">
                {problem.title}
              </strong>
              <span className="mt-1 block text-sm text-[#8b949e]">
                {problem.description}
              </span>
            </span>

            <span className="flex flex-wrap gap-2 text-xs text-[#8b949e] md:w-44">
              {problem.topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded border border-[#30363d] px-2 py-1"
                >
                  {topic}
                </span>
              ))}
            </span>

            <span
              className={`text-sm font-semibold md:w-16 ${difficultyClasses[problem.difficulty]}`}
            >
              {problem.difficulty}
            </span>

            <span className="text-sm text-[#8b949e] md:w-24 md:text-right">
              {problem.acceptanceRate}%
            </span>

            <span className="text-lg text-[#22d3ee]" aria-hidden="true">
              -&gt;
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};
