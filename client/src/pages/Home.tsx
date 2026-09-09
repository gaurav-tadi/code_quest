import { Hero } from "../components/home/Hero";
import { LearnigPath } from "../components/home/LearningPath";

export const Home = () => {
  return (
    <div className="min-h-screen bg-[#161b22] text-[#f0f6fc] font-sans">
      
      <Hero />
      <main className="max-w-7xl mx-auto px-4 pb-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <LearnigPath />
      </main>
    </div>
  );
};