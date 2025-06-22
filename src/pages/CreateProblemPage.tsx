import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProblems } from '../domains/problem/hooks/useProblems';
import { ProblemForm } from '../domains/problem/components/ProblemForm';
import { Problem } from '../domains/problem/types';

export function CreateProblemPage() {
    const navigate = useNavigate();
    const { saveProblem } = useProblems();

    const handleSave = (problem: Problem) => {
        saveProblem(problem);
        navigate('/');
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    새 문제 만들기
                </h1>
                <p className="text-gray-600">
                    JavaScript 배열 메소드 연습 문제를 만들어보세요.
                </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
                <ProblemForm
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
            </div>
        </div>
    );
}
