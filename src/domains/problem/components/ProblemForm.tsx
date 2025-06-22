import React, { useState } from 'react';
import { Problem, ProblemDifficulty, TestCase } from '../types';
import { CodeEditor } from './CodeEditor';

interface ProblemFormProps {
    initialProblem?: Problem;
    onSave: (problem: Problem) => void;
    onCancel: () => void;
}

export function ProblemForm({ initialProblem, onSave, onCancel }: ProblemFormProps) {
    const [title, setTitle] = useState(initialProblem?.title || '');
    const [description, setDescription] = useState(initialProblem?.description || '');
    const [difficulty, setDifficulty] = useState<ProblemDifficulty>(initialProblem?.difficulty || 'beginner');
    const [initialCode, setInitialCode] = useState(initialProblem?.initialCode || '');
    const [expectedOutput, setExpectedOutput] = useState(initialProblem?.expectedOutput || '');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const problem: Problem = {
            id: initialProblem?.id || Date.now().toString(),
            title,
            description,
            difficulty,
            initialCode,
            expectedOutput,
            testCases: initialProblem?.testCases || [],
            createdAt: initialProblem?.createdAt || new Date().toISOString()
        };

        onSave(problem);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    문제 제목
                </label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>

            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    문제 설명
                </label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>

            <div>
                <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700 mb-2">
                    난이도
                </label>
                <select
                    id="difficulty"
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value as ProblemDifficulty)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="beginner">초급</option>
                    <option value="intermediate">중급</option>
                    <option value="advanced">고급</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    초기 코드
                </label>
                <CodeEditor
                    value={initialCode}
                    onChange={setInitialCode}
                    placeholder="초기 코드를 입력하세요..."
                />
            </div>

            <div>
                <label htmlFor="expectedOutput" className="block text-sm font-medium text-gray-700 mb-2">
                    예상 출력
                </label>
                <textarea
                    id="expectedOutput"
                    value={expectedOutput}
                    onChange={(e) => setExpectedOutput(e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="예상되는 출력 결과를 입력하세요..."
                />
            </div>

            <div className="flex justify-end space-x-3">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                    취소
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                    저장
                </button>
            </div>
        </form>
    );
}