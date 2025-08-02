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

// 메서드별 문제 분류 타입
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

export type ProblemMethod = ArrayMethod | ObjectMethod | 'all'; // 'all'은 전체 문제

// 메서드별 문제 범위 정의
const METHOD_RANGES = {
  forEach: { start: 1, end: 20 }, // array-1 ~ array-20
  map: { start: 21, end: 45 }, // array-21 ~ array-45
  filter: { start: 46, end: 70 }, // array-46 ~ array-70
  find: { start: 71, end: 90 }, // array-71 ~ array-90
  split: { start: 91, end: 110 }, // array-91 ~ array-110
  join: { start: 111, end: 130 }, // array-111 ~ array-130
  reduce: { start: 131, end: 155 }, // array-131 ~ array-155
  slice: { start: 156, end: 175 }, // array-156 ~ array-175
  indexOf: { start: 176, end: 195 }, // array-176 ~ array-195
  sort: { start: 196, end: 220 }, // array-196 ~ array-220
  some: { start: 221, end: 240 }, // array-221 ~ array-240
  every: { start: 241, end: 260 }, // array-241 ~ array-260
} as const;

// Object 메서드별 문제 범위 정의 (각 메서드별 30개: 초급10, 중급10, 고급10)
const OBJECT_METHOD_RANGES = {
  basic: { start: 1, end: 30 }, // object-1 ~ object-30
  keys: { start: 31, end: 60 }, // object-31 ~ object-60
  values: { start: 61, end: 90 }, // object-61 ~ object-90
  entries: { start: 91, end: 120 }, // object-91 ~ object-120
  assign: { start: 121, end: 150 }, // object-121 ~ object-150
  advanced: { start: 151, end: 180 }, // object-151 ~ object-180
} as const;

// Array 메서드 정보
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
] as const;

// Object 메서드 정보
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
] as const;

// 모든 타입별 문제 통합
const ALL_PROBLEMS: Problem[] = [
  ...FOR_EACH_PROBLEMS,
  ...ARRAY_MAP_PROBLEMS,
  ...ARRAY_FILTER_PROBLEMS,
  ...ARRAY_FIND_PROBLEMS,
  ...ARRAY_SPLIT_PROBLEMS,
  ...ARRAY_JOIN_PROBLEMS,
  ...ARRAY_REDUCE_PROBLEMS,
  ...ARRAY_SLICE_PROBLEMS,
  ...ARRAY_INDEXOF_PROBLEMS,
  ...ARRAY_SORT_PROBLEMS,
  ...ARRAY_SOME_PROBLEMS,
  ...ARRAY_EVERY_PROBLEMS,
  ...OBJECT_PROBLEMS,
  ...STRING_PROBLEMS,
  ...STRING_CHARAT_PROBLEMS,
  ...NUMBER_PROBLEMS,
  ...MATH_PROBLEMS,
];

export function useProblems() {
  const [problems, setProblems] = useState<Problem[]>([]);

  useEffect(() => {
    // 개발 모드에서는 항상 ALL_PROBLEMS 사용 (localStorage 무시)
    if (import.meta.env.DEV) {
      setProblems(ALL_PROBLEMS);
      console.log('개발 모드: 모든 타입 문제 데이터 로드됨');
      return;
    }

    // 프로덕션에서는 localStorage 사용
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setProblems(JSON.parse(stored));
    } else {
      setProblems(ALL_PROBLEMS);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ALL_PROBLEMS));
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

  const getProblemsByType = (
    type: 'array' | 'object' | 'string' | 'number' | 'math'
  ): Problem[] => {
    return problems.filter((problem) => {
      switch (type) {
        case 'array':
          return problem.id.startsWith('array-');
        case 'object':
          return problem.id.startsWith('object-');
        case 'string':
          return problem.id.startsWith('string-');
        case 'number':
          return problem.id.startsWith('number-');
        case 'math':
          return problem.id.startsWith('math-');
        default:
          return false;
      }
    });
  };

  // 메서드별 문제 가져오기 (Array 전용)
  const getProblemsByArrayMethod = (method: ArrayMethod): Problem[] => {
    const range = METHOD_RANGES[method];
    return problems.filter((problem) => {
      if (!problem.id.startsWith('array-')) return false;

      const numPart = problem.id.replace('array-', '');
      const num = parseInt(numPart, 10);
      return num >= range.start && num <= range.end;
    });
  };

  // 메서드별 문제 가져오기 (Object 전용)
  const getProblemsByObjectMethod = (method: ObjectMethod): Problem[] => {
    const range = OBJECT_METHOD_RANGES[method];
    return problems.filter((problem) => {
      if (!problem.id.startsWith('object-')) return false;

      const numPart = problem.id.replace('object-', '');
      const num = parseInt(numPart, 10);
      return num >= range.start && num <= range.end;
    });
  };

  // 타입과 메서드별 문제 가져오기
  const getProblemsByTypeAndMethod = (
    type: 'array' | 'object' | 'string' | 'number' | 'math',
    method?: ProblemMethod
  ): Problem[] => {
    if (type === 'array' && method && method !== 'all') {
      return getProblemsByArrayMethod(method as ArrayMethod);
    }
    if (type === 'object' && method && method !== 'all') {
      return getProblemsByObjectMethod(method as ObjectMethod);
    }
    return getProblemsByType(type);
  };

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
