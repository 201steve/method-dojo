// src/entities/problem/model/string-problems.ts
import type { Problem } from '../types/type';

export const STRING_PROBLEMS: Problem[] = [
  // 초급 문제
  {
    id: 'string-1',
    title: 'length로 문자열 길이 구하기',
    description: '주어진 문자열의 길이를 콘솔에 출력하는 코드를 작성하세요.',
    difficulty: 'beginner',
    initialCode: `const message = 'Hello JavaScript';

// 여기에 코드를 작성하세요
`,
    expectedOutput: '16',
    testCases: [
      {
        id: 'string-1-1',
        description: '문자열 길이가 출력되어야 함',
        expectedResult: [16],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'string-2',
    title: 'toUpperCase와 toLowerCase로 대소문자 변환하기',
    description: '주어진 문자열을 대문자와 소문자로 각각 변환하여 출력하세요.',
    difficulty: 'beginner',
    initialCode: `const text = 'JavaScript Programming';

// 여기에 코드를 작성하세요
`,
    expectedOutput: 'JAVASCRIPT PROGRAMMING\njavascript programming',
    testCases: [
      {
        id: 'string-2-1',
        description: '대문자와 소문자로 변환된 문자열이 출력되어야 함',
        expectedResult: ['JAVASCRIPT PROGRAMMING', 'javascript programming'],
      },
    ],
    createdAt: new Date().toISOString(),
  },

  // 중급 문제
  {
    id: 'string-3',
    title: 'split과 join으로 문자열 분리 및 연결하기',
    description: '공백으로 분리된 단어들을 - 문자로 연결하여 출력하세요.',
    difficulty: 'intermediate',
    initialCode: `const sentence = 'Hello World JavaScript';

// 여기에 코드를 작성하세요
`,
    expectedOutput: 'Hello-World-JavaScript',
    testCases: [
      {
        id: 'string-3-1',
        description: '공백이 하이픈으로 대체된 문자열이 출력되어야 함',
        expectedResult: ['Hello-World-JavaScript'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'string-4',
    title: '반복문으로 특정 문자 개수 세기',
    description: '문자열에서 특정 문자의 개수를 세어 출력하세요.',
    difficulty: 'intermediate',
    initialCode: `const text = 'JavaScript is awesome';
const targetChar = 'a';

// targetChar가 text에 몇 개 있는지 세어 출력하세요
`,
    expectedOutput: '4',
    testCases: [
      {
        id: 'string-4-1',
        description: '문자 a의 개수가 출력되어야 함',
        expectedResult: [4],
      },
    ],
    createdAt: new Date().toISOString(),
  },
];
