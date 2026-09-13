import { useState } from "react";

const defaultCode = `function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (map.has(diff)) {
      return [map.get(diff), i];
    }

    map.set(nums[i], i);
  }

  return [];
}`;

export const ProblemEditor = () => {
  const [code, setCode] = useState<string>(defaultCode);
  const [output, setOutput] = useState<string>("Output will appear here");

  const handleRun = (): void => {
    const result = eval(code);
    setOutput(String(result));
  };

  return (
    <section className="w-full rounded-xl border border-[#30363d] bg-[#0d1117] p-4 shadow-[0_0_0_1px_rgba(48,54,61,0.4)]">
      <div className="mb-4 flex items-center justify-between border-b border-[#30363d] pb-3">
        <div className="flex items-center gap-2 text-sm text-[#8b949e]">
          <button
            type="button"
            className="rounded bg-[#21262d] px-3 py-1.5 text-white"
          >
            Solution
          </button>
          <button
            type="button"
            className="rounded px-3 py-1.5 hover:text-white"
          >
            Tests
          </button>
        </div>

        <button
          type="button"
          onClick={handleRun}
          className="rounded bg-[#22d3ee] px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-[#38bdf8]"
        >
          Run Code
        </button>
      </div>

      <textarea
        value={code}
        onChange={(event) => setCode(event.target.value)}
        spellCheck={false}
        className="h-90 w-full resize-none rounded-lg border border-[#30363d] bg-[#0d1117] p-4 font-mono text-sm leading-6 text-[#c9d1d9] outline-none"
      />

      <div className="mt-5 rounded-lg border border-[#30363d] bg-[#0d1117] p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8b949e]">
            Output
          </p>
          <span className="text-xs text-emerald-300">Ready</span>
        </div>

        <pre className="whitespace-pre-wrap font-mono text-sm text-[#c9d1d9]">
          {output}
        </pre>
      </div>
    </section>
  );
};

export default ProblemEditor;
