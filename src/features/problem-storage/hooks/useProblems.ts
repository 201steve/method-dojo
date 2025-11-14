import { OBJECT_PROBLEMS } from '@entities/problem/model';
import { ARRAY_EVERY_PROBLEMS } from '@entities/problem/model/array-every-problems';
import { ARRAY_FILTER_PROBLEMS } from '@entities/problem/model/array-filter-problems';
import { ARRAY_FIND_PROBLEMS } from '@entities/problem/model/array-find-problems';
import { ARRAY_INDEXOF_PROBLEMS } from '@entities/problem/model/array-indexof-problems';
import { ARRAY_JOIN_PROBLEMS } from '@entities/problem/model/array-join-problems';
import { ARRAY_MAP_PROBLEMS } from '@entities/problem/model/array-map-problems';
import { ARRAY_REDUCE_PROBLEMS } from '@entities/problem/model/array-reduce-problems';
import { ARRAY_SLICE_PROBLEMS } from '@entities/problem/model/array-slice-problems';
import { ARRAY_SOME_PROBLEMS } from '@entities/problem/model/array-some-problems';
import { ARRAY_SORT_PROBLEMS } from '@entities/problem/model/array-sort-problems';
import { ARRAY_SPLIT_PROBLEMS } from '@entities/problem/model/array-split-problems';
import { FOR_EACH_PROBLEMS } from '@entities/problem/model/for-each';
import { MATH_PROBLEMS } from '@entities/problem/model/math-problems';
import { NUMBER_PROBLEMS } from '@entities/problem/model/number-problems';
import { STRING_CHARAT_PROBLEMS } from '@entities/problem/model/string-charat-problems';
import { STRING_PROBLEMS } from '@entities/problem/model/string-problems';
import type { ProblemDifficulty, Problem } from '@entities/problem/types/type';
import { useState, useEffect } from 'react';

const STORAGE_KEY = 'js-problems';

export type ArrayMethod =
  | 'forEach'
  | 'map'
  | 'filter'
  | 'find'
  | 'split'
  | 'join'
  | 'reduce'
  | 'slice'
  | 'indexOf'
  | 'sort'
  | 'some'
  | 'every';

export type ObjectMethod =
  | 'basic'
  | 'keys'
  | 'values'
  | 'entries'
  | 'assign'
  | 'advanced';

export type ProblemMethod = ArrayMethod | ObjectMethod | 'all';

const METHOD_RANGES: { [key: string]: { start: number; end: number } } = {
  forEach: { start: 1, end: 20 },
  map: { start: 21, end: 45 },
  filter: { start: 46, end: 70 },
  find: { start: 71, end: 90 },
  split: { start: 91, end: 110 },
  join: { start: 111, end: 130 },
  reduce: { start: 131, end: 155 },
  slice: { start: 156, end: 175 },
  indexOf: { start: 176, end: 195 },
  sort: { start: 196, end: 220 },
  some: { start: 221, end: 240 },
  every: { start: 241, end: 260 },
};

const OBJECT_METHOD_RANGES: { [key: string]: { start: number; end: number } } =
  {
    basic: { start: 1, end: 30 },
    keys: { start: 31, end: 60 },
    values: { start: 61, end: 90 },
    entries: { start: 91, end: 120 },
    assign: { start: 121, end: 150 },
    advanced: { start: 151, end: 180 },
  };

export const ARRAY_METHODS = [
  { key: 'forEach', label: 'forEach', description: '배열 순회', icon: '🔄' },
  { key: 'map', label: 'map', description: '배열 변환', icon: '🔄' },
  { key: 'filter', label: 'filter', description: '배열 필터링', icon: '🔍' },
  { key: 'find', label: 'find', description: '요소 찾기', icon: '🎯' },
  { key: 'split', label: 'split', description: '문자열 분리', icon: '✂️' },
  { key: 'join', label: 'join', description: '배열 연결', icon: '🔗' },
  { key: 'reduce', label: 'reduce', description: '배열 축약', icon: '📉' },
  { key: 'slice', label: 'slice', description: '배열 잘라내기', icon: '🍰' },
  { key: 'indexOf', label: 'indexOf', description: '인덱스 찾기', icon: '📍' },
  { key: 'sort', label: 'sort', description: '배열 정렬', icon: '📊' },
  { key: 'some', label: 'some', description: '일부 조건 확인', icon: '❓' },
  { key: 'every', label: 'every', description: '모든 조건 확인', icon: '✅' },
];

