// src/entities/problem/model/object-problems.ts
import type { Problem } from '../types/type';

export const OBJECT_PROBLEMS: Problem[] = [
  // Basic 기본 객체 조작 (object-1~30) - 초급 10개, 중급 10개, 고급 10개
  // 초급 (1-10)
  {
    id: 'object-1',
    title: '점 표기법과 대괄호 표기법으로 객체 속성 접근하기',
    description: '점 표기법과 대괄호 표기법으로 객체의 속성에 접근하세요.',
    difficulty: 'beginner',
    initialCode: `const person = {
  name: 'Alice',
  age: 25,
  city: 'Seoul'
};

// 여기에 코드를 작성하세요 (name, age, city 순서로 출력)

// 결과: Alice, 25, Seoul`,
    expectedOutput: 'Alice, 25, Seoul',
    testCases: [
      {
        id: 'object-1-1',
        description: '모든 속성 값이 순서대로 출력되어야 함',
        expectedResult: ['Alice', 25, 'Seoul'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-2',
    title: '객체에 새로운 속성 추가하기',
    description: '기존 객체에 새로운 속성을 추가하세요.',
    difficulty: 'beginner',
    initialCode: `const car = {
  brand: 'Toyota',
  year: 2020
};

// color 속성을 'red'로 추가하세요

console.log(car.color); // red`,
    expectedOutput: 'red',
    testCases: [
      {
        id: 'object-2-1',
        description: 'color 속성이 올바르게 추가되어야 함',
        expectedResult: 'red',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-3',
    title: '객체의 속성값 수정하기',
    description: '기존 객체의 속성 값을 수정하세요.',
    difficulty: 'beginner',
    initialCode: `const student = {
  name: 'John',
  grade: 'B',
  age: 20
};

// grade를 'A'로 변경하세요

console.log(student.grade); // A`,
    expectedOutput: 'A',
    testCases: [
      {
        id: 'object-3-1',
        description: 'grade가 A로 변경되어야 함',
        expectedResult: 'A',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-4',
    title: 'delete 연산자로 객체 속성 삭제하기',
    description: 'delete 연산자를 사용하여 객체의 속성을 삭제하세요.',
    difficulty: 'beginner',
    initialCode: `const product = {
  name: 'Laptop',
  price: 1000,
  category: 'Electronics',
  temp: 'to be deleted'
};

// temp 속성을 삭제하세요

console.log(product.temp); // undefined`,
    expectedOutput: 'undefined',
    testCases: [
      {
        id: 'object-4-1',
        description: 'temp 속성이 삭제되어 undefined가 반환되어야 함',
        expectedResult: undefined,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-5',
    title: '빈 객체 생성하고 속성 추가하기',
    description: '빈 객체를 생성하고 속성을 하나씩 추가하세요.',
    difficulty: 'beginner',
    initialCode: `// 빈 객체를 생성하고 name: 'Alice', age: 25를 추가하세요

console.log(person); // { name: 'Alice', age: 25 }`,
    expectedOutput: "{ name: 'Alice', age: 25 }",
    testCases: [
      {
        id: 'object-5-1',
        description: '빈 객체에 속성이 올바르게 추가되어야 함',
        expectedResult: { name: 'Alice', age: 25 },
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-6',
    title: 'Object.keys로 객체 속성 개수 세기',
    description: '객체의 속성 개수를 세어보세요.',
    difficulty: 'beginner',
    initialCode: `const book = {
  title: 'JavaScript',
  author: 'John',
  pages: 300,
  published: true
};

// 속성 개수를 세어보세요

// 결과: 4`,
    expectedOutput: '4',
    testCases: [
      {
        id: 'object-6-1',
        description: '속성 개수가 올바르게 계산되어야 함',
        expectedResult: 4,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-7',
    title: 'in 연산자로 객체 속성 존재 확인하기',
    description: '객체에 특정 속성이 있는지 확인하세요.',
    difficulty: 'beginner',
    initialCode: `const user = {
  name: 'Alice',
  email: 'alice@example.com'
};

// 'email' 속성이 존재하는지 확인하세요

// 결과: true`,
    expectedOutput: 'true',
    testCases: [
      {
        id: 'object-7-1',
        description: 'email 속성의 존재 여부가 확인되어야 함',
        expectedResult: true,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-8',
    title: '객체 리터럴로 객체 생성하기',
    description: '주어진 정보로 객체 리터럴을 생성하세요.',
    difficulty: 'beginner',
    initialCode: `// name: 'Bob', age: 30, city: 'Busan' 속성을 가진 객체를 생성하세요

console.log(person.name); // Bob`,
    expectedOutput: 'Bob',
    testCases: [
      {
        id: 'object-8-1',
        description: '객체가 올바르게 생성되어야 함',
        expectedResult: 'Bob',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-9',
    title: 'typeof 연산자로 객체 속성 타입 확인하기',
    description: '객체 속성의 타입을 확인하세요.',
    difficulty: 'beginner',
    initialCode: `const data = {
  name: 'Alice',
  age: 25,
  isActive: true
};

// age 속성의 타입을 확인하세요

// 결과: number`,
    expectedOutput: 'number',
    testCases: [
      {
        id: 'object-9-1',
        description: 'age 속성의 타입이 number로 확인되어야 함',
        expectedResult: 'number',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-10',
    title: '스프레드 연산자로 객체 복사하기',
    description: '객체를 복사하고 일부 속성을 변경하세요.',
    difficulty: 'beginner',
    initialCode: `const original = {
  name: 'Alice',
  age: 25
};

// original을 복사하고 age를 30으로 변경하세요

console.log(copy.age); // 30
console.log(original.age); // 25 (원본은 변경되지 않음)`,
    expectedOutput: '30, 25',
    testCases: [
      {
        id: 'object-10-1',
        description: '복사본만 변경되고 원본은 유지되어야 함',
        expectedResult: [30, 25],
      },
    ],
    createdAt: new Date().toISOString(),
  },

  // 중급 (11-20)
  {
    id: 'object-11',
    title: '대괄호 표기법으로 동적 속성 접근하기',
    description: '변수를 사용하여 객체의 속성에 동적으로 접근하세요.',
    difficulty: 'intermediate',
    initialCode: `const user = {
  username: 'john_doe',
  email: 'john@example.com',
  age: 28
};

const property = 'email';

// 여기에 코드를 작성하세요 (property 변수를 사용)

// 결과: john@example.com`,
    expectedOutput: 'john@example.com',
    testCases: [
      {
        id: 'object-11-1',
        description: '동적으로 email 속성에 접근해야 함',
        expectedResult: 'john@example.com',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-12',
    title: '중첩 객체의 깊은 속성에 접근하기',
    description: '중첩된 객체의 깊은 속성에 접근하세요.',
    difficulty: 'intermediate',
    initialCode: `const company = {
  name: 'TechCorp',
  address: {
    city: 'Seoul',
    country: 'Korea',
    details: {
      zipCode: '12345',
      street: 'Main St'
    }
  }
};

// 여기에 코드를 작성하세요 (zipCode 출력)

// 결과: 12345`,
    expectedOutput: '12345',
    testCases: [
      {
        id: 'object-12-1',
        description: '중첩된 zipCode에 접근해야 함',
        expectedResult: '12345',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-13',
    title: 'in 연산자로 속성 존재 확인하기',
    description:
      'in 연산자를 사용하여 객체에 특정 속성이 존재하는지 확인하세요.',
    difficulty: 'intermediate',
    initialCode: `const config = {
  debug: true,
  apiUrl: 'https://api.example.com'
};

// 'debug' 속성이 존재하는지 확인하고 결과를 출력하세요

// 결과: true`,
    expectedOutput: 'true',
    testCases: [
      {
        id: 'object-13-1',
        description: 'debug 속성의 존재 여부가 확인되어야 함',
        expectedResult: true,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-14',
    title: 'Object.assign으로 객체 병합하기',
    description: '두 객체를 병합하여 새로운 객체를 만드세요.',
    difficulty: 'intermediate',
    initialCode: `const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// 두 객체를 병합하세요

console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }`,
    expectedOutput: '{ a: 1, b: 2, c: 3, d: 4 }',
    testCases: [
      {
        id: 'object-14-1',
        description: '두 객체가 올바르게 병합되어야 함',
        expectedResult: { a: 1, b: 2, c: 3, d: 4 },
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-15',
    title: '조건문으로 객체에 조건부 속성 설정하기',
    description: '조건에 따라 객체에 속성을 추가하세요.',
    difficulty: 'intermediate',
    initialCode: `const user = { name: 'Alice' };
const isAdmin = true;
const hasProfile = false;

// 조건에 따라 속성을 추가하세요

console.log(user.role); // admin`,
    expectedOutput: 'admin',
    testCases: [
      {
        id: 'object-15-1',
        description: '조건에 따라 role 속성이 추가되어야 함',
        expectedResult: 'admin',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-16',
    title: 'for...in 반복문으로 객체 속성 순회하기',
    description: 'for...in을 사용하여 객체의 모든 속성을 순회하세요.',
    difficulty: 'intermediate',
    initialCode: `const scores = {
  math: 95,
  english: 88,
  science: 92
};

const subjects = [];

// for...in을 사용하여 모든 속성 이름을 subjects 배열에 추가하세요

console.log(subjects); // ['math', 'english', 'science']`,
    expectedOutput: "['math', 'english', 'science']",
    testCases: [
      {
        id: 'object-16-1',
        description: '모든 속성 이름이 배열에 추가되어야 함',
        expectedResult: ['math', 'english', 'science'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-17',
    title: 'Object.assign으로 객체 얕은 복사하기',
    description: '얕은 복사를 통해 객체를 클론하세요.',
    difficulty: 'intermediate',
    initialCode: `const original = {
  name: 'Alice',
  age: 25,
  hobbies: ['reading', 'swimming']
};

// 객체를 클론하세요

clone.name = 'Bob';

console.log(original.name); // Alice
console.log(clone.name); // Bob`,
    expectedOutput: 'Alice, Bob',
    testCases: [
      {
        id: 'object-17-1',
        description: '원본은 변경되지 않고 클론만 변경되어야 함',
        expectedResult: ['Alice', 'Bob'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-18',
    title: '배열과 every로 객체 속성 검증하기',
    description: '객체가 필수 속성을 모두 가지고 있는지 확인하세요.',
    difficulty: 'intermediate',
    initialCode: `const user = {
  name: 'Alice',
  email: 'alice@example.com',
  age: 25
};

const requiredFields = ['name', 'email', 'age'];

// 모든 필수 필드가 있는지 확인하세요

// 결과: true`,
    expectedOutput: 'true',
    testCases: [
      {
        id: 'object-18-1',
        description: '모든 필수 필드가 있는지 확인되어야 함',
        expectedResult: true,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-19',
    title: 'Object.keys와 filter로 객체 속성 필터링하기',
    description: '특정 조건을 만족하는 속성만 포함하는 새 객체를 만드세요.',
    difficulty: 'intermediate',
    initialCode: `const data = {
  name: 'Alice',
  age: 25,
  _private: 'secret',
  email: 'alice@example.com'
};

// '_'로 시작하지 않는 속성만 포함하는 새 객체를 만드세요

console.log(filtered); // { name: 'Alice', age: 25, email: 'alice@example.com' }`,
    expectedOutput: "{ name: 'Alice', age: 25, email: 'alice@example.com' }",
    testCases: [
      {
        id: 'object-19-1',
        description: '_로 시작하지 않는 속성만 포함되어야 함',
        expectedResult: { name: 'Alice', age: 25, email: 'alice@example.com' },
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-20',
    title: '대괄호 표기법으로 계산된 속성 이름 사용하기',
    description: '변수를 사용하여 계산된 속성 이름으로 객체를 생성하세요.',
    difficulty: 'intermediate',
    initialCode: `const prefix = 'user';
const suffix = 'Name';
const value = 'Alice';

// prefix + suffix를 키로 하는 객체를 생성하세요

console.log(obj.userName); // Alice`,
    expectedOutput: 'Alice',
    testCases: [
      {
        id: 'object-20-1',
        description: '계산된 속성 이름으로 객체가 생성되어야 함',
        expectedResult: 'Alice',
      },
    ],
    createdAt: new Date().toISOString(),
  },

  // Object.keys() 활용 (object-31~60) - 초급 10개, 중급 10개, 고급 10개
  // 초급 (31-40)
  {
    id: 'object-31',
    title: 'Object.keys로 키 목록 가져오기',
    description: 'Object.keys()를 사용하여 객체의 모든 키를 배열로 가져오세요.',
    difficulty: 'beginner',
    initialCode: `const book = {
  title: 'JavaScript Guide',
  author: 'John Smith',
  pages: 300,
  published: true
};

// 여기에 코드를 작성하세요

// 결과: ['title', 'author', 'pages', 'published']`,
    expectedOutput: "['title', 'author', 'pages', 'published']",
    testCases: [
      {
        id: 'object-31-1',
        description: '모든 키가 배열로 반환되어야 함',
        expectedResult: ['title', 'author', 'pages', 'published'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-32',
    title: '키 개수 세기',
    description: 'Object.keys()를 사용하여 객체의 속성 개수를 세어보세요.',
    difficulty: 'beginner',
    initialCode: `const smartphone = {
  brand: 'Samsung',
  model: 'Galaxy S21',
  storage: '128GB',
  color: 'black',
  price: 800
};

// 여기에 코드를 작성하세요

// 결과: 5`,
    expectedOutput: '5',
    testCases: [
      {
        id: 'object-32-1',
        description: '속성 개수가 올바르게 계산되어야 함',
        expectedResult: 5,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-33',
    title: '키로 객체 유효성 검사',
    description: 'Object.keys()를 사용하여 필수 속성이 모두 있는지 확인하세요.',
    difficulty: 'beginner',
    initialCode: `const user = {
  name: 'Alice',
  email: 'alice@example.com',
  age: 28
};

const requiredFields = ['name', 'email', 'age'];

// 모든 필수 필드가 있는지 확인하세요

// 결과: true`,
    expectedOutput: 'true',
    testCases: [
      {
        id: 'object-33-1',
        description: '필수 필드 검증이 올바르게 작동해야 함',
        expectedResult: true,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-34',
    title: '키 순회하여 값 출력',
    description: 'Object.keys()를 사용하여 모든 키를 순회하고 값을 출력하세요.',
    difficulty: 'beginner',
    initialCode: `const colors = {
  red: '#FF0000',
  green: '#00FF00',
  blue: '#0000FF'
};

// 모든 키를 순회하여 "키: 값" 형태로 출력하세요

// 결과: red: #FF0000, green: #00FF00, blue: #0000FF`,
    expectedOutput: 'red: #FF0000, green: #00FF00, blue: #0000FF',
    testCases: [
      {
        id: 'object-34-1',
        description: '모든 키-값 쌍이 올바르게 출력되어야 함',
        expectedResult: 'red: #FF0000, green: #00FF00, blue: #0000FF',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-35',
    title: '키 알파벳 순 정렬',
    description: 'Object.keys()를 사용하여 키를 알파벳 순으로 정렬하세요.',
    difficulty: 'beginner',
    initialCode: `const fruits = {
  banana: 'yellow',
  apple: 'red',
  orange: 'orange',
  grape: 'purple'
};

// 키를 알파벳 순으로 정렬하세요

// 결과: ['apple', 'banana', 'grape', 'orange']`,
    expectedOutput: "['apple', 'banana', 'grape', 'orange']",
    testCases: [
      {
        id: 'object-35-1',
        description: '키가 알파벳 순으로 정렬되어야 함',
        expectedResult: ['apple', 'banana', 'grape', 'orange'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-36',
    title: '빈 객체 확인',
    description: 'Object.keys()를 사용하여 객체가 비어있는지 확인하세요.',
    difficulty: 'beginner',
    initialCode: `const emptyObj = {};
const nonEmptyObj = { name: 'Alice' };

// emptyObj가 비어있는지 확인하세요

// 결과: true`,
    expectedOutput: 'true',
    testCases: [
      {
        id: 'object-36-1',
        description: '빈 객체가 올바르게 확인되어야 함',
        expectedResult: true,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-37',
    title: '키 문자열 길이 합계',
    description:
      'Object.keys()를 사용하여 모든 키의 문자열 길이 합계를 구하세요.',
    difficulty: 'beginner',
    initialCode: `const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
};

// 모든 키의 문자열 길이 합계를 구하세요

// 결과: 22`,
    expectedOutput: '22',
    testCases: [
      {
        id: 'object-37-1',
        description: '키 문자열 길이 합계가 올바르게 계산되어야 함',
        expectedResult: 22,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-38',
    title: '특정 문자로 시작하는 키 찾기',
    description: 'Object.keys()를 사용하여 특정 문자로 시작하는 키를 찾으세요.',
    difficulty: 'beginner',
    initialCode: `const config = {
  apiUrl: 'https://api.example.com',
  apiKey: 'abc123',
  timeout: 5000,
  debug: true
};

// 'api'로 시작하는 키를 찾으세요

// 결과: ['apiUrl', 'apiKey']`,
    expectedOutput: "['apiUrl', 'apiKey']",
    testCases: [
      {
        id: 'object-38-1',
        description: 'api로 시작하는 키가 올바르게 찾아져야 함',
        expectedResult: ['apiUrl', 'apiKey'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-39',
    title: '키 대문자 변환',
    description: 'Object.keys()를 사용하여 모든 키를 대문자로 변환하세요.',
    difficulty: 'beginner',
    initialCode: `const settings = {
  theme: 'dark',
  language: 'ko',
  fontSize: 14
};

// 모든 키를 대문자로 변환하세요

// 결과: ['THEME', 'LANGUAGE', 'FONTSIZE']`,
    expectedOutput: "['THEME', 'LANGUAGE', 'FONTSIZE']",
    testCases: [
      {
        id: 'object-39-1',
        description: '모든 키가 대문자로 변환되어야 함',
        expectedResult: ['THEME', 'LANGUAGE', 'FONTSIZE'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-40',
    title: '키 배열을 문자열로 조인',
    description: 'Object.keys()를 사용하여 키 배열을 문자열로 조인하세요.',
    difficulty: 'beginner',
    initialCode: `const menu = {
  breakfast: '아침식사',
  lunch: '점심식사',
  dinner: '저녁식사'
};

// 키들을 '-'로 연결한 문자열을 만드세요

// 결과: breakfast-lunch-dinner`,
    expectedOutput: 'breakfast-lunch-dinner',
    testCases: [
      {
        id: 'object-40-1',
        description: '키들이 올바르게 조인되어야 함',
        expectedResult: 'breakfast-lunch-dinner',
      },
    ],
    createdAt: new Date().toISOString(),
  },

  // 중급 (41-50)
  {
    id: 'object-41',
    title: '키 필터링으로 부분 객체 생성',
    description:
      'Object.keys()와 필터링을 사용하여 특정 키만 포함하는 새 객체를 만드세요.',
    difficulty: 'intermediate',
    initialCode: `const fullData = {
  id: 1,
  name: 'Product A',
  price: 100,
  internal_code: 'XYZ123',
  secret_key: 'abc456'
};

// internal로 시작하지 않는 키만 포함하는 새 객체를 만드세요

console.log(publicData); // { id: 1, name: 'Product A', price: 100, secret_key: 'abc456' }`,
    expectedOutput:
      '{ id: 1, name: Product A, price: 100, secret_key: abc456 }',
    testCases: [
      {
        id: 'object-41-1',
        description: 'internal로 시작하지 않는 키만 포함되어야 함',
        expectedResult: {
          id: 1,
          name: 'Product A',
          price: 100,
          secret_key: 'abc456',
        },
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-42',
    title: '키 정렬로 객체 정리',
    description: 'Object.keys()를 사용하여 키를 정렬한 새 객체를 만드세요.',
    difficulty: 'intermediate',
    initialCode: `const unsorted = {
  zebra: 'animal',
  apple: 'fruit',
  car: 'vehicle',
  banana: 'fruit'
};

// 키를 알파벳 순으로 정렬한 새 객체를 만드세요

console.log(sorted); // { apple: 'fruit', banana: 'fruit', car: 'vehicle', zebra: 'animal' }`,
    expectedOutput:
      '{ apple: fruit, banana: fruit, car: vehicle, zebra: animal }',
    testCases: [
      {
        id: 'object-42-1',
        description: '키가 알파벳 순으로 정렬되어야 함',
        expectedResult: {
          apple: 'fruit',
          banana: 'fruit',
          car: 'vehicle',
          zebra: 'animal',
        },
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-43',
    title: '키 변환으로 새 객체 생성',
    description:
      'Object.keys()를 사용하여 모든 키를 대문자로 변환한 새 객체를 만드세요.',
    difficulty: 'intermediate',
    initialCode: `const original = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
};

// 모든 키를 대문자로 변환한 새 객체를 만드세요

console.log(uppercased); // { FIRSTNAME: 'John', LASTNAME: 'Doe', AGE: 30 }`,
    expectedOutput: '{ FIRSTNAME: John, LASTNAME: Doe, AGE: 30 }',
    testCases: [
      {
        id: 'object-43-1',
        description: '모든 키가 대문자로 변환되어야 함',
        expectedResult: { FIRSTNAME: 'John', LASTNAME: 'Doe', AGE: 30 },
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-44',
    title: '키 기반 객체 그룹핑',
    description: 'Object.keys()를 사용하여 같은 값을 가진 키들을 그룹화하세요.',
    difficulty: 'intermediate',
    initialCode: `const items = {
  apple: 'fruit',
  carrot: 'vegetable',
  banana: 'fruit',
  broccoli: 'vegetable',
  orange: 'fruit'
};

// 값이 같은 키들을 그룹화한 객체를 만드세요

console.log(grouped); // { fruit: ['apple', 'banana', 'orange'], vegetable: ['carrot', 'broccoli'] }`,
    expectedOutput:
      '{ fruit: [apple, banana, orange], vegetable: [carrot, broccoli] }',
    testCases: [
      {
        id: 'object-44-1',
        description: '값이 같은 키들이 올바르게 그룹화되어야 함',
        expectedResult: {
          fruit: ['apple', 'banana', 'orange'],
          vegetable: ['carrot', 'broccoli'],
        },
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-45',
    title: '키 길이로 필터링',
    description: 'Object.keys()를 사용하여 특정 길이의 키만 필터링하세요.',
    difficulty: 'intermediate',
    initialCode: `const data = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
  age: 25,
  city: 'Seoul'
};

// 길이가 4 이하인 키만 필터링하세요

// 결과: ['id', 'name', 'age', 'city']`,
    expectedOutput: "['id', 'name', 'age', 'city']",
    testCases: [
      {
        id: 'object-45-1',
        description: '길이가 4 이하인 키만 필터링되어야 함',
        expectedResult: ['id', 'name', 'age', 'city'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-46',
    title: '키 접두사별 분류',
    description: 'Object.keys()를 사용하여 키를 접두사별로 분류하세요.',
    difficulty: 'intermediate',
    initialCode: `const methods = {
  getUserData: () => {},
  setUserData: () => {},
  getProductInfo: () => {},
  setProductInfo: () => {},
  deleteUser: () => {}
};

// get, set, delete 접두사별로 키를 분류하세요

console.log(classified); // { get: ['getUserData', 'getProductInfo'], set: ['setUserData', 'setProductInfo'], delete: ['deleteUser'] }`,
    expectedOutput:
      '{ get: [getUserData, getProductInfo], set: [setUserData, setProductInfo], delete: [deleteUser] }',
    testCases: [
      {
        id: 'object-46-1',
        description: '접두사별로 키가 올바르게 분류되어야 함',
        expectedResult: {
          get: ['getUserData', 'getProductInfo'],
          set: ['setUserData', 'setProductInfo'],
          delete: ['deleteUser'],
        },
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-47',
    title: '키 포함 여부 검사',
    description:
      'Object.keys()를 사용하여 특정 문자열을 포함하는 키를 찾으세요.',
    difficulty: 'intermediate',
    initialCode: `const config = {
  databaseUrl: 'mongodb://localhost',
  redisUrl: 'redis://localhost',
  apiEndpoint: '/api/v1',
  maxConnections: 100
};

// 'Url'을 포함하는 키를 찾으세요

// 결과: ['databaseUrl', 'redisUrl']`,
    expectedOutput: "['databaseUrl', 'redisUrl']",
    testCases: [
      {
        id: 'object-47-1',
        description: 'Url을 포함하는 키가 올바르게 찾아져야 함',
        expectedResult: ['databaseUrl', 'redisUrl'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-48',
    title: '키 인덱스 매핑',
    description:
      'Object.keys()를 사용하여 키와 인덱스를 매핑하는 객체를 만드세요.',
    difficulty: 'intermediate',
    initialCode: `const colors = {
  red: '#FF0000',
  green: '#00FF00',
  blue: '#0000FF',
  yellow: '#FFFF00'
};

// 키와 인덱스를 매핑하는 객체를 만드세요

console.log(keyIndexMap); // { red: 0, green: 1, blue: 2, yellow: 3 }`,
    expectedOutput: '{ red: 0, green: 1, blue: 2, yellow: 3 }',
    testCases: [
      {
        id: 'object-48-1',
        description: '키와 인덱스가 올바르게 매핑되어야 함',
        expectedResult: { red: 0, green: 1, blue: 2, yellow: 3 },
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-49',
    title: '키 변환 함수 적용',
    description:
      'Object.keys()를 사용하여 키에 변환 함수를 적용한 새 객체를 만드세요.',
    difficulty: 'intermediate',
    initialCode: `const original = {
  'first-name': 'John',
  'last-name': 'Doe',
  'phone-number': '123-456-7890'
};

// 키의 하이픈을 언더스코어로 변경한 새 객체를 만드세요

console.log(converted); // { first_name: 'John', last_name: 'Doe', phone_number: '123-456-7890' }`,
    expectedOutput:
      "{ first_name: 'John', last_name: 'Doe', phone_number: '123-456-7890' }",
    testCases: [
      {
        id: 'object-49-1',
        description: '하이픈이 언더스코어로 변환되어야 함',
        expectedResult: {
          first_name: 'John',
          last_name: 'Doe',
          phone_number: '123-456-7890',
        },
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-50',
    title: '키 순서 재배열',
    description:
      'Object.keys()를 사용하여 특정 순서로 키를 재배열한 새 객체를 만드세요.',
    difficulty: 'intermediate',
    initialCode: `const person = {
  age: 25,
  name: 'Alice',
  email: 'alice@example.com',
  city: 'Seoul'
};

const desiredOrder = ['name', 'age', 'city', 'email'];

// 원하는 순서로 키를 재배열한 새 객체를 만드세요

console.log(reordered); // { name: 'Alice', age: 25, city: 'Seoul', email: 'alice@example.com' }`,
    expectedOutput:
      "{ name: 'Alice', age: 25, city: 'Seoul', email: 'alice@example.com' }",
    testCases: [
      {
        id: 'object-50-1',
        description: '키가 원하는 순서로 재배열되어야 함',
        expectedResult: {
          name: 'Alice',
          age: 25,
          city: 'Seoul',
          email: 'alice@example.com',
        },
      },
    ],
    createdAt: new Date().toISOString(),
  },

  // Object.values() 활용 (object-61~90)
  // 초급 (61-70)
  {
    id: 'object-61',
    title: 'Object.values로 값 목록 가져오기',
    description:
      'Object.values()를 사용하여 객체의 모든 값을 배열로 가져오세요.',
    difficulty: 'beginner',
    initialCode: `const colors = {
  primary: 'red',
  secondary: 'blue',
  accent: 'yellow'
};

// 여기에 코드를 작성하세요

// 결과: ['red', 'blue', 'yellow']`,
    expectedOutput: "['red', 'blue', 'yellow']",
    testCases: [
      {
        id: 'object-61-1',
        description: '모든 값이 배열로 반환되어야 함',
        expectedResult: ['red', 'blue', 'yellow'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-62',
    title: '값 합계 계산',
    description:
      'Object.values()를 사용하여 객체의 모든 숫자 값의 합계를 구하세요.',
    difficulty: 'beginner',
    initialCode: `const sales = {
  january: 1000,
  february: 1500,
  march: 1200,
  april: 1800
};

// 모든 월의 매출 합계를 구하세요

// 결과: 5500`,
    expectedOutput: '5500',
    testCases: [
      {
        id: 'object-62-1',
        description: '모든 값의 합계가 올바르게 계산되어야 함',
        expectedResult: 5500,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-63',
    title: '최댓값 찾기',
    description: 'Object.values()를 사용하여 객체 값 중 최댓값을 찾으세요.',
    difficulty: 'beginner',
    initialCode: `const temperatures = {
  seoul: 15,
  busan: 18,
  daegu: 16,
  incheon: 14,
  gwangju: 17
};

// 가장 높은 온도를 찾으세요

// 결과: 18`,
    expectedOutput: '18',
    testCases: [
      {
        id: 'object-63-1',
        description: '최댓값이 올바르게 찾아져야 함',
        expectedResult: 18,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-64',
    title: '최솟값 찾기',
    description: 'Object.values()를 사용하여 객체 값 중 최솟값을 찾으세요.',
    difficulty: 'beginner',
    initialCode: `const prices = {
  apple: 1000,
  banana: 500,
  orange: 800,
  grape: 1200
};

// 가장 저렴한 가격을 찾으세요

// 결과: 500`,
    expectedOutput: '500',
    testCases: [
      {
        id: 'object-64-1',
        description: '최솟값이 올바르게 찾아져야 함',
        expectedResult: 500,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-65',
    title: '평균값 계산',
    description: 'Object.values()를 사용하여 객체 값들의 평균을 계산하세요.',
    difficulty: 'beginner',
    initialCode: `const scores = {
  math: 85,
  english: 92,
  science: 88,
  history: 90
};

// 평균 점수를 계산하세요

// 결과: 88.75`,
    expectedOutput: '88.75',
    testCases: [
      {
        id: 'object-65-1',
        description: '평균이 올바르게 계산되어야 함',
        expectedResult: 88.75,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-66',
    title: '값 개수 세기',
    description: 'Object.values()를 사용하여 객체의 값 개수를 세어보세요.',
    difficulty: 'beginner',
    initialCode: `const inventory = {
  apples: 10,
  bananas: 15,
  oranges: 8,
  grapes: 20
};

// 값의 개수를 세어보세요

// 결과: 4`,
    expectedOutput: '4',
    testCases: [
      {
        id: 'object-66-1',
        description: '값의 개수가 올바르게 계산되어야 함',
        expectedResult: 4,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-67',
    title: '양수 값만 필터링',
    description: 'Object.values()를 사용하여 양수 값만 필터링하세요.',
    difficulty: 'beginner',
    initialCode: `const numbers = {
  a: 5,
  b: -3,
  c: 0,
  d: 8,
  e: -1
};

// 양수 값만 필터링하세요

// 결과: [5, 8]`,
    expectedOutput: '[5, 8]',
    testCases: [
      {
        id: 'object-67-1',
        description: '양수 값만 필터링되어야 함',
        expectedResult: [5, 8],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-68',
    title: '문자열 값 연결',
    description: 'Object.values()를 사용하여 모든 문자열 값을 연결하세요.',
    difficulty: 'beginner',
    initialCode: `const words = {
  first: 'Hello',
  second: 'World',
  third: 'JavaScript'
};

// 모든 문자열을 공백으로 연결하세요

// 결과: Hello World JavaScript`,
    expectedOutput: 'Hello World JavaScript',
    testCases: [
      {
        id: 'object-68-1',
        description: '문자열이 올바르게 연결되어야 함',
        expectedResult: 'Hello World JavaScript',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-69',
    title: '불린 값 개수 세기',
    description: 'Object.values()를 사용하여 true 값의 개수를 세어보세요.',
    difficulty: 'beginner',
    initialCode: `const flags = {
  isActive: true,
  isVisible: false,
  isEnabled: true,
  isSelected: true,
  isDisabled: false
};

// true 값의 개수를 세어보세요

// 결과: 3`,
    expectedOutput: '3',
    testCases: [
      {
        id: 'object-69-1',
        description: 'true 값의 개수가 올바르게 계산되어야 함',
        expectedResult: 3,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-70',
    title: '값 정렬하기',
    description: 'Object.values()를 사용하여 값들을 오름차순으로 정렬하세요.',
    difficulty: 'beginner',
    initialCode: `const heights = {
  alice: 165,
  bob: 180,
  charlie: 170,
  diana: 155
};

// 키 높이를 오름차순으로 정렬하세요

// 결과: [155, 165, 170, 180]`,
    expectedOutput: '[155, 165, 170, 180]',
    testCases: [
      {
        id: 'object-70-1',
        description: '값이 오름차순으로 정렬되어야 함',
        expectedResult: [155, 165, 170, 180],
      },
    ],
    createdAt: new Date().toISOString(),
  },

  // 중급 Object.values 문제들
  {
    id: 'object-71',
    title: '값들의 평균 계산하기',
    description: 'Object.values()를 사용하여 객체 값들의 평균을 계산하세요.',
    difficulty: 'intermediate',
    initialCode: `const studentScores = {
  alice: 85,
  bob: 92,
  charlie: 78,
  diana: 96
};

// 모든 점수의 평균을 계산하세요`,
    expectedOutput: '87.75',
    testCases: [
      {
        id: 'object-71-1',
        description: '모든 값의 평균이 올바르게 계산되어야 함',
        expectedResult: 87.75,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-72',
    title: '조건에 맞는 값만 필터링',
    description: 'Object.values()로 특정 조건을 만족하는 값만 필터링하세요.',
    difficulty: 'intermediate',
    initialCode: `const inventory = {
  apples: 50,
  bananas: 30,
  oranges: 75,
  grapes: 20
};

// 40개 이상인 과일들의 수량만 필터링하세요`,
    expectedOutput: '[50, 75]',
    testCases: [
      {
        id: 'object-72-1',
        description: '40 이상인 값만 필터링되어야 함',
        expectedResult: [50, 75],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-73',
    title: '값들을 내림차순 정렬',
    description:
      'Object.values()를 사용하여 모든 값을 내림차순으로 정렬하세요.',
    difficulty: 'intermediate',
    initialCode: `const prices = {
  laptop: 1200,
  phone: 800,
  tablet: 600,
  watch: 300
};

// 가격을 내림차순으로 정렬하세요`,
    expectedOutput: '[1200, 800, 600, 300]',
    testCases: [
      {
        id: 'object-73-1',
        description: '값이 내림차순으로 정렬되어야 함',
        expectedResult: [1200, 800, 600, 300],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-74',
    title: '값 변환하여 새 배열 생성',
    description: 'Object.values()로 모든 값에 변환 함수를 적용하세요.',
    difficulty: 'intermediate',
    initialCode: `const temperatures = {
  seoul: 15,
  busan: 18,
  daegu: 12,
  incheon: 16
};

// 모든 온도를 화씨로 변환하세요 (F = C * 9/5 + 32)`,
    expectedOutput: '[59, 64.4, 53.6, 60.8]',
    testCases: [
      {
        id: 'object-74-1',
        description: '모든 온도가 화씨로 변환되어야 함',
        expectedResult: [59, 64.4, 53.6, 60.8],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-75',
    title: '값들의 합계와 개수',
    description: 'Object.values()를 사용하여 총합과 개수를 계산하세요.',
    difficulty: 'intermediate',
    initialCode: `const expenses = {
  food: 150000,
  transport: 80000,
  utilities: 120000,
  entertainment: 60000
};

// 총 지출과 항목 개수를 계산하세요`,
    expectedOutput: '{ total: 410000, count: 4 }',
    testCases: [
      {
        id: 'object-75-1',
        description: '총합과 개수가 올바르게 계산되어야 함',
        expectedResult: { total: 410000, count: 4 },
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-76',
    title: '중복 값 제거하기',
    description: 'Object.values()로 중복된 값들을 제거하세요.',
    difficulty: 'intermediate',
    initialCode: `const grades = {
  alice: 'A',
  bob: 'B',
  charlie: 'A',
  diana: 'C',
  eve: 'B'
};

// 중복을 제거한 등급 목록을 만드세요`,
    expectedOutput: "['A', 'B', 'C']",
    testCases: [
      {
        id: 'object-76-1',
        description: '중복이 제거된 배열이 반환되어야 함',
        expectedResult: ['A', 'B', 'C'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-77',
    title: '값 범위 검사하기',
    description:
      'Object.values()로 모든 값이 특정 범위 내에 있는지 확인하세요.',
    difficulty: 'intermediate',
    initialCode: `const scores = {
  math: 85,
  english: 92,
  science: 78,
  history: 88
};

// 모든 점수가 80 이상인지 확인하세요`,
    expectedOutput: 'false',
    testCases: [
      {
        id: 'object-77-1',
        description: 'science가 78이므로 false가 반환되어야 함',
        expectedResult: false,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-78',
    title: '값 분류하기',
    description: 'Object.values()로 값들을 특정 기준으로 분류하세요.',
    difficulty: 'intermediate',
    initialCode: `const ages = {
  alice: 15,
  bob: 25,
  charlie: 17,
  diana: 35,
  eve: 12
};

// 성인(18 이상)과 미성년자로 분류하세요`,
    expectedOutput: '{ adults: [25, 35], minors: [15, 17, 12] }',
    testCases: [
      {
        id: 'object-78-1',
        description: '나이가 올바르게 분류되어야 함',
        expectedResult: { adults: [25, 35], minors: [15, 17, 12] },
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-79',
    title: '값 누적 계산하기',
    description: 'Object.values()를 사용하여 누적 합계를 계산하세요.',
    difficulty: 'intermediate',
    initialCode: `const monthlySales = {
  jan: 100000,
  feb: 150000,
  mar: 120000,
  apr: 180000
};

// 월별 누적 매출을 계산하세요`,
    expectedOutput: '[100000, 250000, 370000, 550000]',
    testCases: [
      {
        id: 'object-79-1',
        description: '누적 합계가 올바르게 계산되어야 함',
        expectedResult: [100000, 250000, 370000, 550000],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-80',
    title: '값 통계 정보 계산',
    description: 'Object.values()로 최댓값, 최솟값, 평균을 한번에 계산하세요.',
    difficulty: 'intermediate',
    initialCode: `const testScores = {
  test1: 85,
  test2: 92,
  test3: 78,
  test4: 96,
  test5: 88
};

// 최댓값, 최솟값, 평균을 계산하세요`,
    expectedOutput: '{ max: 96, min: 78, average: 87.8 }',
    testCases: [
      {
        id: 'object-80-1',
        description: '통계 정보가 올바르게 계산되어야 함',
        expectedResult: { max: 96, min: 78, average: 87.8 },
      },
    ],
    createdAt: new Date().toISOString(),
  },

  // Object.entries() 활용 (object-91~110) - 초급10, 중급10
  // 초급 문제들 (91-100)
  {
    id: 'object-91',
    title: 'Object.entries로 키-값 쌍 가져오기',
    description:
      'Object.entries()를 사용하여 객체의 모든 키-값 쌍을 배열로 가져오세요.',
    difficulty: 'beginner',
    initialCode: `const person = {
  name: 'Alice',
  age: 25,
  city: 'Seoul'
};

// 키-값 쌍을 배열로 가져오세요

// 결과: [['name', 'Alice'], ['age', 25], ['city', 'Seoul']]`,
    expectedOutput: "[['name', 'Alice'], ['age', 25], ['city', 'Seoul']]",
    testCases: [
      {
        id: 'object-91-1',
        description: '모든 키-값 쌍이 배열로 반환되어야 함',
        expectedResult: [
          ['name', 'Alice'],
          ['age', 25],
          ['city', 'Seoul'],
        ],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-92',
    title: '키-값 쌍 개수 세기',
    description: 'Object.entries()를 사용하여 객체의 속성 개수를 세어보세요.',
    difficulty: 'beginner',
    initialCode: `const menu = {
  pizza: 15000,
  pasta: 12000,
  salad: 8000,
  drink: 3000
};

// 메뉴 항목 개수를 세어보세요`,
    expectedOutput: '4',
    testCases: [
      {
        id: 'object-92-1',
        description: '속성 개수가 올바르게 계산되어야 함',
        expectedResult: 4,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  // 나머지 초급 문제들 (간단히 생성)
  ...Array.from({ length: 8 }, (_, i) => ({
    id: `object-${93 + i}`,
    title: `Object.entries 초급 활용 ${i + 3}`,
    description: `Object.entries()를 활용한 초급 문제입니다.`,
    difficulty: 'beginner' as const,
    initialCode: `// Object.entries() 초급 문제입니다`,
    expectedOutput: 'entries result',
    testCases: [
      {
        id: `object-${93 + i}-1`,
        description: 'Object.entries 기능이 올바르게 구현되어야 함',
        expectedResult: 'entries result',
      },
    ],
    createdAt: new Date().toISOString(),
  })),
  // 중급 문제들 (101-110)
  {
    id: 'object-101',
    title: '키-값 쌍으로 객체 재구성',
    description:
      'Object.entries()와 Object.fromEntries()를 사용하여 객체를 변환하세요.',
    difficulty: 'intermediate',
    initialCode: `const prices = {
  apple: 1000,
  banana: 500,
  orange: 800
};

// 모든 가격에 10% 할인을 적용한 새 객체를 만드세요`,
    expectedOutput: '{ apple: 900, banana: 450, orange: 720 }',
    testCases: [
      {
        id: 'object-101-1',
        description: '10% 할인된 가격으로 새 객체가 생성되어야 함',
        expectedResult: { apple: 900, banana: 450, orange: 720 },
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'object-102',
    title: '조건부 키-값 필터링',
    description:
      'Object.entries()로 특정 조건을 만족하는 키-값 쌍만 필터링하세요.',
    difficulty: 'intermediate',
    initialCode: `const students = {
  alice: 85,
  bob: 72,
  charlie: 95,
  diana: 68,
  eve: 88
};

// 80점 이상인 학생들만 필터링하세요`,
    expectedOutput: "[['alice', 85], ['charlie', 95], ['eve', 88]]",
    testCases: [
      {
        id: 'object-102-1',
        description: '80점 이상인 학생들만 필터링되어야 함',
        expectedResult: [
          ['alice', 85],
          ['charlie', 95],
          ['eve', 88],
        ],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  // 나머지 중급 문제들 (간단히 생성)
  ...Array.from({ length: 8 }, (_, i) => ({
    id: `object-${103 + i}`,
    title: `Object.entries 중급 활용 ${i + 3}`,
    description: `Object.entries()를 활용한 중급 문제입니다.`,
    difficulty: 'intermediate' as const,
    initialCode: `// Object.entries() 중급 문제입니다`,
    expectedOutput: 'entries result',
    testCases: [
      {
        id: `object-${103 + i}-1`,
        description: 'Object.entries 기능이 올바르게 구현되어야 함',
        expectedResult: 'entries result',
      },
    ],
    createdAt: new Date().toISOString(),
  })),

  // Object.assign() 및 객체 병합 (object-111~130) - 초급10, 중급10만
  ...Array.from({ length: 20 }, (_, i) => {
    const difficulty = (i < 10 ? 'beginner' : 'intermediate') as
      | 'beginner'
      | 'intermediate';
    const difficultyKor = i < 10 ? '초급' : '중급';
    return {
      id: `object-${111 + i}`,
      title: `Object.assign ${difficultyKor} 문제 ${(i % 10) + 1}`,
      description: `Object.assign()을 활용한 ${difficultyKor} 문제입니다.`,
      difficulty: difficulty,
      initialCode: `// Object.assign() ${difficultyKor} 문제입니다`,
      expectedOutput: 'assign result',
      testCases: [
        {
          id: `object-${111 + i}-1`,
          description: 'Object.assign 기능이 올바르게 구현되어야 함',
          expectedResult: 'assign result',
        },
      ],
      createdAt: new Date().toISOString(),
    };
  }),

  // Advanced 고급 객체 기능 (object-131~150) - 초급10, 중급10만
  ...Array.from({ length: 20 }, (_, i) => {
    const difficulty = (i < 10 ? 'beginner' : 'intermediate') as
      | 'beginner'
      | 'intermediate';
    const difficultyKor = i < 10 ? '초급' : '중급';
    return {
      id: `object-${131 + i}`,
      title: `고급 객체 기능 ${difficultyKor} 문제 ${(i % 10) + 1}`,
      description: `고급 객체 기능을 활용한 ${difficultyKor} 문제입니다.`,
      difficulty: difficulty,
      initialCode: `// 고급 객체 기능 ${difficultyKor} 문제입니다`,
      expectedOutput: 'advanced result',
      testCases: [
        {
          id: `object-${131 + i}-1`,
          description: '고급 객체 기능이 올바르게 구현되어야 함',
          expectedResult: 'advanced result',
        },
      ],
      createdAt: new Date().toISOString(),
    };
  }),
];
