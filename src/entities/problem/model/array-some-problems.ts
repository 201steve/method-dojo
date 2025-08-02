// src/entities/problem/model/array-some-problems.ts
import type { Problem } from '../types/type';

export const ARRAY_SOME_PROBLEMS: Problem[] = [
  // 초급 문제 (1-7)
  {
    id: 'array-221',
    title: 'some으로 짝수 존재 여부 확인하기',
    description: 'some을 사용하여 배열에 짝수가 있는지 확인하세요.',
    difficulty: 'beginner',
    initialCode: `const numbers = [1, 3, 5, 8, 9];

// 여기에 코드를 작성하세요

// 결과: true`,
    expectedOutput: 'true',
    testCases: [
      {
        id: 'array-221-1',
        description: '짝수가 존재하므로 true가 반환되어야 함',
        expectedResult: true,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-222',
    title: 'some으로 양수 존재 여부 확인하기',
    description: 'some을 사용하여 배열에 양수가 있는지 확인하세요.',
    difficulty: 'beginner',
    initialCode: `const numbers = [-5, -2, 0, 3];

// 여기에 코드를 작성하세요

// 결과: true`,
    expectedOutput: 'true',
    testCases: [
      {
        id: 'array-222-1',
        description: '양수가 존재하므로 true가 반환되어야 함',
        expectedResult: true,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-223',
    title: 'some으로 조건에 맞는 문자열 존재 확인하기',
    description: 'some을 사용하여 길이가 5 이상인 문자열이 있는지 확인하세요.',
    difficulty: 'beginner',
    initialCode: `const words = ['cat', 'dog', 'elephant', 'ant'];

// 여기에 코드를 작성하세요

// 결과: true`,
    expectedOutput: 'true',
    testCases: [
      {
        id: 'array-223-1',
        description: '긴 문자열이 존재하므로 true가 반환되어야 함',
        expectedResult: true,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-224',
    title: '특정 값 포함 확인',
    description: 'some을 사용하여 배열에 특정 값이 포함되어 있는지 확인하세요.',
    difficulty: 'beginner',
    initialCode: `const fruits = ['apple', 'banana', 'orange'];

// 여기에 코드를 작성하세요 ('banana' 포함 여부)

// 결과: true`,
    expectedOutput: 'true',
    testCases: [
      {
        id: 'array-224-1',
        description: 'banana가 포함되어 있으므로 true가 반환되어야 함',
        expectedResult: true,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-225',
    title: '조건 만족하지 않는 경우',
    description:
      'some을 사용하여 아무 요소도 조건을 만족하지 않는 경우를 확인하세요.',
    difficulty: 'beginner',
    initialCode: `const numbers = [1, 3, 5, 7, 9];

// 여기에 코드를 작성하세요 (짝수 존재 여부)

// 결과: false`,
    expectedOutput: 'false',
    testCases: [
      {
        id: 'array-225-1',
        description: '짝수가 없으므로 false가 반환되어야 함',
        expectedResult: false,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-226',
    title: '빈 배열 처리',
    description: 'some을 빈 배열에 적용했을 때의 결과를 확인하세요.',
    difficulty: 'beginner',
    initialCode: `const empty = [];

// 여기에 코드를 작성하세요

// 결과: false`,
    expectedOutput: 'false',
    testCases: [
      {
        id: 'array-226-1',
        description: '빈 배열에 대해 false가 반환되어야 함',
        expectedResult: false,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-227',
    title: '불린 값 확인',
    description: 'some을 사용하여 불린 배열에 true가 있는지 확인하세요.',
    difficulty: 'beginner',
    initialCode: `const flags = [false, false, true, false];

// 여기에 코드를 작성하세요

// 결과: true`,
    expectedOutput: 'true',
    testCases: [
      {
        id: 'array-227-1',
        description: 'true가 존재하므로 true가 반환되어야 함',
        expectedResult: true,
      },
    ],
    createdAt: new Date().toISOString(),
  },

  // 중급 문제 (8-14)
  {
    id: 'array-228',
    title: '객체 속성 조건 확인',
    description:
      'some을 사용하여 객체 배열에서 특정 조건을 만족하는 객체가 있는지 확인하세요.',
    difficulty: 'intermediate',
    initialCode: `const users = [
  { name: 'John', age: 25, isActive: false },
  { name: 'Jane', age: 30, isActive: true },
  { name: 'Bob', age: 35, isActive: false }
];

// 여기에 코드를 작성하세요 (활성 사용자 존재 여부)

// 결과: true`,
    expectedOutput: 'true',
    testCases: [
      {
        id: 'array-228-1',
        description: '활성 사용자가 존재하므로 true가 반환되어야 함',
        expectedResult: true,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-229',
    title: '복합 조건 확인',
    description:
      'some을 사용하여 여러 조건을 동시에 만족하는 요소가 있는지 확인하세요.',
    difficulty: 'intermediate',
    initialCode: `const products = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Mouse', price: 25, inStock: false },
  { name: 'Keyboard', price: 75, inStock: true }
];

// 여기에 코드를 작성하세요 (100 이하이면서 재고 있는 상품)

// 결과: true`,
    expectedOutput: 'true',
    testCases: [
      {
        id: 'array-229-1',
        description: '조건을 만족하는 상품이 존재하므로 true가 반환되어야 함',
        expectedResult: true,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-230',
    title: '중첩 배열 확인',
    description:
      'some을 사용하여 중첩 배열에서 특정 조건을 만족하는 하위 배열이 있는지 확인하세요.',
    difficulty: 'intermediate',
    initialCode: `const matrix = [[1, 2], [3, 4], [5, 6, 7], [8, 9]];

// 여기에 코드를 작성하세요 (길이가 3 이상인 배열 존재 여부)

// 결과: true`,
    expectedOutput: 'true',
    testCases: [
      {
        id: 'array-230-1',
        description: '길이가 3 이상인 배열이 존재하므로 true가 반환되어야 함',
        expectedResult: true,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-231',
    title: '정규식 패턴 매칭',
    description:
      'some을 사용하여 배열의 문자열 중 정규식 패턴에 매칭되는 것이 있는지 확인하세요.',
    difficulty: 'intermediate',
    initialCode: `const emails = [
  'user@gmail.com',
  'invalid-email',
  'admin@company.co.kr',
  'test@test'
];

// 여기에 코드를 작성하세요 (유효한 이메일 패턴 존재 여부)

// 결과: true`,
    expectedOutput: 'true',
    testCases: [
      {
        id: 'array-231-1',
        description: '유효한 이메일이 존재하므로 true가 반환되어야 함',
        expectedResult: true,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-232',
    title: '날짜 범위 확인',
    description:
      'some을 사용하여 특정 날짜 범위에 속하는 날짜가 있는지 확인하세요.',
    difficulty: 'intermediate',
    initialCode: `const dates = [
  new Date('2023-01-15'),
  new Date('2023-06-20'),
  new Date('2023-12-25')
];

const startDate = new Date('2023-06-01');
const endDate = new Date('2023-08-31');

// 여기에 코드를 작성하세요 (여름 기간 날짜 존재 여부)

// 결과: true`,
    expectedOutput: 'true',
    testCases: [
      {
        id: 'array-232-1',
        description: '범위 내 날짜가 존재하므로 true가 반환되어야 함',
        expectedResult: true,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-233',
    title: '함수 실행 결과 확인',
    description:
      'some을 사용하여 함수 배열 중 true를 반환하는 함수가 있는지 확인하세요.',
    difficulty: 'intermediate',
    initialCode: `const validators = [
  () => false,
  () => true,
  () => false
];

// 여기에 코드를 작성하세요

// 결과: true`,
    expectedOutput: 'true',
    testCases: [
      {
        id: 'array-233-1',
        description: 'true를 반환하는 함수가 존재하므로 true가 반환되어야 함',
        expectedResult: true,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-234',
    title: '타입 확인',
    description: 'some을 사용하여 배열에 특정 타입의 값이 있는지 확인하세요.',
    difficulty: 'intermediate',
    initialCode: `const mixed = [1, 'hello', true, null, undefined, 42];

// 여기에 코드를 작성하세요 (문자열 타입 존재 여부)

// 결과: true`,
    expectedOutput: 'true',
    testCases: [
      {
        id: 'array-234-1',
        description: '문자열 타입이 존재하므로 true가 반환되어야 함',
        expectedResult: true,
      },
    ],
    createdAt: new Date().toISOString(),
  },
];
