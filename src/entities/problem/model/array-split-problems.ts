// src/entities/problem/model/array-split-problems.ts
import type { Problem } from '../types/type';

export const ARRAY_SPLIT_PROBLEMS: Problem[] = [
  // 초급 문제 (1-7)
  {
    id: 'array-91',
    title: '공백으로 문자열 분리',
    description: '문자열을 공백으로 분리하여 배열을 만드세요.',
    difficulty: 'beginner',
    initialCode: `const sentence = "Hello World JavaScript";

// 여기에 코드를 작성하세요

// 결과: ["Hello", "World", "JavaScript"]`,
    expectedOutput: '["Hello", "World", "JavaScript"]',
    testCases: [
      {
        id: 'array-91-1',
        description: '공백으로 올바르게 분리되어야 함',
        expectedResult: ['Hello', 'World', 'JavaScript'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-92',
    title: '쉼표로 문자열 분리',
    description: '쉼표로 구분된 문자열을 배열로 만드세요.',
    difficulty: 'beginner',
    initialCode: `const fruits = "apple,banana,orange,grape";

// 여기에 코드를 작성하세요

// 결과: ["apple", "banana", "orange", "grape"]`,
    expectedOutput: '["apple", "banana", "orange", "grape"]',
    testCases: [
      {
        id: 'array-92-1',
        description: '쉼표로 올바르게 분리되어야 함',
        expectedResult: ['apple', 'banana', 'orange', 'grape'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-93',
    title: '각 문자로 분리',
    description: '문자열을 각 문자로 분리하세요.',
    difficulty: 'beginner',
    initialCode: `const word = "JavaScript";

// 여기에 코드를 작성하세요

// 결과: ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]`,
    expectedOutput: '["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]',
    testCases: [
      {
        id: 'array-93-1',
        description: '각 문자로 올바르게 분리되어야 함',
        expectedResult: ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-94',
    title: '하이픈으로 날짜 분리',
    description: '하이픈으로 구분된 날짜를 분리하세요.',
    difficulty: 'beginner',
    initialCode: `const date = "2024-01-15";

// 여기에 코드를 작성하세요

// 결과: ["2024", "01", "15"]`,
    expectedOutput: '["2024", "01", "15"]',
    testCases: [
      {
        id: 'array-94-1',
        description: '날짜가 올바르게 분리되어야 함',
        expectedResult: ['2024', '01', '15'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-95',
    title: '점으로 도메인 분리',
    description: '점으로 구분된 도메인을 분리하세요.',
    difficulty: 'beginner',
    initialCode: `const domain = "www.example.com";

// 여기에 코드를 작성하세요

// 결과: ["www", "example", "com"]`,
    expectedOutput: '["www", "example", "com"]',
    testCases: [
      {
        id: 'array-95-1',
        description: '도메인이 올바르게 분리되어야 함',
        expectedResult: ['www', 'example', 'com'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-96',
    title: '슬래시로 경로 분리',
    description: '슬래시로 구분된 경로를 분리하세요.',
    difficulty: 'beginner',
    initialCode: `const path = "home/user/documents/file.txt";

// 여기에 코드를 작성하세요

// 결과: ["home", "user", "documents", "file.txt"]`,
    expectedOutput: '["home", "user", "documents", "file.txt"]',
    testCases: [
      {
        id: 'array-96-1',
        description: '경로가 올바르게 분리되어야 함',
        expectedResult: ['home', 'user', 'documents', 'file.txt'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-97',
    title: '빈 문자열로 분리',
    description: '빈 문자열을 구분자로 사용하여 각 문자로 분리하세요.',
    difficulty: 'beginner',
    initialCode: `const text = "Hello";

// 여기에 코드를 작성하세요

// 결과: ["H", "e", "l", "l", "o"]`,
    expectedOutput: '["H", "e", "l", "l", "o"]',
    testCases: [
      {
        id: 'array-97-1',
        description: '각 문자로 올바르게 분리되어야 함',
        expectedResult: ['H', 'e', 'l', 'l', 'o'],
      },
    ],
    createdAt: new Date().toISOString(),
  },

  // 중급 문제 (8-14)
  {
    id: 'array-98',
    title: 'limit 매개변수 사용',
    description: 'split의 limit 매개변수를 사용하여 분리 개수를 제한하세요.',
    difficulty: 'intermediate',
    initialCode: `const data = "a-b-c-d-e-f";

// 여기에 코드를 작성하세요 (최대 3개까지만 분리)

// 결과: ["a", "b", "c-d-e-f"]`,
    expectedOutput: '["a", "b", "c-d-e-f"]',
    testCases: [
      {
        id: 'array-98-1',
        description: 'limit를 사용하여 3개까지만 분리되어야 함',
        expectedResult: ['a', 'b', 'c-d-e-f'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-99',
    title: '여러 구분자로 분리',
    description: '정규식을 사용하여 여러 구분자로 문자열을 분리하세요.',
    difficulty: 'intermediate',
    initialCode: `const text = "apple,banana;orange:grape";

// 여기에 코드를 작성하세요 (쉼표, 세미콜론, 콜론 모두 구분자로 사용)

// 결과: ["apple", "banana", "orange", "grape"]`,
    expectedOutput: '["apple", "banana", "orange", "grape"]',
    testCases: [
      {
        id: 'array-99-1',
        description: '여러 구분자로 올바르게 분리되어야 함',
        expectedResult: ['apple', 'banana', 'orange', 'grape'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-100',
    title: '공백 제거하며 분리',
    description: '쉼표로 분리하고 각 요소의 앞뒤 공백을 제거하세요.',
    difficulty: 'intermediate',
    initialCode: `const items = "apple , banana , orange , grape ";

// 여기에 코드를 작성하세요

// 결과: ["apple", "banana", "orange", "grape"]`,
    expectedOutput: '["apple", "banana", "orange", "grape"]',
    testCases: [
      {
        id: 'array-100-1',
        description: '분리 후 공백이 제거되어야 함',
        expectedResult: ['apple', 'banana', 'orange', 'grape'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-101',
    title: 'URL 쿼리 파라미터 분리',
    description: 'URL의 쿼리 파라미터를 분리하여 객체로 만드세요.',
    difficulty: 'intermediate',
    initialCode: `const url = "page=1&size=10&sort=name";
const params = {};

// 여기에 코드를 작성하세요

console.log(params); // { page: "1", size: "10", sort: "name" }`,
    expectedOutput: '{ page: "1", size: "10", sort: "name" }',
    testCases: [
      {
        id: 'array-101-1',
        description: '쿼리 파라미터가 객체로 변환되어야 함',
        expectedResult: { page: '1', size: '10', sort: 'name' },
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-102',
    title: '파일 경로에서 확장자 분리',
    description: '파일 경로에서 이름과 확장자를 분리하세요.',
    difficulty: 'intermediate',
    initialCode: `const filePath = "documents/report.2024.final.pdf";

// 여기에 코드를 작성하세요 (마지막 점을 기준으로)

// 결과: { name: "documents/report.2024.final", extension: "pdf" }`,
    expectedOutput: '{ name: "documents/report.2024.final", extension: "pdf" }',
    testCases: [
      {
        id: 'array-102-1',
        description: '파일명과 확장자가 올바르게 분리되어야 함',
        expectedResult: {
          name: 'documents/report.2024.final',
          extension: 'pdf',
        },
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-103',
    title: 'CSV 데이터 파싱',
    description: 'CSV 형태의 데이터를 2차원 배열로 변환하세요.',
    difficulty: 'intermediate',
    initialCode: `const csvData = "name,age,city\\nJohn,25,Seoul\\nJane,30,Busan";

// 여기에 코드를 작성하세요

// 결과: [["name", "age", "city"], ["John", "25", "Seoul"], ["Jane", "30", "Busan"]]`,
    expectedOutput:
      '[["name", "age", "city"], ["John", "25", "Seoul"], ["Jane", "30", "Busan"]]',
    testCases: [
      {
        id: 'array-103-1',
        description: 'CSV가 2차원 배열로 변환되어야 함',
        expectedResult: [
          ['name', 'age', 'city'],
          ['John', '25', 'Seoul'],
          ['Jane', '30', 'Busan'],
        ],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-104',
    title: '태그 제거하며 분리',
    description: 'HTML 태그를 제거하고 텍스트만 분리하세요.',
    difficulty: 'intermediate',
    initialCode: `const html = "<p>Hello</p><div>World</div><span>JavaScript</span>";

// 여기에 코드를 작성하세요

// 결과: ["Hello", "World", "JavaScript"]`,
    expectedOutput: '["Hello", "World", "JavaScript"]',
    testCases: [
      {
        id: 'array-104-1',
        description: 'HTML 태그가 제거되고 텍스트만 추출되어야 함',
        expectedResult: ['Hello', 'World', 'JavaScript'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
];
