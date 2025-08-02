// src/entities/problem/model/array-map-problems.ts
import type { Problem } from '../types/type';

export const ARRAY_MAP_PROBLEMS: Problem[] = [
  // 기초 문제 (1-8)
  {
    id: 'array-21',
    title: 'map으로 배열의 모든 숫자를 2배로 만들기',
    description: '숫자 배열의 모든 요소에 2를 곱한 새 배열을 만드세요.',
    difficulty: 'beginner',
    initialCode: `const numbers = [1, 2, 3, 4, 5];

// 여기에 코드를 작성하세요

// 결과: [2, 4, 6, 8, 10]`,
    expectedOutput: '[2, 4, 6, 8, 10]',
    testCases: [
      {
        id: 'array-21-1',
        description: '모든 요소가 2배가 되어야 함',
        expectedResult: [2, 4, 6, 8, 10],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-22',
    title: 'map으로 문자열 배열을 대문자로 변환하기',
    description: '문자열 배열의 모든 요소를 대문자로 변환하세요.',
    difficulty: 'beginner',
    initialCode: `const words = ['hello', 'world', 'javascript'];

// 여기에 코드를 작성하세요

// 결과: ['HELLO', 'WORLD', 'JAVASCRIPT']`,
    expectedOutput: "['HELLO', 'WORLD', 'JAVASCRIPT']",
    testCases: [
      {
        id: 'array-22-1',
        description: '모든 문자열이 대문자로 변환되어야 함',
        expectedResult: ['HELLO', 'WORLD', 'JAVASCRIPT'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-23',
    title: 'map으로 숫자를 문자열로 변환하기',
    description: '숫자 배열을 문자열 배열로 변환하세요.',
    difficulty: 'beginner',
    initialCode: `const nums = [1, 2, 3, 4];

// 여기에 코드를 작성하세요

// 결과: ['1', '2', '3', '4']`,
    expectedOutput: "['1', '2', '3', '4']",
    testCases: [
      {
        id: 'array-23-1',
        description: '모든 숫자가 문자열로 변환되어야 함',
        expectedResult: ['1', '2', '3', '4'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-24',
    title: 'map으로 배열 요소에 인덱스 번호 추가하기',
    description: '배열의 각 요소에 인덱스 번호를 추가한 문자열을 만드세요.',
    difficulty: 'beginner',
    initialCode: `const items = ['apple', 'banana', 'cherry'];

// 여기에 코드를 작성하세요

// 결과: ['1. apple', '2. banana', '3. cherry']`,
    expectedOutput: "['1. apple', '2. banana', '3. cherry']",
    testCases: [
      {
        id: 'array-24-1',
        description: '각 요소에 올바른 번호가 추가되어야 함',
        expectedResult: ['1. apple', '2. banana', '3. cherry'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-25',
    title: 'map으로 문자열 길이 배열 만들기',
    description: '문자열 배열에서 각 요소의 길이를 구하세요.',
    difficulty: 'beginner',
    initialCode: `const strings = ['cat', 'elephant', 'dog'];

// 여기에 코드를 작성하세요

// 결과: [3, 8, 3]`,
    expectedOutput: '[3, 8, 3]',
    testCases: [
      {
        id: 'array-25-1',
        description: '각 문자열의 길이가 올바르게 계산되어야 함',
        expectedResult: [3, 8, 3],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-26',
    title: 'map으로 문자열을 객체로 변환하기',
    description: '이름 배열을 객체 배열로 변환하세요.',
    difficulty: 'beginner',
    initialCode: `const names = ['Alice', 'Bob', 'Charlie'];

// 여기에 코드를 작성하세요

// 결과: [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }]`,
    expectedOutput: "[{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }]",
    testCases: [
      {
        id: 'array-26-1',
        description: '각 이름이 올바른 객체 형태로 변환되어야 함',
        expectedResult: [
          { name: 'Alice' },
          { name: 'Bob' },
          { name: 'Charlie' },
        ],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-27',
    title: 'map으로 숫자 배열을 제곱 배열로 만들기',
    description: '숫자 배열의 각 요소를 제곱하세요.',
    difficulty: 'beginner',
    initialCode: `const squares = [1, 2, 3, 4, 5];

// 여기에 코드를 작성하세요

// 결과: [1, 4, 9, 16, 25]`,
    expectedOutput: '[1, 4, 9, 16, 25]',
    testCases: [
      {
        id: 'array-27-1',
        description: '각 숫자의 제곱이 올바르게 계산되어야 함',
        expectedResult: [1, 4, 9, 16, 25],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-28',
    title: 'map으로 불린값을 문자열로 변환하기',
    description: '불린 배열을 문자열로 변환하세요.',
    difficulty: 'beginner',
    initialCode: `const booleans = [true, false, true, false];

// 여기에 코드를 작성하세요

// 결과: ['true', 'false', 'true', 'false']`,
    expectedOutput: "['true', 'false', 'true', 'false']",
    testCases: [
      {
        id: 'array-28-1',
        description: '불린값이 올바르게 문자열로 변환되어야 함',
        expectedResult: ['true', 'false', 'true', 'false'],
      },
    ],
    createdAt: new Date().toISOString(),
  },

  // 중급 문제 (9-17)
  {
    id: 'array-29',
    title: 'map으로 객체 배열에서 특정 속성값 추출하기',
    description: '사용자 객체 배열에서 이름만 추출하세요.',
    difficulty: 'intermediate',
    initialCode: `const people = [
  { id: 1, name: 'Alice', email: 'alice@email.com', age: 25 },
  { id: 2, name: 'Bob', email: 'bob@email.com', age: 30 },
  { id: 3, name: 'Charlie', email: 'charlie@email.com', age: 35 }
];

// 여기에 코드를 작성하세요

// 결과: ['Alice', 'Bob', 'Charlie']`,
    expectedOutput: "['Alice', 'Bob', 'Charlie']",
    testCases: [
      {
        id: 'array-29-1',
        description: '각 사용자의 이름만 추출되어야 함',
        expectedResult: ['Alice', 'Bob', 'Charlie'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-30',
    title: 'map으로 객체 속성을 새로운 형태로 변환하기',
    description: '상품 객체를 장바구니 아이템 형태로 변환하세요.',
    difficulty: 'intermediate',
    initialCode: `const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Mouse', price: 25 },
  { id: 3, name: 'Keyboard', price: 75 }
];

// 여기에 코드를 작성하세요
// 가격은 "$25.00" 형태로 변환`,
    expectedOutput: `[
  { productId: 1, title: 'Laptop', cost: '$1000.00' },
  { productId: 2, title: 'Mouse', cost: '$25.00' },
  { productId: 3, title: 'Keyboard', cost: '$75.00' }
]`,
    testCases: [
      {
        id: 'array-30-1',
        description: '상품이 올바른 장바구니 형태로 변환되어야 함',
        expectedResult: [
          { productId: 1, title: 'Laptop', cost: '$1000.00' },
          { productId: 2, title: 'Mouse', cost: '$25.00' },
          { productId: 3, title: 'Keyboard', cost: '$75.00' },
        ],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-31',
    title: 'map으로 2차원 배열을 문자열 배열로 변환하기',
    description: '2차원 배열을 문자열 배열로 변환하세요.',
    difficulty: 'intermediate',
    initialCode: `const nestedNumbers = [[1, 2], [3, 4], [5, 6]];

// 여기에 코드를 작성하세요

// 결과: ['1,2', '3,4', '5,6']`,
    expectedOutput: "['1,2', '3,4', '5,6']",
    testCases: [
      {
        id: 'array-31-1',
        description: '각 내부 배열이 콤마로 구분된 문자열로 변환되어야 함',
        expectedResult: ['1,2', '3,4', '5,6'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-32',
    title: 'map으로 조건부 값 변환하기',
    description: '음수는 0으로, 양수는 그대로 두는 변환을 하세요.',
    difficulty: 'intermediate',
    initialCode: `const mixedNumbers = [1, -2, 3, -4, 5, -6];

// 여기에 코드를 작성하세요

// 결과: [1, 0, 3, 0, 5, 0]`,
    expectedOutput: '[1, 0, 3, 0, 5, 0]',
    testCases: [
      {
        id: 'array-32-1',
        description: '음수는 0으로, 양수는 그대로 유지되어야 함',
        expectedResult: [1, 0, 3, 0, 5, 0],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-33',
    title: 'map으로 온도 단위 변환하기 (섭씨→화씨)',
    description: '온도를 섭씨에서 화씨로 변환하세요. (공식: F = C * 9/5 + 32)',
    difficulty: 'intermediate',
    initialCode: `const celsius = [0, 20, 30, 100];

// 여기에 코드를 작성하세요

// 결과: [32, 68, 86, 212]`,
    expectedOutput: '[32, 68, 86, 212]',
    testCases: [
      {
        id: 'array-33-1',
        description: '섭씨 온도가 올바르게 화씨로 변환되어야 함',
        expectedResult: [32, 68, 86, 212],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-34',
    title: 'map으로 요소와 인덱스를 조합한 문자열 만들기',
    description: '배열의 각 요소와 인덱스를 조합한 문자열을 만드세요.',
    difficulty: 'intermediate',
    initialCode: `const letters = ['a', 'b', 'c', 'd'];

// 여기에 코드를 작성하세요

// 결과: ['a-0', 'b-1', 'c-2', 'd-3']`,
    expectedOutput: "['a-0', 'b-1', 'c-2', 'd-3']",
    testCases: [
      {
        id: 'array-34-1',
        description: '각 요소와 인덱스가 올바르게 조합되어야 함',
        expectedResult: ['a-0', 'b-1', 'c-2', 'd-3'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-35',
    title: 'map으로 객체의 속성명 변경하기',
    description: 'API 형태의 사용자 데이터를 앱에서 사용할 형태로 변환하세요.',
    difficulty: 'intermediate',
    initialCode: `const apiUsers = [
  { user_id: 1, user_name: 'john_doe', created_at: '2023-01-15' },
  { user_id: 2, user_name: 'jane_smith', created_at: '2023-02-20' }
];

// 여기에 코드를 작성하세요`,
    expectedOutput: `[
  { id: 1, name: 'john_doe', createdDate: new Date('2023-01-15') },
  { id: 2, name: 'jane_smith', createdDate: new Date('2023-02-20') }
]`,
    testCases: [
      {
        id: 'array-35-1',
        description: 'API 데이터가 앱 형태로 올바르게 변환되어야 함',
        expectedResult: [
          { id: 1, name: 'john_doe', createdDate: new Date('2023-01-15') },
          { id: 2, name: 'jane_smith', createdDate: new Date('2023-02-20') },
        ],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-36',
    title: 'map으로 문자열을 배열로 분리하기',
    description: '"key:value" 형태의 문자열을 [key, value] 배열로 변환하세요.',
    difficulty: 'intermediate',
    initialCode: `const keyValuePairs = ['name:John', 'age:30', 'city:Seoul'];

// 여기에 코드를 작성하세요

// 결과: [['name', 'John'], ['age', '30'], ['city', 'Seoul']]`,
    expectedOutput: "[['name', 'John'], ['age', '30'], ['city', 'Seoul']]",
    testCases: [
      {
        id: 'array-36-1',
        description: '각 문자열이 올바르게 key-value 배열로 분리되어야 함',
        expectedResult: [
          ['name', 'John'],
          ['age', '30'],
          ['city', 'Seoul'],
        ],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-37',
    title: 'map으로 다양한 타입 데이터 변환하기',
    description:
      '혼합된 타입의 배열에서 숫자는 2배로, 문자열은 대문자로 변환하세요.',
    difficulty: 'intermediate',
    initialCode: `const mixed = [1, 'hello', 2, 'world', 3];

// 여기에 코드를 작성하세요

// 결과: [2, 'HELLO', 4, 'WORLD', 6]`,
    expectedOutput: "[2, 'HELLO', 4, 'WORLD', 6]",
    testCases: [
      {
        id: 'array-37-1',
        description: '숫자는 2배, 문자열은 대문자로 변환되어야 함',
        expectedResult: [2, 'HELLO', 4, 'WORLD', 6],
      },
    ],
    createdAt: new Date().toISOString(),
  },
];
