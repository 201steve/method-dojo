// src/entities/problem/model/number-problems.ts
import type { Problem } from '../types/type';

export const NUMBER_PROBLEMS: Problem[] = [
  // 초급 문제 (1-10)
  {
    id: 'number-1',
    title: '반복문으로 숫자 배열의 합계 구하기',
    description: '주어진 숫자 배열의 모든 요소의 합을 구하여 출력하세요.',
    difficulty: 'beginner',
    initialCode: `const numbers = [1, 2, 3, 4, 5];

// 여기에 코드를 작성하세요
`,
    expectedOutput: '15',
    testCases: [
      {
        id: 'number-1-1',
        description: '배열 요소들의 합이 출력되어야 함',
        expectedResult: [15],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'number-2',
    title: '조건문과 반복문으로 짝수 찾기',
    description: '주어진 숫자 배열에서 짝수만 찾아서 출력하세요.',
    difficulty: 'beginner',
    initialCode: `const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 여기에 코드를 작성하세요
`,
    expectedOutput: '2\n4\n6\n8\n10',
    testCases: [
      {
        id: 'number-2-1',
        description: '짝수들이 출력되어야 함',
        expectedResult: [2, 4, 6, 8, 10],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'number-3',
    title: '조건문과 반복문으로 홀수 찾기',
    description: '주어진 숫자 배열에서 홀수만 찾아서 출력하세요.',
    difficulty: 'beginner',
    initialCode: `const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 여기에 코드를 작성하세요
`,
    expectedOutput: '1\n3\n5\n7\n9',
    testCases: [
      {
        id: 'number-3-1',
        description: '홀수들이 출력되어야 함',
        expectedResult: [1, 3, 5, 7, 9],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'number-4',
    title: '반복문으로 배열에서 최댓값 찾기',
    description: '숫자 배열에서 가장 큰 값을 찾아 출력하세요.',
    difficulty: 'beginner',
    initialCode: `const numbers = [45, 12, 78, 23, 67, 89, 34];

// 여기에 코드를 작성하세요
`,
    expectedOutput: '89',
    testCases: [
      {
        id: 'number-4-1',
        description: '최댓값이 출력되어야 함',
        expectedResult: [89],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'number-5',
    title: '반복문으로 배열에서 최솟값 찾기',
    description: '숫자 배열에서 가장 작은 값을 찾아 출력하세요.',
    difficulty: 'beginner',
    initialCode: `const numbers = [45, 12, 78, 23, 67, 89, 34];

// 여기에 코드를 작성하세요
`,
    expectedOutput: '12',
    testCases: [
      {
        id: 'number-5-1',
        description: '최솟값이 출력되어야 함',
        expectedResult: [12],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'number-6',
    title: '조건문으로 양수만 골라내기',
    description: '주어진 숫자 배열에서 양수만 골라내어 출력하세요.',
    difficulty: 'beginner',
    initialCode: `const numbers = [-5, 3, -2, 8, 0, -1, 7];

// 여기에 코드를 작성하세요
`,
    expectedOutput: '3\n8\n7',
    testCases: [
      {
        id: 'number-6-1',
        description: '양수들이 출력되어야 함',
        expectedResult: [3, 8, 7],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'number-7',
    title: '조건문으로 음수만 골라내기',
    description: '주어진 숫자 배열에서 음수만 골라내어 출력하세요.',
    difficulty: 'beginner',
    initialCode: `const numbers = [-5, 3, -2, 8, 0, -1, 7];

// 여기에 코드를 작성하세요
`,
    expectedOutput: '-5\n-2\n-1',
    testCases: [
      {
        id: 'number-7-1',
        description: '음수들이 출력되어야 함',
        expectedResult: [-5, -2, -1],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'number-8',
    title: '나머지 연산자로 5의 배수 찾기',
    description: '주어진 숫자 배열에서 5의 배수만 찾아서 출력하세요.',
    difficulty: 'beginner',
    initialCode: `const numbers = [3, 10, 7, 15, 22, 25, 8, 30];

// 여기에 코드를 작성하세요
`,
    expectedOutput: '10\n15\n25\n30',
    testCases: [
      {
        id: 'number-8-1',
        description: '5의 배수들이 출력되어야 함',
        expectedResult: [10, 15, 25, 30],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'number-9',
    title: '조건문으로 두 자릿수 찾기',
    description: '주어진 숫자 배열에서 두 자릿수(10~99)만 찾아서 출력하세요.',
    difficulty: 'beginner',
    initialCode: `const numbers = [5, 23, 7, 156, 89, 3, 45, 234];

// 여기에 코드를 작성하세요
`,
    expectedOutput: '23\n89\n45',
    testCases: [
      {
        id: 'number-9-1',
        description: '두 자릿수들이 출력되어야 함',
        expectedResult: [23, 89, 45],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'number-10',
    title: 'length 속성으로 배열 요소 개수 세기',
    description: '숫자 배열의 요소 개수를 세어 출력하세요.',
    difficulty: 'beginner',
    initialCode: `const numbers = [12, 45, 67, 23, 89, 34, 78];

// 여기에 코드를 작성하세요
`,
    expectedOutput: '7',
    testCases: [
      {
        id: 'number-10-1',
        description: '배열 요소 개수가 출력되어야 함',
        expectedResult: [7],
      },
    ],
    createdAt: new Date().toISOString(),
  },

  // 중급 문제 (11-20)
  {
    id: 'number-11',
    title: 'Math.max와 Math.min으로 최댓값과 최솟값 찾기',
    description: '숫자 배열에서 최댓값과 최솟값을 찾아 출력하세요.',
    difficulty: 'intermediate',
    initialCode: `const numbers = [45, 12, 78, 23, 67, 89, 34];

// 최댓값과 최솟값을 각각 출력하세요
`,
    expectedOutput: '89\n12',
    testCases: [
      {
        id: 'number-11-1',
        description: '최댓값과 최솟값이 출력되어야 함',
        expectedResult: [89, 12],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'number-12',
    title: '배열과 toFixed로 평균값 계산하기',
    description:
      '숫자 배열의 평균값을 계산하여 소수점 둘째 자리까지 출력하세요.',
    difficulty: 'intermediate',
    initialCode: `const scores = [85, 92, 78, 96, 88];

// 여기에 코드를 작성하세요
`,
    expectedOutput: '87.80',
    testCases: [
      {
        id: 'number-12-1',
        description: '평균값이 소수점 둘째 자리까지 출력되어야 함',
        expectedResult: ['87.80'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'number-13',
    title: '배열 정렬로 중간값(median) 구하기',
    description: '숫자 배열의 중간값을 구하여 출력하세요.',
    difficulty: 'intermediate',
    initialCode: `const numbers = [12, 45, 23, 67, 34];

// 배열을 정렬한 후 중간값을 구하세요
`,
    expectedOutput: '34',
    testCases: [
      {
        id: 'number-13-1',
        description: '중간값이 출력되어야 함',
        expectedResult: [34],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'number-14',
    title: '반복문으로 피보나치 수열 생성하기',
    description: 'n번째까지의 피보나치 수열을 생성하여 출력하세요.',
    difficulty: 'intermediate',
    initialCode: `const n = 7;

// 7번째까지의 피보나치 수열을 생성하세요
// 0, 1, 1, 2, 3, 5, 8
`,
    expectedOutput: '0, 1, 1, 2, 3, 5, 8',
    testCases: [
      {
        id: 'number-14-1',
        description: '피보나치 수열이 올바르게 생성되어야 함',
        expectedResult: [0, 1, 1, 2, 3, 5, 8],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'number-15',
    title: '반복문으로 소수 판별하기',
    description: '주어진 숫자가 소수인지 판별하여 결과를 출력하세요.',
    difficulty: 'intermediate',
    initialCode: `const number = 17;

// 소수 판별 로직을 작성하세요
`,
    expectedOutput: 'true',
    testCases: [
      {
        id: 'number-15-1',
        description: '17은 소수이므로 true가 출력되어야 함',
        expectedResult: [true],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'number-16',
    title: '유클리드 호제법으로 최대공약수 구하기',
    description: '두 숫자의 최대공약수를 구하여 출력하세요.',
    difficulty: 'intermediate',
    initialCode: `const a = 48;
const b = 18;

// 유클리드 호제법을 사용하여 최대공약수를 구하세요
`,
    expectedOutput: '6',
    testCases: [
      {
        id: 'number-16-1',
        description: '48과 18의 최대공약수 6이 출력되어야 함',
        expectedResult: [6],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'number-17',
    title: '최대공약수로 최소공배수 구하기',
    description: '두 숫자의 최소공배수를 구하여 출력하세요.',
    difficulty: 'intermediate',
    initialCode: `const a = 12;
const b = 8;

// 최소공배수 = (a × b) / 최대공약수
`,
    expectedOutput: '24',
    testCases: [
      {
        id: 'number-17-1',
        description: '12와 8의 최소공배수 24가 출력되어야 함',
        expectedResult: [24],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'number-18',
    title: '정렬로 배열에서 두 번째로 큰 수 찾기',
    description: '숫자 배열에서 두 번째로 큰 수를 찾아 출력하세요.',
    difficulty: 'intermediate',
    initialCode: `const numbers = [45, 89, 23, 67, 34, 78];

// 두 번째로 큰 수를 찾으세요
`,
    expectedOutput: '78',
    testCases: [
      {
        id: 'number-18-1',
        description: '두 번째로 큰 수가 출력되어야 함',
        expectedResult: [78],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'number-19',
    title: '조건문으로 범위 내 숫자 개수 세기',
    description: '주어진 범위(10~50) 내에 있는 숫자의 개수를 세어 출력하세요.',
    difficulty: 'intermediate',
    initialCode: `const numbers = [5, 25, 67, 12, 89, 34, 3, 45, 78];

// 10 이상 50 이하 숫자의 개수를 세어보세요
`,
    expectedOutput: '4',
    testCases: [
      {
        id: 'number-19-1',
        description: '범위 내 숫자 개수가 출력되어야 함',
        expectedResult: [4],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'number-20',
    title: '수학 공식으로 표준편차 계산하기',
    description:
      '숫자 배열의 표준편차를 계산하여 소수점 둘째 자리까지 출력하세요.',
    difficulty: 'intermediate',
    initialCode: `const numbers = [10, 12, 14, 16, 18];

// 표준편차 = √(Σ(xi - 평균)² / n)
`,
    expectedOutput: '2.83',
    testCases: [
      {
        id: 'number-20-1',
        description: '표준편차가 소수점 둘째 자리까지 출력되어야 함',
        expectedResult: ['2.83'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
];
