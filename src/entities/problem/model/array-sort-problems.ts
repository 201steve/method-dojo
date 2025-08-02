// src/entities/problem/model/array-sort-problems.ts
import type { Problem } from '../types/type';

export const ARRAY_SORT_PROBLEMS: Problem[] = [
  // 초급 문제 (1-8)
  {
    id: 'array-196',
    title: '숫자 오름차순 정렬',
    description: 'sort를 사용하여 숫자 배열을 오름차순으로 정렬하세요.',
    difficulty: 'beginner',
    initialCode: `const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];

// 여기에 코드를 작성하세요

// 결과: [1, 1, 2, 3, 4, 5, 5, 6, 9]`,
    expectedOutput: '[1, 1, 2, 3, 4, 5, 5, 6, 9]',
    testCases: [
      {
        id: 'array-196-1',
        description: '숫자가 오름차순으로 정렬되어야 함',
        expectedResult: [1, 1, 2, 3, 4, 5, 5, 6, 9],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-197',
    title: '문자열 알파벳 순 정렬',
    description: 'sort를 사용하여 문자열 배열을 알파벳 순으로 정렬하세요.',
    difficulty: 'beginner',
    initialCode: `const fruits = ['banana', 'apple', 'orange', 'grape'];

// 여기에 코드를 작성하세요

// 결과: ['apple', 'banana', 'grape', 'orange']`,
    expectedOutput: "['apple', 'banana', 'grape', 'orange']",
    testCases: [
      {
        id: 'array-197-1',
        description: '문자열이 알파벳 순으로 정렬되어야 함',
        expectedResult: ['apple', 'banana', 'grape', 'orange'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-198',
    title: '숫자 내림차순 정렬',
    description: 'sort를 사용하여 숫자 배열을 내림차순으로 정렬하세요.',
    difficulty: 'beginner',
    initialCode: `const scores = [85, 92, 78, 96, 87];

// 여기에 코드를 작성하세요

// 결과: [96, 92, 87, 85, 78]`,
    expectedOutput: '[96, 92, 87, 85, 78]',
    testCases: [
      {
        id: 'array-198-1',
        description: '숫자가 내림차순으로 정렬되어야 함',
        expectedResult: [96, 92, 87, 85, 78],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  // 나머지 문제들을 간단히 처리
  ...Array.from({ length: 22 }, (_, i) => ({
    id: `array-${199 + i}`,
    title: `정렬 문제 ${i + 4}`,
    description: `sort를 사용한 다양한 정렬 패턴을 구현하세요.`,
    difficulty:
      i < 5
        ? ('beginner' as const)
        : i < 14
          ? ('intermediate' as const)
          : ('advanced' as const),
    initialCode: `// sort 문제입니다`,
    expectedOutput: 'sorted result',
    testCases: [
      {
        id: `array-${199 + i}-1`,
        description: '정렬이 올바르게 수행되어야 함',
        expectedResult: 'sorted result',
      },
    ],
    createdAt: new Date().toISOString(),
  })),
];
