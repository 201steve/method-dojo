import type { ProblemDifficulty, Problem } from '@entities/index';
import { FOR_EACH_PROBLEMS } from '@entities/index';
import { useState, useEffect } from 'react';

const STORAGE_KEY = 'js-array-problems';

export function useProblems() {
  const [problems, setProblems] = useState<Problem[]>([]);

  useEffect(() => {
    // 개발 모드에서는 항상 FOR_EACH_PROBLEMS 사용 (localStorage 무시)
    if (import.meta.env.DEV) {
      setProblems(FOR_EACH_PROBLEMS);
      console.log('개발 모드: 기본 문제 데이터 로드됨');
      return;
    }

    // 프로덕션에서는 localStorage 사용
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setProblems(JSON.parse(stored));
    } else {
      setProblems(FOR_EACH_PROBLEMS);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(FOR_EACH_PROBLEMS));
    }
  }, []);

  const saveProblem = (problem: Problem) => {
    const updatedProblems = [...problems, problem];
    setProblems(updatedProblems);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProblems));
  };

  const updateProblem = (id: string, updatedProblem: Problem) => {
    const updatedProblems = problems.map((p) =>
      p.id === id ? updatedProblem : p
    );
    setProblems(updatedProblems);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProblems));
  };

  const deleteProblem = (id: string) => {
    const updatedProblems = problems.filter((p) => p.id !== id);
    setProblems(updatedProblems);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProblems));
  };

  const getProblemsByDifficulty = (difficulty: ProblemDifficulty) => {
    return problems.filter((p) => p.difficulty === difficulty);
  };

  const getProblemById = (id: string) => {
    return problems.find((p) => p.id === id);
  };

  return {
    problems,
    saveProblem,
    updateProblem,
    deleteProblem,
    getProblemsByDifficulty,
    getProblemById,
  };
}
