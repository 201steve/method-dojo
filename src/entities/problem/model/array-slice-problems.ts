// src/entities/problem/model/array-slice-problems.ts
import type { Problem } from '../types/type';

export const ARRAY_SLICE_PROBLEMS: Problem[] = [
  // 초급 문제 (1-7)
  {
    id: 'array-156',
    title: '배열 앞부분 추출',
    description: 'slice를 사용하여 배열의 처음 3개 요소를 추출하세요.',
    difficulty: 'beginner',
    initialCode: `const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// 여기에 코드를 작성하세요

// 결과: ['apple', 'banana', 'orange']`,
    expectedOutput: "['apple', 'banana', 'orange']",
    testCases: [
      {
        id: 'array-156-1',
        description: '처음 3개 요소가 추출되어야 함',
        expectedResult: ['apple', 'banana', 'orange'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-157',
    title: '배열 뒷부분 추출',
    description: 'slice를 사용하여 배열의 마지막 2개 요소를 추출하세요.',
    difficulty: 'beginner',
    initialCode: `const numbers = [1, 2, 3, 4, 5, 6, 7];

// 여기에 코드를 작성하세요

// 결과: [6, 7]`,
    expectedOutput: '[6, 7]',
    testCases: [
      {
        id: 'array-157-1',
        description: '마지막 2개 요소가 추출되어야 함',
        expectedResult: [6, 7],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-158',
    title: '배열 중간 부분 추출',
    description: 'slice를 사용하여 배열의 중간 부분을 추출하세요.',
    difficulty: 'beginner',
    initialCode: `const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

// 여기에 코드를 작성하세요 (인덱스 1부터 4까지)

// 결과: ['green', 'blue', 'yellow']`,
    expectedOutput: "['green', 'blue', 'yellow']",
    testCases: [
      {
        id: 'array-158-1',
        description: '중간 부분이 올바르게 추출되어야 함',
        expectedResult: ['green', 'blue', 'yellow'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-159',
    title: '음수 인덱스로 추출',
    description: 'slice에서 음수 인덱스를 사용하여 요소를 추출하세요.',
    difficulty: 'beginner',
    initialCode: `const letters = ['a', 'b', 'c', 'd', 'e', 'f'];

// 여기에 코드를 작성하세요 (마지막에서 3번째부터 끝까지)

// 결과: ['d', 'e', 'f']`,
    expectedOutput: "['d', 'e', 'f']",
    testCases: [
      {
        id: 'array-159-1',
        description: '음수 인덱스로 올바르게 추출되어야 함',
        expectedResult: ['d', 'e', 'f'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-160',
    title: '배열 복사본 만들기',
    description: 'slice를 사용하여 전체 배열의 복사본을 만드세요.',
    difficulty: 'beginner',
    initialCode: `const original = [1, 2, 3, 4, 5];

// 여기에 코드를 작성하세요

console.log(copy !== original); // true (다른 참조)`,
    expectedOutput: 'true',
    testCases: [
      {
        id: 'array-160-1',
        description: '새로운 배열 참조가 생성되어야 함',
        expectedResult: true,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-161',
    title: '홀수 인덱스 요소들 추출',
    description: 'slice를 여러 번 사용하여 홀수 인덱스의 요소들을 추출하세요.',
    difficulty: 'beginner',
    initialCode: `const data = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const result = [];

// 여기에 코드를 작성하세요 (홀수 인덱스: 1, 3, 5, 7)

// 결과: ['b', 'd', 'f', 'h']`,
    expectedOutput: "['b', 'd', 'f', 'h']",
    testCases: [
      {
        id: 'array-161-1',
        description: '홀수 인덱스 요소들이 추출되어야 함',
        expectedResult: ['b', 'd', 'f', 'h'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-162',
    title: '빈 배열 처리',
    description: 'slice를 빈 배열에 적용했을 때의 결과를 확인하세요.',
    difficulty: 'beginner',
    initialCode: `const empty = [];

// 여기에 코드를 작성하세요

// 결과: []`,
    expectedOutput: '[]',
    testCases: [
      {
        id: 'array-162-1',
        description: '빈 배열을 slice해도 빈 배열이어야 함',
        expectedResult: [],
      },
    ],
    createdAt: new Date().toISOString(),
  },

  // 중급 문제 (8-14)
  {
    id: 'array-163',
    title: '조건부 구간 추출',
    description: '조건에 따라 다른 구간을 slice로 추출하세요.',
    difficulty: 'intermediate',
    initialCode: `const scores = [85, 92, 78, 96, 87, 73, 94, 89];
const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;

// 여기에 코드를 작성하세요 (평균보다 높으면 앞반부, 낮으면 뒷반부)

console.log(result.length); // 4`,
    expectedOutput: '4',
    testCases: [
      {
        id: 'array-163-1',
        description: '조건에 따라 올바른 구간이 추출되어야 함',
        expectedResult: 4,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-164',
    title: '페이지네이션 구현',
    description: 'slice를 사용하여 페이지네이션을 구현하세요.',
    difficulty: 'intermediate',
    initialCode: `const items = Array.from({length: 50}, (_, i) => \`item\${i + 1}\`);
const pageSize = 10;
const currentPage = 3;

function getPage(items, page, size) {
  // 여기에 코드를 작성하세요
}

const pageItems = getPage(items, currentPage, pageSize);
// 결과: ['item21', 'item22', ..., 'item30']`,
    expectedOutput: "['item21', 'item22', ..., 'item30']",
    testCases: [
      {
        id: 'array-164-1',
        description: '3페이지의 아이템들이 올바르게 반환되어야 함',
        expectedResult: [
          'item21',
          'item22',
          'item23',
          'item24',
          'item25',
          'item26',
          'item27',
          'item28',
          'item29',
          'item30',
        ],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-165',
    title: '슬라이딩 윈도우',
    description: 'slice를 사용하여 슬라이딩 윈도우를 구현하세요.',
    difficulty: 'intermediate',
    initialCode: `const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const windowSize = 3;

function slidingWindow(arr, size) {
  // 여기에 코드를 작성하세요
}

const windows = slidingWindow(numbers, windowSize);
// 결과: [[1,2,3], [2,3,4], [3,4,5], ...]`,
    expectedOutput: '[[1,2,3], [2,3,4], [3,4,5], ...]',
    testCases: [
      {
        id: 'array-165-1',
        description: '슬라이딩 윈도우가 올바르게 생성되어야 함',
        expectedResult: [
          [1, 2, 3],
          [2, 3, 4],
          [3, 4, 5],
          [4, 5, 6],
          [5, 6, 7],
          [6, 7, 8],
          [7, 8, 9],
          [8, 9, 10],
        ],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-166',
    title: '배열 분할',
    description: 'slice를 사용하여 배열을 지정된 크기로 분할하세요.',
    difficulty: 'intermediate',
    initialCode: `const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const chunkSize = 4;

function chunk(arr, size) {
  // 여기에 코드를 작성하세요
}

const chunks = chunk(data, chunkSize);
// 결과: [[1,2,3,4], [5,6,7,8], [9,10,11,12]]`,
    expectedOutput: '[[1,2,3,4], [5,6,7,8], [9,10,11,12]]',
    testCases: [
      {
        id: 'array-166-1',
        description: '배열이 지정된 크기로 분할되어야 함',
        expectedResult: [
          [1, 2, 3, 4],
          [5, 6, 7, 8],
          [9, 10, 11, 12],
        ],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-167',
    title: '범위별 데이터 필터링',
    description: '여러 범위의 데이터를 slice로 추출하여 합치세요.',
    difficulty: 'intermediate',
    initialCode: `const timeline = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

// 여기에 코드를 작성하세요 (봄: 2-4월, 가을: 8-10월)

const seasons = [...spring, ...autumn];
// 결과: ['mar', 'apr', 'may', 'sep', 'oct', 'nov']`,
    expectedOutput: "['mar', 'apr', 'may', 'sep', 'oct', 'nov']",
    testCases: [
      {
        id: 'array-167-1',
        description: '봄과 가을 월들이 올바르게 추출되어야 함',
        expectedResult: ['mar', 'apr', 'may', 'sep', 'oct', 'nov'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-168',
    title: '동적 구간 추출',
    description: '동적으로 계산된 인덱스로 구간을 추출하세요.',
    difficulty: 'intermediate',
    initialCode: `const values = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const target = 50;

function extractAroundTarget(arr, target) {
  // 여기에 코드를 작성하세요 (target 앞뒤로 2개씩)
}

const result = extractAroundTarget(values, target);
// 결과: [30, 40, 50, 60, 70]`,
    expectedOutput: '[30, 40, 50, 60, 70]',
    testCases: [
      {
        id: 'array-168-1',
        description: 'target 주변 값들이 올바르게 추출되어야 함',
        expectedResult: [30, 40, 50, 60, 70],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'array-169',
    title: '배열 교집합 구하기',
    description: 'slice와 다른 메서드를 결합하여 배열 교집합을 구하세요.',
    difficulty: 'intermediate',
    initialCode: `const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [3, 4, 5, 6, 7, 8, 9];

function intersection(a, b) {
  // 여기에 코드를 작성하세요
}

const common = intersection(arr1, arr2);
// 결과: [3, 4, 5, 6, 7]`,
    expectedOutput: '[3, 4, 5, 6, 7]',
    testCases: [
      {
        id: 'array-169-1',
        description: '교집합이 올바르게 계산되어야 함',
        expectedResult: [3, 4, 5, 6, 7],
      },
    ],
    createdAt: new Date().toISOString(),
  },
];
