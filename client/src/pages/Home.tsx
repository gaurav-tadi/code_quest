import { Hero } from "../components/home/Hero";
import { LearningPath } from "../components/home/LearningPath";
import { ProblemList } from "../components/home/ProblemList";

export const Home = () => {
  return (
    <div className="min-h-screen bg-[#161b22] text-[#f0f6fc] font-sans">
      <Hero />
      <main className="max-w-7xl mx-auto px-4 pb-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <LearningPath />
        <div className="lg:col-span-3">
          <ProblemList />
        </div>
      </main>
    </div>
  );
};
