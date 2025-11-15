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
import { useState, useCallback } from 'react';

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
type ProblemType =
  | 'array'
  | 'object'
  | 'string'
  | 'number'
  | 'math'
  | 'unknown';

// 전처리된 문제 타입
type ProcessedProblem = Problem & {
  problemType: ProblemType;
  method?: ArrayMethod | ObjectMethod;
};

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

/**
 * 문제 ID를 기반으로 타입과 메서드를 추출합니다.
 */
const getProblemTypeAndMethod = (
  id: string
): { problemType: ProblemType; method?: ArrayMethod | ObjectMethod } => {
  if (id.startsWith('array-')) {
    const num = parseInt(id.replace('array-', ''), 10);
    for (const [method, range] of Object.entries(METHOD_RANGES)) {
      if (num >= range.start && num <= range.end) {
        return { problemType: 'array', method: method as ArrayMethod };
      }
    }
    return { problemType: 'array' };
  }

  if (id.startsWith('object-')) {
    const num = parseInt(id.replace('object-', ''), 10);
    for (const [method, range] of Object.entries(OBJECT_METHOD_RANGES)) {
      if (num >= range.start && num <= range.end) {
        return { problemType: 'object', method: method as ObjectMethod };
      }
    }
    return { problemType: 'object' };
  }

  if (id.startsWith('string-')) return { problemType: 'string' };
  if (id.startsWith('number-')) return { problemType: 'number' };
  if (id.startsWith('math-')) return { problemType: 'math' };

  return { problemType: 'unknown' };
};

/**
 * 원본 문제 배열을 받아 problemType과 method가 추가된 배열로 전처리합니다.
 */
const preprocessProblems = (problems: Problem[]): ProcessedProblem[] => {
  return problems.map((problem) => ({
    ...problem,
    ...getProblemTypeAndMethod(problem.id),
  }));
};

/**
 * 문제 데이터를 로드하고 초기화하는 함수 (useState lazy initializer용)
 */
const getInitialProblems = (): ProcessedProblem[] => {
  if (import.meta.env.DEV) {
    console.log('개발 모드: 모든 타입 문제 데이터 전처리 로드됨');
    return preprocessProblems(ALL_PROBLEMS);
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      // 스토리지에 저장된 데이터는 이미 전처리된 것으로 간주
      return JSON.parse(stored) as ProcessedProblem[];
    } catch (e) {
      console.error('스토리지에서 문제 파싱 실패:', e);
      // 파싱 실패 시, 로컬 스토리지 비우고 새로 생성
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  // 스토리지에 없거나 파싱 실패 시, 새로 전처리하고 저장
  const processed = preprocessProblems(ALL_PROBLEMS);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(processed));
  } catch (e) {
    console.error('스토리지에 문제 저장 실패:', e);
  }
  return processed;
};

export function useProblems() {
  // useState의 lazy initializer를 사용해 최초 1회만 실행
  const [problems] = useState<ProcessedProblem[]>(getInitialProblems);

  const getProblemsByDifficulty = useCallback(
    (difficulty: ProblemDifficulty): ProcessedProblem[] => {
      return problems.filter((p) => p.difficulty === difficulty);
    },
    [problems]
  );

  const getProblemById = useCallback(
    (id: string): ProcessedProblem | undefined => {
      return problems.find((p) => p.id === id);
    },
    [problems]
  );

  const getProblemsByType = useCallback(
    (type: ProblemType): ProcessedProblem[] => {
      return problems.filter((problem) => problem.problemType === type);
    },
    [problems]
  );

  const getProblemsByArrayMethod = useCallback(
    (method: ArrayMethod): ProcessedProblem[] => {
      return problems.filter(
        (p) => p.problemType === 'array' && p.method === method
      );
    },
    [problems]
  );

  const getProblemsByObjectMethod = useCallback(
    (method: ObjectMethod): ProcessedProblem[] => {
      return problems.filter(
        (p) => p.problemType === 'object' && p.method === method
      );
    },
    [problems]
  );

  const getProblemsByTypeAndMethod = useCallback(
    (type: ProblemType, method?: ProblemMethod): ProcessedProblem[] => {
      if (!method || method === 'all') {
        return getProblemsByType(type);
      }

      if (type === 'array') {
        return getProblemsByArrayMethod(method as ArrayMethod);
      }

      if (type === 'object') {
        return getProblemsByObjectMethod(method as ObjectMethod);
      }

      // 'string', 'number', 'math' 타입은 method를 무시하고 타입별로 반환
      return getProblemsByType(type);
    },
    [getProblemsByType, getProblemsByArrayMethod, getProblemsByObjectMethod]
  );

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
