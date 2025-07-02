export type ProblemDifficulty = 'beginner' | 'intermediate' | 'advanced';

export interface TestCase {
  id: string;
  description: string;
  expectedResult: unknown;
}

export interface Problem {
  id: string;
  title: string;
  description: string;
  difficulty: ProblemDifficulty;
  initialCode: string;
  expectedOutput: string;
  testCases: TestCase[];
  createdAt: string;
}
