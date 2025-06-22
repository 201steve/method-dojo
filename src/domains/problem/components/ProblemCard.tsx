import React from 'react';
import { Link } from 'react-router-dom';
import { Problem } from '../types';

interface ProblemCardProps {
    problem: Problem;
}

const DIFFICULTY_LABELS = {
    beginner: '초급',
    intermediate: '중급',
    advanced: '고급'
} as const;

const DIFFICULTY_COLORS = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800'
} as const;

export function ProblemCard({ problem }: ProblemCardProps) {
    return (
        <Link
            to={`/problem/${problem.id}`}
            className="block p-6 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
        >
            <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900">
                    {problem.title}
                </h3>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${DIFFICULTY_COLORS[problem.difficulty]}`}>
          {DIFFICULTY_LABELS[problem.difficulty]}
        </span>
            </div>

            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {problem.description}
            </p>

            <div className="text-xs text-gray-500">
                {new Date(problem.createdAt).toLocaleDateString('ko-KR')}
            </div>
        </Link>
    );
}