export const OBJECT_METHODS = [
  { key: 'basic', label: 'Basic', description: '기본 객체 조작', icon: '🔧' },
  {
    key: 'keys',
    label: 'Object.keys',
    description: '키 목록 가져오기',
    icon: '🔑',
  },
  {
    key: 'values',
    label: 'Object.values',
    description: '값 목록 가져오기',
    icon: '💎',
  },
  {
    key: 'entries',
    label: 'Object.entries',
    description: '키-값 쌍 처리',
    icon: '📋',
  },
  {
    key: 'assign',
    label: 'Object.assign',
    description: '객체 병합',
    icon: '🔗',
  },
  {
    key: 'advanced',
    label: 'Advanced',
    description: '고급 객체 기능',
    icon: '⚡',
  },
];

const ALL_PROBLEMS: Problem[] = ([] as Problem[]).concat(
  FOR_EACH_PROBLEMS,
  ARRAY_MAP_PROBLEMS,
  ARRAY_FILTER_PROBLEMS,
  ARRAY_FIND_PROBLEMS,
  ARRAY_SPLIT_PROBLEMS,
  ARRAY_JOIN_PROBLEMS,
  ARRAY_REDUCE_PROBLEMS,
  ARRAY_SLICE_PROBLEMS,
  ARRAY_INDEXOF_PROBLEMS,
  ARRAY_SORT_PROBLEMS,
  ARRAY_SOME_PROBLEMS,
  ARRAY_EVERY_PROBLEMS,
  OBJECT_PROBLEMS,
  STRING_PROBLEMS,
  STRING_CHARAT_PROBLEMS,
  NUMBER_PROBLEMS,
  MATH_PROBLEMS
);

export function useProblems() {
  const [problems, setProblems] = useState<Problem[]>([]);

  useEffect(() => {
    if (import.meta.env.DEV) {
      setProblems(ALL_PROBLEMS);
      console.log('개발 모드: 모든 타입 문제 데이터 로드됨');
      return;
    }

    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setProblems(JSON.parse(stored));
    } else {
      setProblems(ALL_PROBLEMS);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ALL_PROBLEMS));
    }
  }, []);

  function getProblemsByDifficulty(difficulty: ProblemDifficulty): Problem[] {
    const filteredProblems: Problem[] = [];
    for (let i = 0; i < problems.length; i++) {
      if (problems[i].difficulty === difficulty) {
        filteredProblems.push(problems[i]);
      }
    }
    return filteredProblems;
  }

  const getProblemById = (id: string): Problem | undefined => {
    const found = problems.filter((p) => p.id === id);
    if (found.length > 0) {
      return found[0];
    }
    return undefined;
  };

  const getProblemsByType = (
    type: 'array' | 'object' | 'string' | 'number' | 'math'
  ): Problem[] => {
    return problems.filter((problem) => {
      if (type === 'array') {
        return problem.id.startsWith('array-');
      } else if (type === 'object') {
        return problem.id.startsWith('object-');
      } else if (type === 'string') {
        return problem.id.startsWith('string-');
      } else if (type === 'number') {
        return problem.id.startsWith('number-');
      } else if (type === 'math') {
        return problem.id.startsWith('math-');
      } else {
        return false;
      }
    });
  };

  const getProblemsByArrayMethod = (method: ArrayMethod): Problem[] => {
    const range = METHOD_RANGES[method];
    return problems.filter((problem) => {
      if (problem.id.startsWith('array-')) {
        const numPart = problem.id.replace('array-', '');
        const num = parseInt(numPart);
        if (num >= range.start && num <= range.end) {
          return true;
        }
      }
      return false;
    });
  };

  const getProblemsByObjectMethod = (method: ObjectMethod): Problem[] => {
    const range = OBJECT_METHOD_RANGES[method];
    const filtered = problems.filter((problem) => {
      if (!problem.id.startsWith('object-')) {
        return false;
      }
      const numPart = problem.id.replace('object-', '');
      const num = parseInt(numPart);
      return num >= range.start && num <= range.end;
    });
    return filtered;
  };

  function getProblemsByTypeAndMethod(
    type: 'array' | 'object' | 'string' | 'number' | 'math',
    method?: ProblemMethod
  ): Problem[] {
    let result: Problem[] = [];

    if (method && method !== 'all') {
      if (type === 'array') {
        result = getProblemsByArrayMethod(method as ArrayMethod);
      } else if (type === 'object') {
        result = getProblemsByObjectMethod(method as ObjectMethod);
      } else {
        result = getProblemsByType(type);
      }
    } else {
      result = getProblemsByType(type);
    }

    return result;
  }

  return {
    problems,
    getProblemsByDifficulty,
    getProblemById,
    getProblemsByType,
    getProblemsByArrayMethod,
    getProblemsByObjectMethod,
    getProblemsByTypeAndMethod,
  };
}
