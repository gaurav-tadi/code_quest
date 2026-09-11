export type Difficulty = "Easy" | "Medium" | "Hard";

export type Problem = {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  topics: string[];
  acceptanceRate: number;
  solved: boolean;
};

export const problems: Problem[] = [
  {
    id: "two-sum",
    title: "Two Sum",
    description: "Find two numbers that add up to a target value.",
    difficulty: "Easy",
    topics: ["Arrays", "Hash Map"],
    acceptanceRate: 49.2,
    solved: true,
  },
  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    description: "Check whether every opening bracket is closed in order.",
    difficulty: "Easy",
    topics: ["Stack", "Strings"],
    acceptanceRate: 40.7,
    solved: false,
  },
  {
    id: "merge-intervals",
    title: "Merge Intervals",
    description: "Combine overlapping intervals into a clean schedule.",
    difficulty: "Medium",
    topics: ["Sorting", "Intervals"],
    acceptanceRate: 46.1,
    solved: false,
  },
];
