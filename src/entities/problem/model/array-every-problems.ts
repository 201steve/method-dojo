// src/entities/problem/model/array-every-problems.ts
import type { Problem } from '../types/type';

export const ARRAY_EVERY_PROBLEMS: Problem[] = [
  // 초급 문제 (1-7)
  {
    id: 'array-241',
    title: 'every로 모든 요소가 짝수인지 확인하기',
    description: 'every를 사용하여 배열의 모든 요소가 짝수인지 확인하세요.',
    difficulty: 'beginner',
    initialCode: `const numbers = [2, 4, 6, 8, 10];

// 여기에 코드를 작성하세요

// 결과: true`,
    expectedOutput: 'true',
    testCases: [
      {
        id: 'array-241-1',
        description: '모든 요소가 짝수이므로 true가 반환되어야 함',
        expectedResult: true,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-242',
    title: 'every로 모든 요소가 양수인지 확인하기',
    description: 'every를 사용하여 배열의 모든 요소가 양수인지 확인하세요.',
    difficulty: 'beginner',
    initialCode: `const numbers = [1, 5, 3, 8, 2];

// 여기에 코드를 작성하세요

// 결과: true`,
    expectedOutput: 'true',
    testCases: [
      {
        id: 'array-242-1',
        description: '모든 요소가 양수이므로 true가 반환되어야 함',
        expectedResult: true,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-243',
    title: 'every로 모든 문자열 길이 조건 확인하기',
    description: 'every를 사용하여 모든 문자열의 길이가 3 이상인지 확인하세요.',
    difficulty: 'beginner',
    initialCode: `const words = ['cat', 'dog', 'elephant', 'ant'];

// 여기에 코드를 작성하세요

// 결과: false`,
    expectedOutput: 'false',
    testCases: [
      {
        id: 'array-243-1',
        description:
          '모든 문자열이 3글자 이상이 아니므로 false가 반환되어야 함',
        expectedResult: false,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-244',
    title: '모든 요소가 특정 범위 내인지 확인',
    description:
      'every를 사용하여 모든 숫자가 1과 10 사이에 있는지 확인하세요.',
    difficulty: 'beginner',
    initialCode: `const scores = [7, 8, 5, 9, 6];

// 여기에 코드를 작성하세요

// 결과: true`,
    expectedOutput: 'true',
    testCases: [
      {
        id: 'array-244-1',
        description: '모든 점수가 범위 내에 있으므로 true가 반환되어야 함',
        expectedResult: true,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-245',
    title: '모든 불린 값이 true인지 확인',
    description: 'every를 사용하여 불린 배열의 모든 값이 true인지 확인하세요.',
    difficulty: 'beginner',
    initialCode: `const flags = [true, true, false, true];

// 여기에 코드를 작성하세요

// 결과: false`,
    expectedOutput: 'false',
    testCases: [
      {
        id: 'array-245-1',
        description: '모든 값이 true가 아니므로 false가 반환되어야 함',
        expectedResult: false,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-246',
    title: '빈 배열 처리',
    description: 'every를 빈 배열에 적용했을 때의 결과를 확인하세요.',
    difficulty: 'beginner',
    initialCode: `const empty = [];

// 여기에 코드를 작성하세요

// 결과: true`,
    expectedOutput: 'true',
    testCases: [
      {
        id: 'array-246-1',
        description: '빈 배열에 대해 true가 반환되어야 함',
        expectedResult: true,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-247',
    title: '모든 요소가 정의되어 있는지 확인',
    description:
      'every를 사용하여 배열에 undefined나 null이 없는지 확인하세요.',
    difficulty: 'beginner',
    initialCode: `const values = [1, 'hello', true, 0, ''];

// 여기에 코드를 작성하세요

// 결과: true`,
    expectedOutput: 'true',
    testCases: [
      {
        id: 'array-247-1',
        description: '모든 값이 정의되어 있으므로 true가 반환되어야 함',
        expectedResult: true,
      },
    ],
    createdAt: new Date().toISOString(),
  },

  // 중급 문제 (8-14)
  {
    id: 'array-248',
    title: '모든 사용자가 성인인지 확인',
    description: 'every를 사용하여 모든 사용자가 18세 이상인지 확인하세요.',
    difficulty: 'intermediate',
    initialCode: `const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 17 }
];

// 여기에 코드를 작성하세요

// 결과: false`,
    expectedOutput: 'false',
    testCases: [
      {
        id: 'array-248-1',
        description: '미성년자가 있으므로 false가 반환되어야 함',
        expectedResult: false,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-249',
    title: '모든 제품이 재고 있는지 확인',
    description: 'every를 사용하여 모든 제품의 재고가 0보다 큰지 확인하세요.',
    difficulty: 'intermediate',
    initialCode: `const products = [
  { name: 'Laptop', stock: 5 },
  { name: 'Mouse', stock: 10 },
  { name: 'Keyboard', stock: 0 }
];

// 여기에 코드를 작성하세요

// 결과: false`,
    expectedOutput: 'false',
    testCases: [
      {
        id: 'array-249-1',
        description: '재고가 0인 제품이 있으므로 false가 반환되어야 함',
        expectedResult: false,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-250',
    title: '모든 배열이 비어있지 않은지 확인',
    description:
      'every를 사용하여 중첩 배열이 모두 비어있지 않은지 확인하세요.',
    difficulty: 'intermediate',
    initialCode: `const matrix = [[1, 2], [3], [4, 5, 6], []];

// 여기에 코드를 작성하세요

// 결과: false`,
    expectedOutput: 'false',
    testCases: [
      {
        id: 'array-250-1',
        description: '빈 배열이 있으므로 false가 반환되어야 함',
        expectedResult: false,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-251',
    title: '모든 문자열이 패턴에 매칭되는지 확인',
    description:
      'every를 사용하여 모든 문자열이 특정 패턴에 매칭되는지 확인하세요.',
    difficulty: 'intermediate',
    initialCode: `const phoneNumbers = [
  '010-1234-5678',
  '010-9876-5432',
  '010-1111-2222',
  '02-123-4567'
];

// 여기에 코드를 작성하세요 (010으로 시작하는 패턴)

// 결과: false`,
    expectedOutput: 'false',
    testCases: [
      {
        id: 'array-251-1',
        description:
          '010으로 시작하지 않는 번호가 있으므로 false가 반환되어야 함',
        expectedResult: false,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-252',
    title: '모든 날짜가 미래인지 확인',
    description: 'every를 사용하여 모든 날짜가 현재보다 미래인지 확인하세요.',
    difficulty: 'intermediate',
    initialCode: `const dates = [
  new Date('2025-01-01'),
  new Date('2025-06-15'),
  new Date('2024-12-31')
];

const now = new Date('2024-12-01');

// 여기에 코드를 작성하세요

// 결과: false (하나가 현재와 같음)`,
    expectedOutput: 'false',
    testCases: [
      {
        id: 'array-252-1',
        description: '모든 날짜가 미래가 아니므로 false가 반환되어야 함',
        expectedResult: false,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-253',
    title: '모든 함수가 조건을 만족하는지 확인',
    description:
      'every를 사용하여 모든 함수가 특정 값에 대해 true를 반환하는지 확인하세요.',
    difficulty: 'intermediate',
    initialCode: `const validators = [
  x => x > 0,
  x => x < 100,
  x => x % 2 === 0
];

const testValue = 50;

// 여기에 코드를 작성하세요

// 결과: true`,
    expectedOutput: 'true',
    testCases: [
      {
        id: 'array-253-1',
        description: '모든 조건을 만족하므로 true가 반환되어야 함',
        expectedResult: true,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-254',
    title: '모든 요소가 같은 타입인지 확인',
    description:
      'every를 사용하여 배열의 모든 요소가 같은 타입인지 확인하세요.',
    difficulty: 'intermediate',
    initialCode: `const mixed = [1, 2, 3, '4', 5];

// 여기에 코드를 작성하세요 (모두 숫자인지 확인)

// 결과: false`,
    expectedOutput: 'false',
    testCases: [
      {
        id: 'array-254-1',
        description: '문자열이 포함되어 있으므로 false가 반환되어야 함',
        expectedResult: false,
      },
    ],
    createdAt: new Date().toISOString(),
  },
];
