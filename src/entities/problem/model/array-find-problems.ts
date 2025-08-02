// src/entities/problem/model/array-find-problems.ts
import type { Problem } from '../types/type';

export const ARRAY_FIND_PROBLEMS: Problem[] = [
  // 기초 문제 (1-7)
  {
    id: 'array-71',
    title: 'find로 첫 번째 짝수 찾기',
    description: '숫자 배열에서 첫 번째 짝수를 찾으세요.',
    difficulty: 'beginner',
    initialCode: `const numbers = [1, 3, 4, 7, 8, 9];

// 여기에 코드를 작성하세요

// 결과: 4`,
    expectedOutput: '4',
    testCases: [
      {
        id: 'array-71-1',
        description: '첫 번째 짝수가 반환되어야 함',
        expectedResult: 4,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-72',
    title: 'find로 조건에 맞는 첫 번째 문자열 찾기',
    description: '길이가 5 이상인 첫 번째 문자열을 찾으세요.',
    difficulty: 'beginner',
    initialCode: `const words = ['cat', 'dog', 'elephant', 'lion'];

// 여기에 코드를 작성하세요

// 결과: 'elephant'`,
    expectedOutput: "'elephant'",
    testCases: [
      {
        id: 'array-72-1',
        description: '길이가 5 이상인 첫 번째 문자열이 반환되어야 함',
        expectedResult: 'elephant',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-73',
    title: 'find로 객체 배열에서 특정 속성값 찾기',
    description: 'id가 2인 사용자를 찾으세요.',
    difficulty: 'beginner',
    initialCode: `const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

// 여기에 코드를 작성하세요

// 결과: { id: 2, name: 'Bob' }`,
    expectedOutput: "{ id: 2, name: 'Bob' }",
    testCases: [
      {
        id: 'array-73-1',
        description: 'id가 2인 사용자가 반환되어야 함',
        expectedResult: { id: 2, name: 'Bob' },
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-74',
    title: "'an' 포함 과일 찾기",
    description: "'an'을 포함하는 첫 번째 과일을 찾으세요.",
    difficulty: 'beginner',
    initialCode: `const fruits = ['apple', 'banana', 'orange', 'grape'];

// 여기에 코드를 작성하세요

// 결과: 'banana'`,
    expectedOutput: "'banana'",
    testCases: [
      {
        id: 'array-74-1',
        description: "'an'을 포함하는 첫 번째 과일이 반환되어야 함",
        expectedResult: 'banana',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-75',
    title: '첫 번째 음수 찾기',
    description: '음수인 첫 번째 값을 찾으세요.',
    difficulty: 'beginner',
    initialCode: `const mixedNumbers = [5, 3, -2, 8, -1, 4];

// 여기에 코드를 작성하세요

// 결과: -2`,
    expectedOutput: '-2',
    testCases: [
      {
        id: 'array-75-1',
        description: '첫 번째 음수가 반환되어야 함',
        expectedResult: -2,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-76',
    title: '첫 번째 false 값 찾기',
    description: 'false인 첫 번째 값을 찾으세요.',
    difficulty: 'beginner',
    initialCode: `const flags = [true, true, false, true];

// 여기에 코드를 작성하세요

// 결과: false`,
    expectedOutput: 'false',
    testCases: [
      {
        id: 'array-76-1',
        description: '첫 번째 false 값이 반환되어야 함',
        expectedResult: false,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-77',
    title: '비어있지 않은 문자열 찾기',
    description: '빈 문자열이 아닌 첫 번째 값을 찾으세요.',
    difficulty: 'beginner',
    initialCode: `const strings = ['', '', 'hello', 'world'];

// 여기에 코드를 작성하세요

// 결과: 'hello'`,
    expectedOutput: "'hello'",
    testCases: [
      {
        id: 'array-77-1',
        description: '비어있지 않은 첫 번째 문자열이 반환되어야 함',
        expectedResult: 'hello',
      },
    ],
    createdAt: new Date().toISOString(),
  },

  // 중급 문제 (8-14)
  {
    id: 'array-78',
    title: '전자제품 카테고리 찾기',
    description: "category name이 'Electronics'인 첫 번째 제품을 찾으세요.",
    difficulty: 'intermediate',
    initialCode: `const products = [
  { id: 1, name: 'Book', category: { name: 'Education' } },
  { id: 2, name: 'Laptop', category: { name: 'Electronics' } },
  { id: 3, name: 'Mouse', category: { name: 'Electronics' } }
];

// 여기에 코드를 작성하세요

// 결과: { id: 2, name: 'Laptop', category: { name: 'Electronics' } }`,
    expectedOutput:
      "{ id: 2, name: 'Laptop', category: { name: 'Electronics' } }",
    testCases: [
      {
        id: 'array-78-1',
        description: 'Electronics 카테고리의 첫 번째 제품이 반환되어야 함',
        expectedResult: {
          id: 2,
          name: 'Laptop',
          category: { name: 'Electronics' },
        },
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-79',
    title: '90점 이상 점수와 인덱스 찾기',
    description: '90점 이상인 첫 번째 점수와 그 인덱스를 모두 구하세요.',
    difficulty: 'intermediate',
    initialCode: `const scores = [75, 85, 95, 65, 88];

// 여기에 코드를 작성하세요 (findIndex도 함께 사용)

// 결과: 점수 95, 인덱스 2`,
    expectedOutput: '점수 95, 인덱스 2',
    testCases: [
      {
        id: 'array-79-1',
        description: '90점 이상인 첫 번째 점수와 인덱스가 반환되어야 함',
        expectedResult: { score: 95, index: 2 },
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-80',
    title: '한국 휴대폰 번호 패턴 찾기',
    description:
      '한국 휴대폰 번호 패턴(010-xxxx-xxxx)에 맞는 첫 번째 번호를 찾으세요.',
    difficulty: 'intermediate',
    initialCode: `const phoneNumbers = [
  '123-456',
  '010-1234-5678',
  'invalid',
  '02-123-4567'
];

// 여기에 코드를 작성하세요 (정규식 사용)

// 결과: '010-1234-5678'`,
    expectedOutput: "'010-1234-5678'",
    testCases: [
      {
        id: 'array-80-1',
        description: '올바른 휴대폰 번호 패턴이 반환되어야 함',
        expectedResult: '010-1234-5678',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-81',
    title: '첫 번째 문자열 타입 찾기',
    description: '문자열인 첫 번째 값을 찾으세요.',
    difficulty: 'intermediate',
    initialCode: `const mixedArray = [true, 42, 'hello', false, 'world'];

// 여기에 코드를 작성하세요

// 결과: 'hello'`,
    expectedOutput: "'hello'",
    testCases: [
      {
        id: 'array-81-1',
        description: '첫 번째 문자열이 반환되어야 함',
        expectedResult: 'hello',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-82',
    title: '미래 날짜 찾기',
    description: '현재 날짜 이후인 첫 번째 날짜를 찾으세요.',
    difficulty: 'intermediate',
    initialCode: `const dates = [
  new Date('2023-01-15'),
  new Date('2025-06-20'),  // 현재보다 미래
  new Date('2025-12-10')
];
const now = new Date();

// 여기에 코드를 작성하세요

// 결과: 2025-06-20 (현재 날짜에 따라 다를 수 있음)`,
    expectedOutput: '2025-06-20',
    testCases: [
      {
        id: 'array-82-1',
        description: '현재 이후의 첫 번째 날짜가 반환되어야 함',
        expectedResult: new Date('2025-06-20'),
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-83',
    title: '조건 만족 함수 찾기',
    description: 'testValue(7)에 대해 true를 반환하는 첫 번째 함수를 찾으세요.',
    difficulty: 'intermediate',
    initialCode: `const validators = [
  x => x > 10,
  x => x > 5,
  x => x > 0
];
const testValue = 7;

// 여기에 코드를 작성하세요

// 결과: x => x > 5`,
    expectedOutput: 'x => x > 5',
    testCases: [
      {
        id: 'array-83-1',
        description:
          'testValue에 대해 true를 반환하는 첫 번째 함수가 반환되어야 함',
        expectedResult: 'function that returns true for 7',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-84',
    title: '완료된 작업 찾기',
    description: '완료 상태인 첫 번째 작업을 찾으세요.',
    difficulty: 'intermediate',
    initialCode: `const tasks = [
  { id: 1, title: 'Task 1', status: 'pending' },
  { id: 2, title: 'Task 2', status: 'in-progress' },
  { id: 3, title: 'Task 3', status: 'completed' },
  { id: 4, title: 'Task 4', status: 'completed' }
];

// 여기에 코드를 작성하세요

// 결과: { id: 3, title: 'Task 3', status: 'completed' }`,
    expectedOutput: "{ id: 3, title: 'Task 3', status: 'completed' }",
    testCases: [
      {
        id: 'array-84-1',
        description: '완료 상태인 첫 번째 작업이 반환되어야 함',
        expectedResult: { id: 3, title: 'Task 3', status: 'completed' },
      },
    ],
    createdAt: new Date().toISOString(),
  },
];
