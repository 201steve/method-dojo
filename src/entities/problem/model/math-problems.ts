// src/entities/problem/model/math-problems.ts
import type { Problem } from '../types/type';

export const MATH_PROBLEMS: Problem[] = [
  // 초급 문제 (1-10)
  {
    id: 'math-1',
    title: 'Math.abs로 절댓값 구하기',
    description: '주어진 숫자들의 절댓값을 구하여 출력하세요.',
    difficulty: 'beginner',
    initialCode: `const numbers = [-5, 3, -10, 7, -2];

// 각 숫자의 절댓값을 출력하세요
`,
    expectedOutput: '5\n3\n10\n7\n2',
    testCases: [
      {
        id: 'math-1-1',
        description: '각 숫자의 절댓값이 출력되어야 함',
        expectedResult: [5, 3, 10, 7, 2],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'math-2',
    title: 'Math.sqrt로 제곱근 계산하기',
    description: '주어진 숫자의 제곱근을 소수점 둘째 자리까지 출력하세요.',
    difficulty: 'beginner',
    initialCode: `const number = 50;

// 여기에 코드를 작성하세요
`,
    expectedOutput: '7.07',
    testCases: [
      {
        id: 'math-2-1',
        description: '제곱근이 소수점 둘째 자리까지 출력되어야 함',
        expectedResult: ['7.07'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'math-3',
    title: 'Math.round로 반올림하기',
    description: '주어진 소수들을 반올림하여 정수로 만드세요.',
    difficulty: 'beginner',
    initialCode: `const numbers = [4.3, 4.7, 3.9, 2.1, 5.5];

// 각 숫자를 반올림하여 출력하세요
`,
    expectedOutput: '4\n5\n4\n2\n6',
    testCases: [
      {
        id: 'math-3-1',
        description: '각 숫자가 올바르게 반올림되어야 함',
        expectedResult: [4, 5, 4, 2, 6],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'math-4',
    title: 'Math.floor로 내림하기',
    description: '주어진 소수들을 내림하여 정수로 만드세요.',
    difficulty: 'beginner',
    initialCode: `const numbers = [4.3, 4.7, 3.9, 2.1, 5.5];

// 각 숫자를 내림하여 출력하세요
`,
    expectedOutput: '4\n4\n3\n2\n5',
    testCases: [
      {
        id: 'math-4-1',
        description: '각 숫자가 올바르게 내림되어야 함',
        expectedResult: [4, 4, 3, 2, 5],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'math-5',
    title: 'Math.ceil로 올림하기',
    description: '주어진 소수들을 올림하여 정수로 만드세요.',
    difficulty: 'beginner',
    initialCode: `const numbers = [4.3, 4.7, 3.1, 2.9, 5.0];

// 각 숫자를 올림하여 출력하세요
`,
    expectedOutput: '5\n5\n4\n3\n5',
    testCases: [
      {
        id: 'math-5-1',
        description: '각 숫자가 올바르게 올림되어야 함',
        expectedResult: [5, 5, 4, 3, 5],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'math-6',
    title: 'Math.pow로 거듭제곱 계산하기',
    description: '주어진 수의 거듭제곱을 계산하여 출력하세요.',
    difficulty: 'beginner',
    initialCode: `const base = 2;
const exponents = [1, 2, 3, 4, 5];

// 2의 각각의 거듭제곱을 출력하세요
`,
    expectedOutput: '2\n4\n8\n16\n32',
    testCases: [
      {
        id: 'math-6-1',
        description: '2의 거듭제곱이 올바르게 계산되어야 함',
        expectedResult: [2, 4, 8, 16, 32],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'math-7',
    title: 'Math.random으로 난수 생성하기',
    description: '1부터 10까지의 정수 난수를 5개 생성하여 출력하세요.',
    difficulty: 'beginner',
    initialCode: `// 1부터 10까지의 정수 난수를 5개 생성하세요
// Math.random() * 10 + 1을 사용하고 Math.floor로 정수로 만드세요

const randomNumbers = [];
`,
    expectedOutput: '난수 5개 (1~10 범위)',
    testCases: [
      {
        id: 'math-7-1',
        description: '1~10 범위의 난수 5개가 생성되어야 함',
        expectedResult: 'random numbers between 1-10',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'math-8',
    title: 'Math.max로 최댓값 구하기',
    description: 'Math.max를 사용하여 여러 숫자 중 최댓값을 구하세요.',
    difficulty: 'beginner',
    initialCode: `const a = 15, b = 23, c = 8, d = 31, e = 19;

// Math.max를 사용하여 최댓값을 구하세요
`,
    expectedOutput: '31',
    testCases: [
      {
        id: 'math-8-1',
        description: '최댓값 31이 출력되어야 함',
        expectedResult: [31],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'math-9',
    title: 'Math.min으로 최솟값 구하기',
    description: 'Math.min을 사용하여 여러 숫자 중 최솟값을 구하세요.',
    difficulty: 'beginner',
    initialCode: `const a = 15, b = 23, c = 8, d = 31, e = 19;

// Math.min을 사용하여 최솟값을 구하세요
`,
    expectedOutput: '8',
    testCases: [
      {
        id: 'math-9-1',
        description: '최솟값 8이 출력되어야 함',
        expectedResult: [8],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'math-10',
    title: 'parseInt로 정수 변환하기',
    description: '문자열이나 소수를 parseInt로 정수로 변환하세요.',
    difficulty: 'beginner',
    initialCode: `const values = ['25', '30.7', '42.9', '18', '7.3'];

// 각 값을 정수로 변환하여 출력하세요
`,
    expectedOutput: '25\n30\n42\n18\n7',
    testCases: [
      {
        id: 'math-10-1',
        description: '각 값이 정수로 변환되어야 함',
        expectedResult: [25, 30, 42, 18, 7],
      },
    ],
    createdAt: new Date().toISOString(),
  },

  // 중급 문제 (11-20)
  {
    id: 'math-11',
    title: 'Math.PI로 원의 넓이 계산하기',
    description:
      '반지름이 주어진 원의 넓이를 계산하여 소수점 둘째 자리까지 출력하세요.',
    difficulty: 'intermediate',
    initialCode: `const radius = 5;

// 원의 넓이 = π × r²
// 여기에 코드를 작성하세요
`,
    expectedOutput: '78.54',
    testCases: [
      {
        id: 'math-11-1',
        description: '원의 넓이가 소수점 둘째 자리까지 출력되어야 함',
        expectedResult: ['78.54'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'math-12',
    title: '반복문으로 팩토리얼 계산하기',
    description: '주어진 숫자의 팩토리얼을 계산하여 출력하세요.',
    difficulty: 'intermediate',
    initialCode: `const number = 6;

// 팩토리얼: 6! = 6 × 5 × 4 × 3 × 2 × 1
// 여기에 코드를 작성하세요
`,
    expectedOutput: '720',
    testCases: [
      {
        id: 'math-12-1',
        description: '6!의 결과가 출력되어야 함',
        expectedResult: [720],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'math-13',
    title: 'Math.sin과 Math.cos로 삼각함수 계산하기',
    description: '주어진 각도(라디안)의 사인과 코사인 값을 계산하세요.',
    difficulty: 'intermediate',
    initialCode: `const angle = Math.PI / 4; // 45도

// sin과 cos 값을 소수점 둘째 자리까지 출력하세요
`,
    expectedOutput: '0.71\n0.71',
    testCases: [
      {
        id: 'math-13-1',
        description: 'sin과 cos 값이 소수점 둘째 자리까지 출력되어야 함',
        expectedResult: [0.71, 0.71],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'math-14',
    title: 'Math.log로 자연로그 계산하기',
    description: '주어진 숫자들의 자연로그 값을 계산하여 출력하세요.',
    difficulty: 'intermediate',
    initialCode: `const numbers = [1, Math.E, 10, 100];

// 각 숫자의 자연로그를 소수점 둘째 자리까지 출력하세요
`,
    expectedOutput: '0.00\n1.00\n2.30\n4.61',
    testCases: [
      {
        id: 'math-14-1',
        description: '자연로그 값이 소수점 둘째 자리까지 출력되어야 함',
        expectedResult: [0.0, 1.0, 2.3, 4.61],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'math-15',
    title: '지수 표기법 숫자 처리하기',
    description:
      '지수 표기법으로 표현된 숫자를 일반 숫자로 변환하여 출력하세요.',
    difficulty: 'intermediate',
    initialCode: `const scientificNumbers = ['1.5e3', '2.5e-2', '3.7e4', '8.9e-1'];

// 각 지수 표기법 숫자를 일반 숫자로 변환하여 출력하세요
`,
    expectedOutput: '1500\n0.025\n37000\n0.89',
    testCases: [
      {
        id: 'math-15-1',
        description: '지수 표기법이 올바르게 변환되어야 함',
        expectedResult: [1500, 0.025, 37000, 0.89],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'math-16',
    title: 'Math.PI로 원주 계산하기',
    description: '반지름이 주어진 원의 원주를 계산하여 출력하세요.',
    difficulty: 'intermediate',
    initialCode: `const radius = 7;

// 원주 = 2 × π × r
// 소수점 둘째 자리까지 출력하세요
`,
    expectedOutput: '43.98',
    testCases: [
      {
        id: 'math-16-1',
        description: '원주가 소수점 둘째 자리까지 출력되어야 함',
        expectedResult: ['43.98'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'math-17',
    title: '각도를 라디안으로 변환하기',
    description: '도(degree) 단위의 각도를 라디안으로 변환하세요.',
    difficulty: 'intermediate',
    initialCode: `const degrees = [30, 45, 60, 90, 180];

// 각도를 라디안으로 변환하여 소수점 둘째 자리까지 출력하세요
// 라디안 = 도 × π / 180
`,
    expectedOutput: '0.52\n0.79\n1.05\n1.57\n3.14',
    testCases: [
      {
        id: 'math-17-1',
        description: '각도가 라디안으로 올바르게 변환되어야 함',
        expectedResult: [0.52, 0.79, 1.05, 1.57, 3.14],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'math-18',
    title: '조합(combination) 계산하기',
    description: 'n개 중 r개를 선택하는 조합의 수를 계산하세요.',
    difficulty: 'intermediate',
    initialCode: `const n = 5;
const r = 3;

// 조합 C(n,r) = n! / (r! × (n-r)!)
// C(5,3)을 계산하여 출력하세요
`,
    expectedOutput: '10',
    testCases: [
      {
        id: 'math-18-1',
        description: 'C(5,3) = 10이 출력되어야 함',
        expectedResult: [10],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'math-19',
    title: '순열(permutation) 계산하기',
    description: 'n개 중 r개를 순서대로 선택하는 순열의 수를 계산하세요.',
    difficulty: 'intermediate',
    initialCode: `const n = 5;
const r = 3;

// 순열 P(n,r) = n! / (n-r)!
// P(5,3)을 계산하여 출력하세요
`,
    expectedOutput: '60',
    testCases: [
      {
        id: 'math-19-1',
        description: 'P(5,3) = 60이 출력되어야 함',
        expectedResult: [60],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'math-20',
    title: '분수를 소수로 변환하기',
    description: '분자와 분모가 주어진 분수를 소수로 변환하여 출력하세요.',
    difficulty: 'intermediate',
    initialCode: `const fractions = [
  {numerator: 1, denominator: 2},
  {numerator: 3, denominator: 4},
  {numerator: 5, denominator: 8},
  {numerator: 7, denominator: 10}
];

// 각 분수를 소수로 변환하여 출력하세요
`,
    expectedOutput: '0.5\n0.75\n0.625\n0.7',
    testCases: [
      {
        id: 'math-20-1',
        description: '분수가 소수로 올바르게 변환되어야 함',
        expectedResult: [0.5, 0.75, 0.625, 0.7],
      },
    ],
    createdAt: new Date().toISOString(),
  },
];
