import type { Problem, ProblemDifficulty } from '@entities/index';
import { useState, useEffect } from 'react';

const STORAGE_KEY = 'js-array-problems';

const DEFAULT_PROBLEMS: Problem[] = [
  // 초급 문제 (1-7)
  {
    id: '1',
    title: '배열 요소 출력하기',
    description: '다음 배열의 모든 요소를 콘솔에 출력하는 코드를 작성하세요.',
    difficulty: 'beginner',
    initialCode: `const fruits = ['apple', 'banana', 'orange'];

// 여기에 코드를 작성하세요
`,
    expectedOutput: 'apple\nbanana\norange',
    testCases: [
      {
        id: '1-1',
        description: '모든 요소가 출력되어야 함',
        expectedResult: ['apple', 'banana', 'orange'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: '배열 요소 대문자 변환',
    description: '다음 배열의 모든 요소를 대문자로 변환하여 콘솔에 출력하세요.',
    difficulty: 'beginner',
    initialCode: `const cities = ['seoul', 'busan', 'daegu'];

// 여기에 코드를 작성하세요
`,
    expectedOutput: 'SEOUL\nBUSAN\nDAEGU',
    testCases: [
      {
        id: '2-1',
        description: '모든 요소가 대문자로 출력되어야 함',
        expectedResult: ['SEOUL', 'BUSAN', 'DAEGU'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: '배열 인덱스와 값 출력',
    description: '배열의 각 요소와 인덱스를 "인덱스: 값" 형태로 출력하세요.',
    difficulty: 'beginner',
    initialCode: `const colors = ['red', 'green', 'blue'];

// 여기에 코드를 작성하세요
// 예상 출력: 0: red, 1: green, 2: blue
`,
    expectedOutput: '0: red\n1: green\n2: blue',
    testCases: [
      {
        id: '3-1',
        description: '인덱스와 값이 올바른 형태로 출력되어야 함',
        expectedResult: ['0: red', '1: green', '2: blue'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '4',
    title: '짝수 인덱스 요소 출력',
    description: '배열에서 짝수 인덱스(0, 2, 4...)에 있는 요소만 출력하세요.',
    difficulty: 'beginner',
    initialCode: `const numbers = [10, 20, 30, 40, 50, 60];

// 여기에 코드를 작성하세요
`,
    expectedOutput: '10\n30\n50',
    testCases: [
      {
        id: '4-1',
        description: '짝수 인덱스 요소만 출력되어야 함',
        expectedResult: [10, 30, 50],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '5',
    title: '상품명 앞에 접두사 추가',
    description: '배열의 각 요소 앞에 "상품: "을 붙여서 출력하세요.',
    difficulty: 'beginner',
    initialCode: `const items = ['연필', '지우개', '공책'];

// 여기에 코드를 작성하세요
`,
    expectedOutput: '상품: 연필\n상품: 지우개\n상품: 공책',
    testCases: [
      {
        id: '5-1',
        description: '모든 요소 앞에 "상품: "이 붙어야 함',
        expectedResult: ['상품: 연필', '상품: 지우개', '상품: 공책'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '6',
    title: 'forEach로 배열 합계 구하기',
    description: 'forEach를 사용하여 배열 요소들의 합계를 구하세요.',
    difficulty: 'beginner',
    initialCode: `const prices = [1000, 2000, 3000, 4000];
let total = 0;

// 여기에 코드를 작성하세요

console.log(total); // 10000이 출력되어야 함
`,
    expectedOutput: '10000',
    testCases: [
      {
        id: '6-1',
        description: '합계가 10000이 되어야 함',
        expectedResult: 10000,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '7',
    title: 'forEach로 배열 복사',
    description:
      'forEach를 사용하여 source 배열의 모든 요소를 target 배열에 복사하세요.',
    difficulty: 'beginner',
    initialCode: `const source = ['a', 'b', 'c'];
const target = [];

// 여기에 코드를 작성하세요

console.log(target); // ['a', 'b', 'c']가 출력되어야 함
`,
    expectedOutput: "['a', 'b', 'c']",
    testCases: [
      {
        id: '7-1',
        description: 'target 배열이 source와 같아야 함',
        expectedResult: ['a', 'b', 'c'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  // 중급 문제 (8-14)
  {
    id: '8',
    title: '객체 배열에서 특정 속성 출력',
    description: '객체 배열에서 각 사용자의 이름만 출력하세요.',
    difficulty: 'intermediate',
    initialCode: `const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 }
];

// 여기에 코드를 작성하세요
`,
    expectedOutput: 'Alice\nBob\nCharlie',
    testCases: [
      {
        id: '8-1',
        description: '모든 사용자의 이름이 출력되어야 함',
        expectedResult: ['Alice', 'Bob', 'Charlie'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '9',
    title: '조건부 카운팅',
    description: '80점 이상인 점수의 개수를 세는 코드를 작성하세요.',
    difficulty: 'intermediate',
    initialCode: `const scores = [85, 92, 78, 96, 87, 73, 94];
let passCount = 0;

// 여기에 코드를 작성하세요

console.log(passCount); // 5가 출력되어야 함
`,
    expectedOutput: '5',
    testCases: [
      {
        id: '9-1',
        description: '80점 이상인 점수의 개수가 5개여야 함',
        expectedResult: 5,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '10',
    title: '2차원 배열 순회',
    description: '2차원 배열의 모든 요소를 출력하세요.',
    difficulty: 'intermediate',
    initialCode: `const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// 여기에 코드를 작성하세요
// 예상 출력: 1, 2, 3, 4, 5, 6, 7, 8, 9
`,
    expectedOutput: '1\n2\n3\n4\n5\n6\n7\n8\n9',
    testCases: [
      {
        id: '10-1',
        description: '모든 요소가 순서대로 출력되어야 함',
        expectedResult: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '11',
    title: 'Map 생성하기',
    description: '배열의 각 요소를 키로, 인덱스를 값으로 하는 Map을 만드세요.',
    difficulty: 'intermediate',
    initialCode: `const products = ['laptop', 'mouse', 'keyboard'];
const productMap = new Map();

// 여기에 코드를 작성하세요

console.log(productMap.get('laptop')); // 0이 출력되어야 함
`,
    expectedOutput: '0',
    testCases: [
      {
        id: '11-1',
        description: 'Map에 올바른 키-값 쌍이 저장되어야 함',
        expectedResult: new Map([
          ['laptop', 0],
          ['mouse', 1],
          ['keyboard', 2],
        ]),
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '12',
    title: '배열 요소 분리',
    description: '양수와 음수를 각각 다른 배열에 분리하세요.',
    difficulty: 'intermediate',
    initialCode: `const mixedNumbers = [1, -2, 3, -4, 5, -6, 7];
const positives = [];
const negatives = [];

// 여기에 코드를 작성하세요

console.log(positives); // [1, 3, 5, 7]
console.log(negatives); // [-2, -4, -6]
`,
    expectedOutput: '[1, 3, 5, 7]\n[-2, -4, -6]',
    testCases: [
      {
        id: '12-1',
        description: '양수와 음수가 올바르게 분리되어야 함',
        expectedResult: { positives: [1, 3, 5, 7], negatives: [-2, -4, -6] },
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '13',
    title: 'JSON 파싱 에러 처리',
    description: '유효한 JSON 문자열만 파싱하여 results 배열에 저장하세요.',
    difficulty: 'intermediate',
    initialCode: `const jsonStrings = ['{"name": "John"}', 'invalid json', '{"age": 30}', 'also invalid'];
const results = [];

// 여기에 코드를 작성하세요 (try-catch 사용)

console.log(results); // [{name: "John"}, {age: 30}]
`,
    expectedOutput: '[{name: "John"}, {age: 30}]',
    testCases: [
      {
        id: '13-1',
        description: '유효한 JSON만 파싱되어야 함',
        expectedResult: [{ name: 'John' }, { age: 30 }],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '14',
    title: '복합 통계 계산',
    description: '각 작업의 완료/미완료 개수와 우선순위별 개수를 계산하세요.',
    difficulty: 'intermediate',
    initialCode: `const tasks = [
  { id: '1', completed: false, priority: 'high' },
  { id: '2', completed: true, priority: 'low' },
  { id: '3', completed: false, priority: 'high' },
  { id: '4', completed: true, priority: 'medium' }
];

const stats = { 
  completed: 0, 
  pending: 0, 
  high: 0, 
  medium: 0, 
  low: 0 
};

// 여기에 코드를 작성하세요

console.log(stats); 
// { completed: 2, pending: 2, high: 2, medium: 1, low: 1 }
`,
    expectedOutput: '{ completed: 2, pending: 2, high: 2, medium: 1, low: 1 }',
    testCases: [
      {
        id: '14-1',
        description: '모든 통계가 올바르게 계산되어야 함',
        expectedResult: {
          completed: 2,
          pending: 2,
          high: 2,
          medium: 1,
          low: 1,
        },
      },
    ],
    createdAt: new Date().toISOString(),
  },
  // 고급 문제 (15-20)
  {
    id: '15',
    title: '데이터 그룹화',
    description: '카테고리별로 아이템을 그룹화하는 객체를 만드세요.',
    difficulty: 'advanced',
    initialCode: `const items = [
  { name: 'apple', type: 'fruit' },
  { name: 'carrot', type: 'vegetable' },
  { name: 'banana', type: 'fruit' },
  { name: 'broccoli', type: 'vegetable' }
];

const grouped = {};

// 여기에 코드를 작성하세요

console.log(grouped);
// { fruit: ['apple', 'banana'], vegetable: ['carrot', 'broccoli'] }
`,
    expectedOutput:
      '{ fruit: ["apple", "banana"], vegetable: ["carrot", "broccoli"] }',
    testCases: [
      {
        id: '15-1',
        description: '타입별로 올바르게 그룹화되어야 함',
        expectedResult: {
          fruit: ['apple', 'banana'],
          vegetable: ['carrot', 'broccoli'],
        },
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '16',
    title: 'WeakMap을 사용한 ID 할당',
    description: '각 객체에 고유한 ID를 할당하는 WeakMap을 만드세요.',
    difficulty: 'advanced',
    initialCode: `const objects = [{}, {}, {}];
const idMap = new WeakMap();
let currentId = 1;

// 여기에 코드를 작성하세요

console.log(idMap.get(objects[0])); // 1
console.log(idMap.get(objects[1])); // 2
`,
    expectedOutput: '1\n2',
    testCases: [
      {
        id: '16-1',
        description: '각 객체에 고유한 ID가 할당되어야 함',
        expectedResult: [1, 2, 3],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '17',
    title: 'Set을 사용한 중복 제거',
    description: '중복을 제거하면서 Set에 요소들을 추가하세요.',
    difficulty: 'advanced',
    initialCode: `const duplicates = ['a', 'b', 'a', 'c', 'b', 'd'];
const uniqueSet = new Set();

// 여기에 코드를 작성하세요

console.log([...uniqueSet]); // ['a', 'b', 'c', 'd']
`,
    expectedOutput: "['a', 'b', 'c', 'd']",
    testCases: [
      {
        id: '17-1',
        description: '중복이 제거된 고유한 요소들만 있어야 함',
        expectedResult: ['a', 'b', 'c', 'd'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '18',
    title: '제너레이터를 사용한 순차 번호 매핑',
    description: '각 요소에 순차적으로 증가하는 번호를 매핑하세요.',
    difficulty: 'advanced',
    initialCode: `function* numberGenerator() {
  let i = 1;
  while (true) yield i++;
}

const items = ['first', 'second', 'third'];
const gen = numberGenerator();
const numbered = [];

// 여기에 코드를 작성하세요

console.log(numbered); // [{item: 'first', number: 1}, {item: 'second', number: 2}, ...]
`,
    expectedOutput:
      '[{item: "first", number: 1}, {item: "second", number: 2}, {item: "third", number: 3}]',
    testCases: [
      {
        id: '18-1',
        description: '각 요소에 순차적인 번호가 매핑되어야 함',
        expectedResult: [
          { item: 'first', number: 1 },
          { item: 'second', number: 2 },
          { item: 'third', number: 3 },
        ],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '19',
    title: '조건부 분기 처리',
    description: '조건부로 다른 함수를 실행하는 코드를 작성하세요.',
    difficulty: 'advanced',
    initialCode: `const actions = [
  { type: 'LOG', message: 'Hello' },
  { type: 'WARN', message: 'Warning!' },
  { type: 'ERROR', message: 'Error occurred' },
  { type: 'LOG', message: 'Goodbye' }
];

const logs = [];
const warnings = [];
const errors = [];

// 여기에 코드를 작성하세요

console.log(logs); // ['Hello', 'Goodbye']
console.log(warnings); // ['Warning!']
console.log(errors); // ['Error occurred']
`,
    expectedOutput: "['Hello', 'Goodbye']\n['Warning!']\n['Error occurred']",
    testCases: [
      {
        id: '19-1',
        description: '타입별로 올바르게 분류되어야 함',
        expectedResult: {
          logs: ['Hello', 'Goodbye'],
          warnings: ['Warning!'],
          errors: ['Error occurred'],
        },
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '20',
    title: '복잡한 데이터 구조 변환',
    description: '복잡한 데이터 구조를 변환하여 요약 통계를 만드세요.',
    difficulty: 'advanced',
    initialCode: `const employees = [
  { 
    name: 'John', 
    department: 'IT', 
    skills: ['JavaScript', 'Python'],
    projects: [{ name: 'Project A', hours: 40 }, { name: 'Project B', hours: 20 }]
  },
  { 
    name: 'Jane', 
    department: 'Design', 
    skills: ['Photoshop', 'Figma'],
    projects: [{ name: 'Project C', hours: 60 }]
  }
];

const summary = {
  totalEmployees: 0,
  departmentCount: {},
  skillCount: {},
  totalProjectHours: 0
};

// 여기에 코드를 작성하세요

console.log(summary);
// { 
//   totalEmployees: 2, 
//   departmentCount: {IT: 1, Design: 1}, 
//   skillCount: {JavaScript: 1, Python: 1, Photoshop: 1, Figma: 1},
//   totalProjectHours: 120 
// }
`,
    expectedOutput:
      '{ totalEmployees: 2, departmentCount: {IT: 1, Design: 1}, skillCount: {JavaScript: 1, Python: 1, Photoshop: 1, Figma: 1}, totalProjectHours: 120 }',
    testCases: [
      {
        id: '20-1',
        description: '모든 요약 통계가 올바르게 계산되어야 함',
        expectedResult: {
          totalEmployees: 2,
          departmentCount: { IT: 1, Design: 1 },
          skillCount: { JavaScript: 1, Python: 1, Photoshop: 1, Figma: 1 },
          totalProjectHours: 120,
        },
      },
    ],
    createdAt: new Date().toISOString(),
  },
];

export function useProblems() {
  const [problems, setProblems] = useState<Problem[]>([]);

  useEffect(() => {
    // 개발 모드에서는 항상 DEFAULT_PROBLEMS 사용 (localStorage 무시)
    if (import.meta.env.DEV) {
      setProblems(DEFAULT_PROBLEMS);
      console.log('개발 모드: 기본 문제 데이터 로드됨');
      return;
    }

    // 프로덕션에서는 localStorage 사용
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setProblems(JSON.parse(stored));
    } else {
      setProblems(DEFAULT_PROBLEMS);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_PROBLEMS));
    }
  }, []);

  const saveProblem = (problem: Problem) => {
    const updatedProblems = [...problems, problem];
    setProblems(updatedProblems);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProblems));
  };

  const updateProblem = (id: string, updatedProblem: Problem) => {
    const updatedProblems = problems.map((p) =>
      p.id === id ? updatedProblem : p
    );
    setProblems(updatedProblems);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProblems));
  };

  const deleteProblem = (id: string) => {
    const updatedProblems = problems.filter((p) => p.id !== id);
    setProblems(updatedProblems);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProblems));
  };

  const getProblemsByDifficulty = (difficulty: ProblemDifficulty) => {
    return problems.filter((p) => p.difficulty === difficulty);
  };

  const getProblemById = (id: string) => {
    return problems.find((p) => p.id === id);
  };

  return {
    problems,
    saveProblem,
    updateProblem,
    deleteProblem,
    getProblemsByDifficulty,
    getProblemById,
  };
}
