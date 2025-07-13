import { FOR_EACH_PROBLEMS } from '@entities/problem/model/for-each';
import type { ProblemDifficulty, Problem } from '@entities/problem/types/type';
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

  const getProblemsByDifficulty = (
    difficulty: ProblemDifficulty
  ): Problem[] => {
    return problems.filter((p) => p.difficulty === difficulty);
  };

  const getProblemById = (id: string): Problem | undefined => {
    return problems.find((p) => p.id === id);
  };

  return {
    problems,
    getProblemsByDifficulty,
    getProblemById,
  };
}
