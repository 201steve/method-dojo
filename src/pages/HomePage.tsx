import { Link } from 'react-router-dom';
import { useProblems } from '../domains/problem/hooks/useProblems';
import { ProblemCard } from '../domains/problem/components/ProblemCard';

export function HomePage() {
    const { getProblemsByDifficulty } = useProblems();

    const beginnerProblems = getProblemsByDifficulty('beginner');
    const intermediateProblems = getProblemsByDifficulty('intermediate');
    const advancedProblems = getProblemsByDifficulty('advanced');

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    JavaScript 배열 메소드 마스터
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    배열 메소드를 연습하고 마스터하세요
                </p>
                <Link
                    to="/create"
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    새 문제 만들기
                </Link>
            </div>

            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        초급 ({beginnerProblems.length}문제)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {beginnerProblems.map(problem => (
                            <ProblemCard key={problem.id} problem={problem} />
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        중급 ({intermediateProblems.length}문제)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {intermediateProblems.map(problem => (
                            <ProblemCard key={problem.id} problem={problem} />
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        고급 ({advancedProblems.length}문제)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {advancedProblems.map(problem => (
                            <ProblemCard key={problem.id} problem={problem} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
