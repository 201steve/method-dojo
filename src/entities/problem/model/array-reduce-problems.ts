// src/entities/problem/model/array-reduce-problems.ts
import type { Problem } from '../types/type';

export const ARRAY_REDUCE_PROBLEMS: Problem[] = [
  // 초급 문제 (1-8)
  {
    id: 'array-131',
    title: 'reduce로 배열의 합계 구하기',
    description: 'reduce를 사용하여 숫자 배열의 합계를 구하세요.',
    difficulty: 'beginner',
    initialCode: `const numbers = [1, 2, 3, 4, 5];

// 여기에 코드를 작성하세요

// 결과: 15`,
    expectedOutput: '15',
    testCases: [
      {
        id: 'array-131-1',
        description: '모든 숫자의 합이 계산되어야 함',
        expectedResult: 15,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-132',
    title: 'reduce로 배열의 모든 요소 곱하기',
    description: 'reduce를 사용하여 숫자 배열의 모든 요소를 곱하세요.',
    difficulty: 'beginner',
    initialCode: `const numbers = [2, 3, 4];

// 여기에 코드를 작성하세요

// 결과: 24`,
    expectedOutput: '24',
    testCases: [
      {
        id: 'array-132-1',
        description: '모든 숫자의 곱이 계산되어야 함',
        expectedResult: 24,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-133',
    title: 'reduce로 배열에서 최댓값 찾기',
    description: 'reduce를 사용하여 배열에서 최댓값을 찾으세요.',
    difficulty: 'beginner',
    initialCode: `const numbers = [3, 7, 2, 9, 1];

// 여기에 코드를 작성하세요

// 결과: 9`,
    expectedOutput: '9',
    testCases: [
      {
        id: 'array-133-1',
        description: '최댓값이 찾아져야 함',
        expectedResult: 9,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-134',
    title: 'reduce로 문자열 배열 연결하기',
    description: 'reduce를 사용하여 문자열 배열을 연결하세요.',
    difficulty: 'beginner',
    initialCode: `const words = ['Hello', ' ', 'World', '!'];

// 여기에 코드를 작성하세요

// 결과: "Hello World!"`,
    expectedOutput: '"Hello World!"',
    testCases: [
      {
        id: 'array-134-1',
        description: '문자열이 연결되어야 함',
        expectedResult: 'Hello World!',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-135',
    title: 'reduce로 2차원 배열 평탄화하기',
    description: 'reduce를 사용하여 2차원 배열을 1차원으로 평탄화하세요.',
    difficulty: 'beginner',
    initialCode: `const nested = [[1, 2], [3, 4], [5, 6]];

// 여기에 코드를 작성하세요

// 결과: [1, 2, 3, 4, 5, 6]`,
    expectedOutput: '[1, 2, 3, 4, 5, 6]',
    testCases: [
      {
        id: 'array-135-1',
        description: '2차원 배열이 1차원으로 평탄화되어야 함',
        expectedResult: [1, 2, 3, 4, 5, 6],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-136',
    title: 'reduce로 배열 요소 개수 세기',
    description: 'reduce를 사용하여 배열의 요소 개수를 세세요.',
    difficulty: 'beginner',
    initialCode: `const items = ['a', 'b', 'c', 'd'];

// 여기에 코드를 작성하세요

// 결과: 4`,
    expectedOutput: '4',
    testCases: [
      {
        id: 'array-136-1',
        description: '요소 개수가 계산되어야 함',
        expectedResult: 4,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-137',
    title: 'reduce로 배열의 평균값 구하기',
    description: 'reduce를 사용하여 숫자 배열의 평균값을 구하세요.',
    difficulty: 'beginner',
    initialCode: `const scores = [80, 90, 70, 85];

// 여기에 코드를 작성하세요

// 결과: 81.25`,
    expectedOutput: '81.25',
    testCases: [
      {
        id: 'array-137-1',
        description: '평균값이 계산되어야 함',
        expectedResult: 81.25,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-138',
    title: 'reduce로 배열을 뒤집기',
    description: 'reduce를 사용하여 배열을 역순으로 만드세요.',
    difficulty: 'beginner',
    initialCode: `const numbers = [1, 2, 3, 4, 5];

// 여기에 코드를 작성하세요

// 결과: [5, 4, 3, 2, 1]`,
    expectedOutput: '[5, 4, 3, 2, 1]',
    testCases: [
      {
        id: 'array-138-1',
        description: '배열이 역순으로 만들어져야 함',
        expectedResult: [5, 4, 3, 2, 1],
      },
    ],
    createdAt: new Date().toISOString(),
  },

  // 중급 문제 (9-17)
  {
    id: 'array-139',
    title: 'reduce로 배열을 객체로 그룹화하기',
    description: 'reduce를 사용하여 배열을 키별로 그룹화하세요.',
    difficulty: 'intermediate',
    initialCode: `const people = [
  { name: 'John', age: 25, city: 'Seoul' },
  { name: 'Jane', age: 30, city: 'Seoul' },
  { name: 'Bob', age: 35, city: 'Busan' }
];

// 여기에 코드를 작성하세요 (city별로 그룹화)

// 결과: { Seoul: [John, Jane], Busan: [Bob] }`,
    expectedOutput: '{ Seoul: [John, Jane], Busan: [Bob] }',
    testCases: [
      {
        id: 'array-139-1',
        description: 'city별로 그룹화되어야 함',
        expectedResult: {
          Seoul: [
            { name: 'John', age: 25, city: 'Seoul' },
            { name: 'Jane', age: 30, city: 'Seoul' },
          ],
          Busan: [{ name: 'Bob', age: 35, city: 'Busan' }],
        },
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-140',
    title: 'reduce로 배열에서 중복 제거하기',
    description: 'reduce를 사용하여 배열에서 중복을 제거하세요.',
    difficulty: 'intermediate',
    initialCode: `const numbers = [1, 2, 2, 3, 3, 4, 1, 5];

// 여기에 코드를 작성하세요

// 결과: [1, 2, 3, 4, 5]`,
    expectedOutput: '[1, 2, 3, 4, 5]',
    testCases: [
      {
        id: 'array-140-1',
        description: '중복이 제거되어야 함',
        expectedResult: [1, 2, 3, 4, 5],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-141',
    title: 'reduce로 요소 빈도수 계산하기',
    description: 'reduce를 사용하여 각 요소의 빈도수를 계산하세요.',
    difficulty: 'intermediate',
    initialCode: `const letters = ['a', 'b', 'a', 'c', 'b', 'a'];

// 여기에 코드를 작성하세요

// 결과: { a: 3, b: 2, c: 1 }`,
    expectedOutput: '{ a: 3, b: 2, c: 1 }',
    testCases: [
      {
        id: 'array-141-1',
        description: '각 요소의 빈도수가 계산되어야 함',
        expectedResult: { a: 3, b: 2, c: 1 },
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-142',
    title: 'reduce로 조건에 맞는 요소들의 합계 구하기',
    description: 'reduce를 사용하여 조건을 만족하는 요소들의 합을 구하세요.',
    difficulty: 'intermediate',
    initialCode: `const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 여기에 코드를 작성하세요 (짝수만 합계)

// 결과: 30`,
    expectedOutput: '30',
    testCases: [
      {
        id: 'array-142-1',
        description: '짝수만 합계가 계산되어야 함',
        expectedResult: 30,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-143',
    title: 'reduce로 함수 체이닝 파이프라인 만들기',
    description: 'reduce를 사용하여 함수들을 연결하는 파이프라인을 만드세요.',
    difficulty: 'intermediate',
    initialCode: `const functions = [
  x => x + 1,
  x => x * 2,
  x => x - 3
];

const pipeline = functions.reduce(/* 여기에 코드를 작성하세요 */);

console.log(pipeline(5)); // 결과: 9`,
    expectedOutput: '9',
    testCases: [
      {
        id: 'array-143-1',
        description: '파이프라인이 올바르게 실행되어야 함',
        expectedResult: 9,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  // 나머지 중급/고급 문제들...
  {
    id: 'array-144',
    title: 'reduce로 평면 배열을 트리 구조로 변환하기',
    description: 'reduce를 사용하여 평면 배열을 트리 구조로 변환하세요.',
    difficulty: 'intermediate',
    initialCode: `const items = [
  { id: 1, parentId: null, name: 'root' },
  { id: 2, parentId: 1, name: 'child1' },
  { id: 3, parentId: 1, name: 'child2' },
  { id: 4, parentId: 2, name: 'grandchild' }
];

// 여기에 코드를 작성하세요

// 트리 구조로 변환`,
    expectedOutput: 'tree structure',
    testCases: [
      {
        id: 'array-144-1',
        description: '트리 구조로 변환되어야 함',
        expectedResult: 'tree structure',
      },
    ],
    createdAt: new Date().toISOString(),
  },
];
