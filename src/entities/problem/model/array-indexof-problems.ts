// src/entities/problem/model/array-indexof-problems.ts
import type { Problem } from '../types/type';

export const ARRAY_INDEXOF_PROBLEMS: Problem[] = [
  // 초급 문제 (1-7)
  {
    id: 'array-176',
    title: '문자열에서 특정 문자 찾기',
    description: 'indexOf를 사용하여 문자열에서 특정 문자의 위치를 찾으세요.',
    difficulty: 'beginner',
    initialCode: `const word = "JavaScript";

// 여기에 코드를 작성하세요 ('S'의 위치 찾기)

// 결과: 4`,
    expectedOutput: '4',
    testCases: [
      {
        id: 'array-176-1',
        description: '문자 S의 인덱스가 올바르게 반환되어야 함',
        expectedResult: 4,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-177',
    title: '숫자 배열에서 값 찾기',
    description:
      'indexOf를 사용하여 숫자 배열에서 특정 값의 인덱스를 찾으세요.',
    difficulty: 'beginner',
    initialCode: `const numbers = [10, 20, 30, 40, 50];

// 여기에 코드를 작성하세요 (30의 위치 찾기)

// 결과: 2`,
    expectedOutput: '2',
    testCases: [
      {
        id: 'array-177-1',
        description: '숫자 30의 인덱스가 올바르게 반환되어야 함',
        expectedResult: 2,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-178',
    title: '과일 배열에서 특정 과일 찾기',
    description:
      'indexOf를 사용하여 과일 배열에서 특정 과일의 위치를 찾으세요.',
    difficulty: 'beginner',
    initialCode: `const fruits = ['apple', 'banana', 'orange', 'grape'];

// 여기에 코드를 작성하세요 ('orange'의 위치 찾기)

// 결과: 2`,
    expectedOutput: '2',
    testCases: [
      {
        id: 'array-178-1',
        description: 'orange의 인덱스가 올바르게 반환되어야 함',
        expectedResult: 2,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-179',
    title: '없는 값 처리하기',
    description: 'indexOf로 배열에 없는 값을 찾았을 때의 결과를 확인하세요.',
    difficulty: 'beginner',
    initialCode: `const colors = ['red', 'green', 'blue'];

// 여기에 코드를 작성하세요 ('yellow'의 위치 찾기)

// 결과: -1`,
    expectedOutput: '-1',
    testCases: [
      {
        id: 'array-179-1',
        description: '없는 값에 대해 -1이 반환되어야 함',
        expectedResult: -1,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-180',
    title: '시작 위치 지정하여 찾기',
    description:
      'indexOf의 두 번째 매개변수를 사용하여 특정 위치부터 검색하세요.',
    difficulty: 'beginner',
    initialCode: `const letters = ['a', 'b', 'c', 'b', 'd', 'b'];

// 여기에 코드를 작성하세요 (인덱스 2부터 'b' 찾기)

// 결과: 3`,
    expectedOutput: '3',
    testCases: [
      {
        id: 'array-180-1',
        description: '지정된 위치부터 검색된 결과가 반환되어야 함',
        expectedResult: 3,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-181',
    title: '불리언 값 찾기',
    description: 'indexOf를 사용하여 불리언 배열에서 true/false를 찾으세요.',
    difficulty: 'beginner',
    initialCode: `const flags = [false, true, false, true, false];

// 여기에 코드를 작성하세요 (첫 번째 true의 위치)

// 결과: 1`,
    expectedOutput: '1',
    testCases: [
      {
        id: 'array-181-1',
        description: '첫 번째 true의 인덱스가 반환되어야 함',
        expectedResult: 1,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-182',
    title: '중복 값의 첫 번째 위치 찾기',
    description: 'indexOf로 중복된 값 중 첫 번째 위치를 찾으세요.',
    difficulty: 'beginner',
    initialCode: `const duplicates = [5, 3, 5, 8, 5, 2];

// 여기에 코드를 작성하세요 (5의 첫 번째 위치)

// 결과: 0`,
    expectedOutput: '0',
    testCases: [
      {
        id: 'array-182-1',
        description: '중복 값의 첫 번째 인덱스가 반환되어야 함',
        expectedResult: 0,
      },
    ],
    createdAt: new Date().toISOString(),
  },

  // 중급 문제 (8-14)
  {
    id: 'array-183',
    title: '값 존재 여부 확인',
    description: 'indexOf를 사용하여 값의 존재 여부를 boolean으로 반환하세요.',
    difficulty: 'intermediate',
    initialCode: `const items = ['pen', 'book', 'phone', 'wallet'];

function hasItem(array, item) {
  // 여기에 코드를 작성하세요
}

console.log(hasItem(items, 'phone')); // true
console.log(hasItem(items, 'key')); // false`,
    expectedOutput: 'true, false',
    testCases: [
      {
        id: 'array-183-1',
        description: '존재하는 값에 대해 true, 없는 값에 대해 false 반환',
        expectedResult: { phone: true, key: false },
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-184',
    title: '모든 발생 위치 찾기',
    description: 'indexOf를 반복 사용하여 특정 값의 모든 위치를 찾으세요.',
    difficulty: 'intermediate',
    initialCode: `const numbers = [1, 3, 2, 3, 5, 3, 7];

function findAllIndexes(array, value) {
  // 여기에 코드를 작성하세요
}

const indexes = findAllIndexes(numbers, 3);
// 결과: [1, 3, 5]`,
    expectedOutput: '[1, 3, 5]',
    testCases: [
      {
        id: 'array-184-1',
        description: '모든 발생 위치가 배열로 반환되어야 함',
        expectedResult: [1, 3, 5],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-185',
    title: '객체 속성으로 검색',
    description: '객체 배열에서 특정 속성값을 가진 객체의 인덱스를 찾으세요.',
    difficulty: 'intermediate',
    initialCode: `const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' }
];

function findUserIndex(users, name) {
  // 여기에 코드를 작성하세요
}

const index = findUserIndex(users, 'Jane');
// 결과: 1`,
    expectedOutput: '1',
    testCases: [
      {
        id: 'array-185-1',
        description: 'Jane의 인덱스가 올바르게 반환되어야 함',
        expectedResult: 1,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-186',
    title: '대소문자 구분 없는 검색',
    description:
      'indexOf와 문자열 메서드를 결합하여 대소문자 구분 없이 검색하세요.',
    difficulty: 'intermediate',
    initialCode: `const languages = ['JavaScript', 'Python', 'Java', 'C++'];

function findIgnoreCase(array, value) {
  // 여기에 코드를 작성하세요
}

const index = findIgnoreCase(languages, 'javascript');
// 결과: 0`,
    expectedOutput: '0',
    testCases: [
      {
        id: 'array-186-1',
        description: '대소문자 구분 없이 검색되어야 함',
        expectedResult: 0,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-187',
    title: '부분 문자열 포함 검색',
    description: 'indexOf를 사용하여 부분 문자열을 포함하는 요소를 찾으세요.',
    difficulty: 'intermediate',
    initialCode: `const sentences = [
  'Hello world',
  'JavaScript is fun',
  'Programming rocks',
  'Have a nice day'
];

function findContaining(array, substring) {
  // 여기에 코드를 작성하세요
}

const index = findContaining(sentences, 'Script');
// 결과: 1`,
    expectedOutput: '1',
    testCases: [
      {
        id: 'array-187-1',
        description: '부분 문자열을 포함하는 요소의 인덱스가 반환되어야 함',
        expectedResult: 1,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-188',
    title: '조건부 검색',
    description: '조건에 따라 다른 값을 indexOf로 검색하세요.',
    difficulty: 'intermediate',
    initialCode: `const grades = ['A', 'B', 'C', 'B', 'A', 'D'];
const isPassing = true;

function findGrade(grades, isPassing) {
  // 여기에 코드를 작성하세요 (통과면 'A', 실패면 'D' 찾기)
}

const index = findGrade(grades, isPassing);
// 결과: 0 (첫 번째 'A'의 위치)`,
    expectedOutput: '0',
    testCases: [
      {
        id: 'array-188-1',
        description: '조건에 따른 올바른 값의 인덱스가 반환되어야 함',
        expectedResult: 0,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-189',
    title: '중첩 배열에서 검색',
    description: 'indexOf를 사용하여 중첩 배열에서 특정 배열을 찾으세요.',
    difficulty: 'intermediate',
    initialCode: `const matrix = [[1, 2], [3, 4], [5, 6], [3, 4]];
const target = [3, 4];

function findArray(matrix, target) {
  // 여기에 코드를 작성하세요
}

const index = findArray(matrix, target);
// 결과: 1 (첫 번째 [3, 4]의 위치)`,
    expectedOutput: '1',
    testCases: [
      {
        id: 'array-189-1',
        description: '배열의 인덱스가 올바르게 반환되어야 함',
        expectedResult: 1,
      },
    ],
    createdAt: new Date().toISOString(),
  },
];
