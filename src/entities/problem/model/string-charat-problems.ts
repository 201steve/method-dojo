import type { Problem } from '../types/type';

export const STRING_CHARAT_PROBLEMS: Problem[] = [
  // 초급 문제들 (1-10)
  {
    id: 'string-charAt-1',
    title: '특정 위치의 문자 가져오기',
    description:
      'charAt()을 사용하여 문자열의 특정 위치에 있는 문자를 가져오세요.',
    difficulty: 'beginner',
    initialCode: `const text = 'JavaScript';

// 3번째 위치의 문자를 가져오세요 (0부터 시작)

// 결과: a`,
    expectedOutput: 'a',
    testCases: [
      {
        id: 'string-charAt-1-1',
        description: '3번째 위치의 문자가 올바르게 반환되어야 함',
        expectedResult: 'a',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'string-charAt-2',
    title: '문자열 첫 글자와 마지막 글자',
    description:
      'charAt()을 사용하여 문자열의 첫 글자와 마지막 글자를 가져오세요.',
    difficulty: 'beginner',
    initialCode: `const word = 'Programming';

// 첫 글자와 마지막 글자를 가져오세요

// 결과: P, g`,
    expectedOutput: 'P, g',
    testCases: [
      {
        id: 'string-charAt-2-1',
        description: '첫 글자와 마지막 글자가 올바르게 반환되어야 함',
        expectedResult: ['P', 'g'],
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'string-charAt-3',
    title: 'substring으로 부분 문자열 추출',
    description: 'substring()을 사용하여 문자열의 일부분을 추출하세요.',
    difficulty: 'beginner',
    initialCode: `const sentence = 'Hello World';

// 6번째부터 끝까지 추출하세요

// 결과: World`,
    expectedOutput: 'World',
    testCases: [
      {
        id: 'string-charAt-3-1',
        description: '부분 문자열이 올바르게 추출되어야 함',
        expectedResult: 'World',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'string-charAt-4',
    title: 'slice로 범위 지정 추출',
    description:
      'slice()를 사용하여 시작과 끝 위치를 지정해서 문자열을 추출하세요.',
    difficulty: 'beginner',
    initialCode: `const text = 'JavaScript Programming';

// 4번째부터 10번째까지 추출하세요

// 결과: Script`,
    expectedOutput: 'Script',
    testCases: [
      {
        id: 'string-charAt-4-1',
        description: '지정된 범위의 문자열이 추출되어야 함',
        expectedResult: 'Script',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'string-charAt-5',
    title: '음수 인덱스로 slice 사용',
    description:
      'slice()의 음수 인덱스를 사용하여 뒤에서부터 문자열을 추출하세요.',
    difficulty: 'beginner',
    initialCode: `const filename = 'document.pdf';

// 뒤에서 3글자를 추출하세요

// 결과: pdf`,
    expectedOutput: 'pdf',
    testCases: [
      {
        id: 'string-charAt-5-1',
        description: '뒤에서 3글자가 올바르게 추출되어야 함',
        expectedResult: 'pdf',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'string-charAt-6',
    title: '중간 부분 문자열 추출',
    description: 'substring()을 사용하여 문자열 중간 부분을 추출하세요.',
    difficulty: 'beginner',
    initialCode: `const email = 'user@example.com';

// @ 기호 앞의 사용자명만 추출하세요

// 결과: user`,
    expectedOutput: 'user',
    testCases: [
      {
        id: 'string-charAt-6-1',
        description: '사용자명이 올바르게 추출되어야 함',
        expectedResult: 'user',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'string-charAt-7',
    title: '문자열 길이 기반 추출',
    description: '문자열 길이를 활용하여 특정 부분을 추출하세요.',
    difficulty: 'beginner',
    initialCode: `const text = 'Front-End Developer';

// 중간 지점부터 끝까지 추출하세요

// 결과: End Developer`,
    expectedOutput: 'End Developer',
    testCases: [
      {
        id: 'string-charAt-7-1',
        description: '중간 지점부터 끝까지 추출되어야 함',
        expectedResult: 'End Developer',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'string-charAt-8',
    title: '특정 문자 위치의 문자들',
    description: 'charAt()을 사용하여 여러 위치의 문자들을 가져오세요.',
    difficulty: 'beginner',
    initialCode: `const word = 'PROGRAMMING';

// 0, 2, 4, 6번째 위치의 문자들을 가져와서 연결하세요

// 결과: PORM`,
    expectedOutput: 'PORM',
    testCases: [
      {
        id: 'string-charAt-8-1',
        description: '지정된 위치의 문자들이 연결되어야 함',
        expectedResult: 'PORM',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'string-charAt-9',
    title: '문자열 앞뒤 부분 추출',
    description:
      'slice()를 사용하여 문자열의 앞 3글자와 뒤 3글자를 추출하세요.',
    difficulty: 'beginner',
    initialCode: `const language = 'JavaScript';

// 앞 3글자와 뒤 3글자를 추출해서 연결하세요

// 결과: Javpt`,
    expectedOutput: 'Javpt',
    testCases: [
      {
        id: 'string-charAt-9-1',
        description: '앞 3글자와 뒤 3글자가 연결되어야 함',
        expectedResult: 'Javpt',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'string-charAt-10',
    title: '파일 확장자 추출',
    description: '파일명에서 확장자 부분만 추출하세요.',
    difficulty: 'beginner',
    initialCode: `const filename = 'image.jpg';

// 확장자만 추출하세요 (점 포함)

// 결과: .jpg`,
    expectedOutput: '.jpg',
    testCases: [
      {
        id: 'string-charAt-10-1',
        description: '확장자가 올바르게 추출되어야 함',
        expectedResult: '.jpg',
      },
    ],
    createdAt: new Date().toISOString(),
  },

  // 중급 문제들 (11-20)
  {
    id: 'string-charAt-11',
    title: '문자열 역순으로 추출',
    description: '문자열을 역순으로 읽어서 새로운 문자열을 만드세요.',
    difficulty: 'intermediate',
    initialCode: `const word = 'HELLO';

// charAt을 사용하여 문자열을 역순으로 만드세요

// 결과: OLLEH`,
    expectedOutput: 'OLLEH',
    testCases: [
      {
        id: 'string-charAt-11-1',
        description: '문자열이 역순으로 변환되어야 함',
        expectedResult: 'OLLEH',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'string-charAt-12',
    title: '조건부 문자 추출',
    description: '특정 조건을 만족하는 위치의 문자들만 추출하세요.',
    difficulty: 'intermediate',
    initialCode: `const text = 'Programming';

// 짝수 위치(0, 2, 4...)의 문자들만 추출하세요

// 결과: Pormig`,
    expectedOutput: 'Pormig',
    testCases: [
      {
        id: 'string-charAt-12-1',
        description: '짝수 위치의 문자들만 추출되어야 함',
        expectedResult: 'Pormig',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'string-charAt-13',
    title: '문자열 마스킹',
    description: '문자열의 중간 부분을 *로 마스킹하세요.',
    difficulty: 'intermediate',
    initialCode: `const phoneNumber = '010-1234-5678';

// 중간 4자리를 ****로 마스킹하세요

// 결과: 010-****-5678`,
    expectedOutput: '010-****-5678',
    testCases: [
      {
        id: 'string-charAt-13-1',
        description: '중간 부분이 올바르게 마스킹되어야 함',
        expectedResult: '010-****-5678',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'string-charAt-14',
    title: '문자열 교대로 추출',
    description:
      '두 문자열에서 교대로 한 글자씩 추출하여 새 문자열을 만드세요.',
    difficulty: 'intermediate',
    initialCode: `const str1 = 'ABCD';
const str2 = '1234';

// 교대로 한 글자씩 추출하여 합치세요

// 결과: A1B2C3D4`,
    expectedOutput: 'A1B2C3D4',
    testCases: [
      {
        id: 'string-charAt-14-1',
        description: '두 문자열이 교대로 합쳐져야 함',
        expectedResult: 'A1B2C3D4',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'string-charAt-15',
    title: '부분 문자열 검증',
    description: '주어진 부분 문자열이 원본 문자열에 포함되는지 확인하세요.',
    difficulty: 'intermediate',
    initialCode: `const text = 'JavaScript Programming';
const substring = 'Script';

// substring이 text에 포함되는지 slice를 사용하여 확인하세요

// 결과: true`,
    expectedOutput: 'true',
    testCases: [
      {
        id: 'string-charAt-15-1',
        description: '부분 문자열 포함 여부가 올바르게 확인되어야 함',
        expectedResult: true,
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'string-charAt-16',
    title: '문자열 패턴 추출',
    description: '특정 패턴으로 문자열에서 정보를 추출하세요.',
    difficulty: 'intermediate',
    initialCode: `const dateString = '2024-03-15';

// 년, 월, 일을 각각 추출하세요

// 결과: { year: '2024', month: '03', day: '15' }`,
    expectedOutput: "{ year: '2024', month: '03', day: '15' }",
    testCases: [
      {
        id: 'string-charAt-16-1',
        description: '날짜 정보가 올바르게 추출되어야 함',
        expectedResult: { year: '2024', month: '03', day: '15' },
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'string-charAt-17',
    title: '문자열 중복 제거',
    description: '연속된 중복 문자를 제거하세요.',
    difficulty: 'intermediate',
    initialCode: `const text = 'Hellllo Worrlld';

// 연속된 중복 문자를 하나로 줄이세요

// 결과: Hello World`,
    expectedOutput: 'Hello World',
    testCases: [
      {
        id: 'string-charAt-17-1',
        description: '연속된 중복 문자가 제거되어야 함',
        expectedResult: 'Hello World',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'string-charAt-18',
    title: '문자열 회전',
    description: '문자열을 지정된 위치만큼 회전시키세요.',
    difficulty: 'intermediate',
    initialCode: `const text = 'ABCDEFG';
const rotateBy = 3;

// 문자열을 왼쪽으로 3칸 회전시키세요

// 결과: DEFGABC`,
    expectedOutput: 'DEFGABC',
    testCases: [
      {
        id: 'string-charAt-18-1',
        description: '문자열이 올바르게 회전되어야 함',
        expectedResult: 'DEFGABC',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'string-charAt-19',
    title: '문자열 비교 분석',
    description: '두 문자열에서 다른 위치와 문자를 찾으세요.',
    difficulty: 'intermediate',
    initialCode: `const str1 = 'PROGRAMMING';
const str2 = 'PROGRAMING';

// 두 문자열이 다른 첫 번째 위치를 찾으세요

// 결과: { position: 6, char1: 'M', char2: undefined }`,
    expectedOutput: "{ position: 6, char1: 'M', char2: undefined }",
    testCases: [
      {
        id: 'string-charAt-19-1',
        description: '다른 위치가 올바르게 찾아져야 함',
        expectedResult: { position: 6, char1: 'M', char2: undefined },
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'string-charAt-20',
    title: '문자열 압축',
    description: '연속된 같은 문자의 개수를 세어서 압축 형태로 만드세요.',
    difficulty: 'intermediate',
    initialCode: `const text = 'aaabbccccdd';

// 연속된 문자를 압축하세요 (a3b2c4d2 형태)

// 결과: a3b2c4d2`,
    expectedOutput: 'a3b2c4d2',
    testCases: [
      {
        id: 'string-charAt-20-1',
        description: '문자열이 올바르게 압축되어야 함',
        expectedResult: 'a3b2c4d2',
      },
    ],
    createdAt: new Date().toISOString(),
  },
];
