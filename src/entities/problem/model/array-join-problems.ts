// src/entities/problem/model/array-join-problems.ts
import type { Problem } from '../types/type';

export const ARRAY_JOIN_PROBLEMS: Problem[] = [
  // 초급 문제 (1-7)
  {
    id: 'array-111',
    title: '사용자 태그를 콤마로 구분된 문자열로 표시하기',
    description: 'join을 사용하여 배열을 콤마로 구분된 문자열로 변환하세요.',
    difficulty: 'beginner',
    initialCode: `const fruits = ['apple', 'banana', 'orange'];

// 여기에 코드를 작성하세요

// 결과: "apple,banana,orange"`,
    expectedOutput: '"apple,banana,orange"',
    testCases: [
      {
        id: 'array-111-1',
        description: '쉼표로 올바르게 연결되어야 함',
        expectedResult: 'apple,banana,orange',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-112',
    title: '공백으로 배열 연결',
    description: '배열의 요소들을 공백으로 연결하여 문장을 만드세요.',
    difficulty: 'beginner',
    initialCode: `const words = ['Hello', 'World', 'JavaScript'];

// 여기에 코드를 작성하세요

// 결과: "Hello World JavaScript"`,
    expectedOutput: '"Hello World JavaScript"',
    testCases: [
      {
        id: 'array-112-1',
        description: '공백으로 올바르게 연결되어야 함',
        expectedResult: 'Hello World JavaScript',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-113',
    title: '구분자 없이 연결',
    description: '배열의 요소들을 구분자 없이 연결하세요.',
    difficulty: 'beginner',
    initialCode: `const numbers = [1, 2, 3, 4, 5];

// 여기에 코드를 작성하세요

// 결과: "12345"`,
    expectedOutput: '"12345"',
    testCases: [
      {
        id: 'array-113-1',
        description: '구분자 없이 올바르게 연결되어야 함',
        expectedResult: '12345',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-114',
    title: '하이픈으로 날짜 형식 만들기',
    description: '날짜 배열을 하이픈으로 연결하여 날짜 형식을 만드세요.',
    difficulty: 'beginner',
    initialCode: `const dateArray = ['2024', '01', '15'];

// 여기에 코드를 작성하세요

// 결과: "2024-01-15"`,
    expectedOutput: '"2024-01-15"',
    testCases: [
      {
        id: 'array-114-1',
        description: '하이픈으로 날짜 형식이 만들어져야 함',
        expectedResult: '2024-01-15',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-115',
    title: '경로 만들기',
    description: '경로 요소들을 슬래시로 연결하여 파일 경로를 만드세요.',
    difficulty: 'beginner',
    initialCode: `const pathArray = ['home', 'user', 'documents', 'file.txt'];

// 여기에 코드를 작성하세요

// 결과: "home/user/documents/file.txt"`,
    expectedOutput: '"home/user/documents/file.txt"',
    testCases: [
      {
        id: 'array-115-1',
        description: '슬래시로 경로가 만들어져야 함',
        expectedResult: 'home/user/documents/file.txt',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-116',
    title: '세미콜론으로 SQL 쿼리 연결',
    description: 'SQL 쿼리들을 세미콜론으로 연결하세요.',
    difficulty: 'beginner',
    initialCode: `const queries = ['SELECT * FROM users', 'UPDATE users SET name = "John"', 'DELETE FROM temp'];

// 여기에 코드를 작성하세요

// 결과: "SELECT * FROM users;UPDATE users SET name = \\"John\\";DELETE FROM temp"`,
    expectedOutput:
      '"SELECT * FROM users;UPDATE users SET name = \\"John\\";DELETE FROM temp"',
    testCases: [
      {
        id: 'array-116-1',
        description: '세미콜론으로 쿼리가 연결되어야 함',
        expectedResult:
          'SELECT * FROM users;UPDATE users SET name = "John";DELETE FROM temp',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-117',
    title: '줄바꿈으로 연결',
    description:
      '배열의 요소들을 줄바꿈으로 연결하여 여러 줄 텍스트를 만드세요.',
    difficulty: 'beginner',
    initialCode: `const lines = ['첫 번째 줄', '두 번째 줄', '세 번째 줄'];

// 여기에 코드를 작성하세요

// 결과: "첫 번째 줄\\n두 번째 줄\\n세 번째 줄"`,
    expectedOutput: '"첫 번째 줄\\n두 번째 줄\\n세 번째 줄"',
    testCases: [
      {
        id: 'array-117-1',
        description: '줄바꿈으로 올바르게 연결되어야 함',
        expectedResult: '첫 번째 줄\n두 번째 줄\n세 번째 줄',
      },
    ],
    createdAt: new Date().toISOString(),
  },

  // 중급 문제 (8-14)
  {
    id: 'array-118',
    title: '조건부 구분자 사용',
    description: '배열 길이에 따라 다른 구분자를 사용하여 연결하세요.',
    difficulty: 'intermediate',
    initialCode: `const items = ['apple', 'banana', 'orange'];

// 여기에 코드를 작성하세요 (3개 이하면 쉼표, 그 이상이면 세미콜론)

// 결과: "apple,banana,orange"`,
    expectedOutput: '"apple,banana,orange"',
    testCases: [
      {
        id: 'array-118-1',
        description: '조건에 따라 올바른 구분자가 사용되어야 함',
        expectedResult: 'apple,banana,orange',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-119',
    title: 'HTML 리스트 만들기',
    description: '배열을 HTML 순서 없는 리스트로 변환하세요.',
    difficulty: 'intermediate',
    initialCode: `const items = ['사과', '바나나', '오렌지'];

// 여기에 코드를 작성하세요

// 결과: "<ul><li>사과</li><li>바나나</li><li>오렌지</li></ul>"`,
    expectedOutput: '"<ul><li>사과</li><li>바나나</li><li>오렌지</li></ul>"',
    testCases: [
      {
        id: 'array-119-1',
        description: 'HTML 리스트 형태로 변환되어야 함',
        expectedResult: '<ul><li>사과</li><li>바나나</li><li>오렌지</li></ul>',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-120',
    title: 'CSV 형태로 변환',
    description: '2차원 배열을 CSV 형태의 문자열로 변환하세요.',
    difficulty: 'intermediate',
    initialCode: `const data = [
  ['이름', '나이', '도시'],
  ['김철수', '25', '서울'],
  ['이영희', '30', '부산']
];

// 여기에 코드를 작성하세요

// 결과: "이름,나이,도시\\n김철수,25,서울\\n이영희,30,부산"`,
    expectedOutput: '"이름,나이,도시\\n김철수,25,서울\\n이영희,30,부산"',
    testCases: [
      {
        id: 'array-120-1',
        description: 'CSV 형태로 올바르게 변환되어야 함',
        expectedResult: '이름,나이,도시\n김철수,25,서울\n이영희,30,부산',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-121',
    title: '자연스러운 목록 만들기',
    description:
      '배열을 자연스러운 문장 형태로 연결하세요 (마지막은 "그리고"로).',
    difficulty: 'intermediate',
    initialCode: `const friends = ['철수', '영희', '민수', '지영'];

// 여기에 코드를 작성하세요

// 결과: "철수, 영희, 민수 그리고 지영"`,
    expectedOutput: '"철수, 영희, 민수 그리고 지영"',
    testCases: [
      {
        id: 'array-121-1',
        description: '자연스러운 목록 형태로 연결되어야 함',
        expectedResult: '철수, 영희, 민수 그리고 지영',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-122',
    title: '배열 요소 타입별 처리',
    description: '배열 요소를 타입에 따라 다르게 처리하여 연결하세요.',
    difficulty: 'intermediate',
    initialCode: `const mixed = [42, 'hello', true, null, undefined];

// 여기에 코드를 작성하세요 (null과 undefined는 제외)

// 결과: "42-hello-true"`,
    expectedOutput: '"42-hello-true"',
    testCases: [
      {
        id: 'array-122-1',
        description: 'null과 undefined가 제외되고 연결되어야 함',
        expectedResult: '42-hello-true',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-123',
    title: 'JSON 객체 배열 연결',
    description: '객체 배열을 특정 속성으로 연결하세요.',
    difficulty: 'intermediate',
    initialCode: `const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 35 }
];

// 여기에 코드를 작성하세요 (name 속성만 추출하여 연결)

// 결과: "John, Jane, Bob"`,
    expectedOutput: '"John, Jane, Bob"',
    testCases: [
      {
        id: 'array-123-1',
        description: 'name 속성만 추출하여 연결되어야 함',
        expectedResult: 'John, Jane, Bob',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-124',
    title: '태그 클라우드 만들기',
    description: '태그 배열을 HTML 태그 클라우드 형태로 변환하세요.',
    difficulty: 'intermediate',
    initialCode: `const tags = ['JavaScript', 'React', 'Node.js', 'CSS'];

// 여기에 코드를 작성하세요

// 결과: "<span>JavaScript</span> <span>React</span> <span>Node.js</span> <span>CSS</span>"`,
    expectedOutput:
      '"<span>JavaScript</span> <span>React</span> <span>Node.js</span> <span>CSS</span>"',
    testCases: [
      {
        id: 'array-124-1',
        description: 'HTML 태그 클라우드 형태로 변환되어야 함',
        expectedResult:
          '<span>JavaScript</span> <span>React</span> <span>Node.js</span> <span>CSS</span>',
      },
    ],
    createdAt: new Date().toISOString(),
  },
];
