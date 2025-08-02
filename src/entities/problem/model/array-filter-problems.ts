// src/entities/problem/model/array-filter-problems.ts
import type { Problem } from '../types/type';

export const ARRAY_FILTER_PROBLEMS: Problem[] = [
  // 기초 문제 (1-8)
  {
    id: 'array-46',
    title: 'filter로 짝수만 골라내기',
    description: '숫자 배열에서 짝수만 필터링하세요.',
    difficulty: 'beginner',
    initialCode: `const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 여기에 코드를 작성하세요

// 결과: [2, 4, 6, 8, 10]`,
    expectedOutput: '[2, 4, 6, 8, 10]',
    testCases: [
      {
        id: 'array-46-1',
        description: '짝수만 남아야 함',
        expectedResult: [2, 4, 6, 8, 10],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-47',
    title: 'filter로 긴 문자열만 선별하기',
    description: '길이가 5글자 이상인 단어만 필터링하세요.',
    difficulty: 'beginner',
    initialCode: `const words = ['cat', 'elephant', 'dog', 'butterfly', 'ant'];

// 여기에 코드를 작성하세요

// 결과: ['elephant', 'butterfly']`,
    expectedOutput: "['elephant', 'butterfly']",
    testCases: [
      {
        id: 'array-47-1',
        description: '길이가 5 이상인 단어만 남아야 함',
        expectedResult: ['elephant', 'butterfly'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-48',
    title: 'filter로 true 값만 모으기',
    description: 'true 값만 필터링하세요.',
    difficulty: 'beginner',
    initialCode: `const flags = [true, false, true, false, true];

// 여기에 코드를 작성하세요

// 결과: [true, true, true]`,
    expectedOutput: '[true, true, true]',
    testCases: [
      {
        id: 'array-48-1',
        description: 'true 값만 남아야 함',
        expectedResult: [true, true, true],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-49',
    title: 'filter로 10보다 큰 숫자 찾기',
    description: '10보다 큰 값만 필터링하세요.',
    difficulty: 'beginner',
    initialCode: `const scores = [5, 15, 8, 22, 12, 3, 18];

// 여기에 코드를 작성하세요

// 결과: [15, 22, 12, 18]`,
    expectedOutput: '[15, 22, 12, 18]',
    testCases: [
      {
        id: 'array-49-1',
        description: '10보다 큰 값만 남아야 함',
        expectedResult: [15, 22, 12, 18],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-50',
    title: 'filter로 특정 문자 포함 단어 찾기',
    description: "'a'를 포함하는 과일만 필터링하세요.",
    difficulty: 'beginner',
    initialCode: `const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// 여기에 코드를 작성하세요

// 결과: ['apple', 'banana', 'orange', 'grape']`,
    expectedOutput: "['apple', 'banana', 'orange', 'grape']",
    testCases: [
      {
        id: 'array-50-1',
        description: "'a'를 포함하는 과일만 남아야 함",
        expectedResult: ['apple', 'banana', 'orange', 'grape'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-51',
    title: 'filter로 빈 문자열 제거하기',
    description: '빈 문자열이 아닌 것만 필터링하세요.',
    difficulty: 'beginner',
    initialCode: `const strings = ['hello', '', 'world', '', 'javascript', ''];

// 여기에 코드를 작성하세요

// 결과: ['hello', 'world', 'javascript']`,
    expectedOutput: "['hello', 'world', 'javascript']",
    testCases: [
      {
        id: 'array-51-1',
        description: '빈 문자열이 제거되어야 함',
        expectedResult: ['hello', 'world', 'javascript'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-52',
    title: 'filter로 null과 undefined 제거하기',
    description: 'null이나 undefined가 아닌 값만 필터링하세요.',
    difficulty: 'beginner',
    initialCode: `const values = [1, null, 2, undefined, 3, null, 4];

// 여기에 코드를 작성하세요

// 결과: [1, 2, 3, 4]`,
    expectedOutput: '[1, 2, 3, 4]',
    testCases: [
      {
        id: 'array-52-1',
        description: 'null과 undefined가 제거되어야 함',
        expectedResult: [1, 2, 3, 4],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-53',
    title: 'filter와 indexOf로 중복 제거하기',
    description: '중복을 제거하세요 (filter + indexOf 활용).',
    difficulty: 'beginner',
    initialCode: `const duplicates = [1, 2, 2, 3, 3, 4, 1, 5];

// 여기에 코드를 작성하세요

// 결과: [1, 2, 3, 4, 5]`,
    expectedOutput: '[1, 2, 3, 4, 5]',
    testCases: [
      {
        id: 'array-53-1',
        description: '중복이 제거되어야 함',
        expectedResult: [1, 2, 3, 4, 5],
      },
    ],
    createdAt: new Date().toISOString(),
  },

  // 중급 문제 (9-17)
  {
    id: 'array-54',
    title: 'filter로 여러 조건을 만족하는 객체 찾기',
    description: '성인이면서 활성 상태인 사용자만 필터링하세요.',
    difficulty: 'intermediate',
    initialCode: `const users = [
  { id: 1, name: 'Alice', age: 25, isActive: true },
  { id: 2, name: 'Bob', age: 17, isActive: false },
  { id: 3, name: 'Charlie', age: 30, isActive: true },
  { id: 4, name: 'David', age: 16, isActive: true }
];

// 여기에 코드를 작성하세요

// 결과: Alice, Charlie`,
    expectedOutput: 'Alice, Charlie',
    testCases: [
      {
        id: 'array-54-1',
        description: '성인이면서 활성 사용자만 남아야 함',
        expectedResult: [
          { id: 1, name: 'Alice', age: 25, isActive: true },
          { id: 3, name: 'Charlie', age: 30, isActive: true },
        ],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-55',
    title: 'filter로 날짜 범위에 해당하는 데이터 선별하기',
    description: '2023년 상반기(1-6월) 날짜만 필터링하세요.',
    difficulty: 'intermediate',
    initialCode: `const dates = [
  new Date('2023-01-15'),
  new Date('2023-06-20'),
  new Date('2023-08-10'),
  new Date('2023-12-25'),
  new Date('2022-05-10')
];

// 여기에 코드를 작성하세요

// 결과: 2023년 1월, 6월 날짜들`,
    expectedOutput: '2023년 1월, 6월 날짜들',
    testCases: [
      {
        id: 'array-55-1',
        description: '2023년 상반기 날짜만 남아야 함',
        expectedResult: [new Date('2023-01-15'), new Date('2023-06-20')],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-56',
    title: 'filter로 중첩 객체 조건 검사하기',
    description:
      'Electronics 카테고리이면서 가격이 500 이상인 제품만 필터링하세요.',
    difficulty: 'intermediate',
    initialCode: `const products = [
  { id: 1, name: 'Laptop', category: { name: 'Electronics' }, price: 1000 },
  { id: 2, name: 'Book', category: { name: 'Education' }, price: 20 },
  { id: 3, name: 'Mouse', category: { name: 'Electronics' }, price: 25 },
  { id: 4, name: 'Monitor', category: { name: 'Electronics' }, price: 300 },
  { id: 5, name: 'Keyboard', category: { name: 'Electronics' }, price: 75 }
];

// 여기에 코드를 작성하세요

// 결과: Laptop만`,
    expectedOutput: 'Laptop만',
    testCases: [
      {
        id: 'array-56-1',
        description:
          'Electronics 카테고리이면서 가격이 500 이상인 제품만 남아야 함',
        expectedResult: [
          {
            id: 1,
            name: 'Laptop',
            category: { name: 'Electronics' },
            price: 1000,
          },
        ],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-57',
    title: 'filter와 정규식으로 패턴 매칭하기',
    description: '유효한 이메일 형식만 필터링하세요.',
    difficulty: 'intermediate',
    initialCode: `const emails = [
  'user@gmail.com',
  'invalid-email',
  'admin@company.co.kr',
  'test@test',
  'another@valid.com',
  '@invalid.com'
];

// 여기에 코드를 작성하세요 (정규식 사용)

// 결과: 유효한 이메일들만`,
    expectedOutput: '유효한 이메일들만',
    testCases: [
      {
        id: 'array-57-1',
        description: '유효한 이메일 형식만 남아야 함',
        expectedResult: [
          'user@gmail.com',
          'admin@company.co.kr',
          'another@valid.com',
        ],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-58',
    title: 'filter로 인덱스 기반 조건 활용하기',
    description: '짝수 인덱스에 있는 요소만 필터링하세요.',
    difficulty: 'intermediate',
    initialCode: `const items = ['a', 'b', 'c', 'd', 'e', 'f'];

// 여기에 코드를 작성하세요

// 결과: ['a', 'c', 'e']`,
    expectedOutput: "['a', 'c', 'e']",
    testCases: [
      {
        id: 'array-58-1',
        description: '짝수 인덱스에 있는 요소만 남아야 함',
        expectedResult: ['a', 'c', 'e'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-59',
    title: 'filter로 복합 조건 검사하기',
    description:
      'IT 부서, 경력 2년 이상, 연봉 50000 이상인 직원만 필터링하세요.',
    difficulty: 'intermediate',
    initialCode: `const employees = [
  { name: 'John', department: 'IT', salary: 60000, experience: 3 },
  { name: 'Jane', department: 'HR', salary: 55000, experience: 5 },
  { name: 'Bob', department: 'IT', salary: 45000, experience: 2 },
  { name: 'Alice', department: 'IT', salary: 70000, experience: 4 }
];

// 여기에 코드를 작성하세요

// 결과: John, Alice`,
    expectedOutput: 'John, Alice',
    testCases: [
      {
        id: 'array-59-1',
        description: '조건을 만족하는 직원만 남아야 함',
        expectedResult: [
          { name: 'John', department: 'IT', salary: 60000, experience: 3 },
          { name: 'Alice', department: 'IT', salary: 70000, experience: 4 },
        ],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-60',
    title: 'filter로 특정 타입 객체만 선별하기',
    description: '개(dog) 타입인 동물만 필터링하세요.',
    difficulty: 'intermediate',
    initialCode: `const animals = [
  { type: 'dog', breed: 'Golden Retriever', name: 'Max' },
  { type: 'cat', color: 'black', name: 'Shadow' },
  { type: 'dog', breed: 'Bulldog', name: 'Rocky' },
  { type: 'bird', canFly: true, name: 'Tweet' }
];

// 여기에 코드를 작성하세요

// 결과: Max, Rocky`,
    expectedOutput: 'Max, Rocky',
    testCases: [
      {
        id: 'array-60-1',
        description: '개 타입 동물만 남아야 함',
        expectedResult: [
          { type: 'dog', breed: 'Golden Retriever', name: 'Max' },
          { type: 'dog', breed: 'Bulldog', name: 'Rocky' },
        ],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-61',
    title: 'filter로 함수 조건 검사하기',
    description: '주어진 값(5)에 대해 true를 반환하는 함수들만 필터링하세요.',
    difficulty: 'intermediate',
    initialCode: `const operations = [
  x => x > 10,
  x => x > 3,
  x => x < 10,
  x => x === 5
];
const testValue = 5;

// 여기에 코드를 작성하세요

// 결과: x => x > 3, x => x < 10, x => x === 5`,
    expectedOutput: 'x => x > 3, x => x < 10, x => x === 5',
    testCases: [
      {
        id: 'array-61-1',
        description: 'testValue에 대해 true를 반환하는 함수들만 남아야 함',
        expectedResult: 'functions that return true for value 5',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-62',
    title: 'filter로 배열 속성 조건 검사하기',
    description: '완료된 프로젝트가 있는 직원만 필터링하세요.',
    difficulty: 'intermediate',
    initialCode: `const staff = [
  { 
    name: 'John', 
    projects: [
      { name: 'Project A', status: 'completed' },
      { name: 'Project B', status: 'in-progress' }
    ]
  },
  { 
    name: 'Jane', 
    projects: [
      { name: 'Project C', status: 'in-progress' }
    ]
  },
  { 
    name: 'Bob', 
    projects: [
      { name: 'Project D', status: 'completed' },
      { name: 'Project E', status: 'completed' }
    ]
  }
];

// 여기에 코드를 작성하세요

// 결과: John, Bob`,
    expectedOutput: 'John, Bob',
    testCases: [
      {
        id: 'array-62-1',
        description: '완료된 프로젝트가 있는 직원만 남아야 함',
        expectedResult: [
          {
            name: 'John',
            projects: [
              { name: 'Project A', status: 'completed' },
              { name: 'Project B', status: 'in-progress' },
            ],
          },
          {
            name: 'Bob',
            projects: [
              { name: 'Project D', status: 'completed' },
              { name: 'Project E', status: 'completed' },
            ],
          },
        ],
      },
    ],
    createdAt: new Date().toISOString(),
  },
];
