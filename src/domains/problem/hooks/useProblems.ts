import { useState, useEffect } from 'react';
import { Problem, ProblemDifficulty } from '../types';

const STORAGE_KEY = 'js-array-problems';

const DEFAULT_PROBLEMS: Problem[] = [
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
                expectedResult: ['apple', 'banana', 'orange']
            }
        ],
        createdAt: new Date().toISOString()
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
                expectedResult: ['SEOUL', 'BUSAN', 'DAEGU']
            }
        ],
        createdAt: new Date().toISOString()
    }
];

export function useProblems() {
    const [problems, setProblems] = useState<Problem[]>([]);

    useEffect(() => {
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
        const updatedProblems = problems.map(p => p.id === id ? updatedProblem : p);
        setProblems(updatedProblems);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProblems));
    };

    const deleteProblem = (id: string) => {
        const updatedProblems = problems.filter(p => p.id !== id);
        setProblems(updatedProblems);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProblems));
    };

    const getProblemsByDifficulty = (difficulty: ProblemDifficulty) => {
        return problems.filter(p => p.difficulty === difficulty);
    };

    const getProblemById = (id: string) => {
        return problems.find(p => p.id === id);
    };

    return {
        problems,
        saveProblem,
        updateProblem,
        deleteProblem,
        getProblemsByDifficulty,
        getProblemById
    };
}
