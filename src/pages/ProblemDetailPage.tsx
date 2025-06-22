import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProblems } from '../domains/problem/hooks/useProblems';
import { useCodeExecution } from '../domains/problem/hooks/useCodeExecution';
import { CodeEditor } from '../domains/problem/components/CodeEditor';
import { ClipboardHelper } from '../domains/problem/components/ClipboardHelper';

export function ProblemDetailPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { getProblemById } = useProblems();
    const { executeCode, isExecuting } = useCodeExecution();

    const problem = getProblemById(id!);
    const [userCode, setUserCode] = useState('');
    const [result, setResult] = useState<any>(null);

    // problem이 로드될 때마다 userCode 초기화
    useEffect(() => {
        if (problem?.initialCode) {
            setUserCode(problem.initialCode);
        }
    }, [problem?.initialCode]);

    if (!problem) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">문제를 찾을 수 없습니다</h1>
                    <button
                        onClick={() => navigate('/')}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        홈으로 돌아가기
                    </button>
                </div>
            </div>
        );
    }

    const handleRunCode = async () => {
        const executionResult = await executeCode(userCode, problem.expectedOutput);
        setResult(executionResult);
    };

    const handleReset = () => {
        setUserCode(problem.initialCode);
        setResult(null);
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="mb-6">
                <button
                    onClick={() => navigate('/')}
                    className="mb-4 text-blue-600 hover:text-blue-800"
                >
                    ← 문제 목록으로
                </button>

                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {problem.title}
                </h1>

                <div className="flex items-center space-x-4 mb-4">
          <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
            {problem.difficulty === 'beginner' ? '초급' :
                problem.difficulty === 'intermediate' ? '중급' : '고급'}
          </span>
                    <span className="text-sm text-gray-500">
            {new Date(problem.createdAt).toLocaleDateString('ko-KR')}
          </span>
                </div>

                <p className="text-gray-700 mb-6">
                    {problem.description}
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">코드 작성</h2>

                    {/* 클립보드 헬퍼 버튼들 */}
                    <ClipboardHelper
                        code={userCode}
                        onCodeChange={setUserCode}
                    />

                    <CodeEditor
                        value={userCode}
                        onChange={setUserCode}
                        height="400px"
                    />

                    <div className="flex space-x-3 mt-4">
                        <button
                            onClick={handleRunCode}
                            disabled={isExecuting}
                            className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 font-medium"
                        >
                            {isExecuting ? '검증 중...' : '코드 실행 & 검증'}
                        </button>
                        <button
                            onClick={handleReset}
                            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                        >
                            초기화
                        </button>
                    </div>

                    {/* 키보드 단축키 안내 */}
                    <div className="mt-4 p-3 bg-gray-50 rounded-md text-xs text-gray-600">
                        <strong>키보드 단축키:</strong> Ctrl+C (복사), Ctrl+V (붙여넣기), Ctrl+Z (실행취소), Ctrl+F (찾기)
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">실행 결과</h2>

                    {problem.expectedOutput && (
                        <div className="mb-6">
                            <h3 className="text-sm font-medium text-gray-700 mb-2">예상 출력:</h3>
                            <pre className="bg-gray-100 p-3 rounded-md text-sm text-gray-800 whitespace-pre-wrap border">
                {problem.expectedOutput}
              </pre>
                        </div>
                    )}

                    {result && (
                        <div className="space-y-4">
                            {result.feedback && (
                                <div className={`p-4 rounded-lg border-2 ${
                                    result.isCorrect
                                        ? 'bg-green-50 border-green-200 text-green-800'
                                        : 'bg-red-50 border-red-200 text-red-800'
                                }`}>
                                    <div className="flex items-center">
                    <span className="text-2xl mr-2">
                      {result.isCorrect ? '🎉' : '❌'}
                    </span>
                                        <span className="font-bold text-lg">
                      {result.feedback}
                    </span>
                                    </div>
                                    {result.executionTime && (
                                        <div className="text-xs mt-2 opacity-75">
                                            실행 시간: {result.executionTime.toFixed(2)}ms
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className="border rounded-md">
                                <div className={`px-4 py-2 rounded-t-md ${
                                    result.success ? 'bg-blue-50 text-blue-800' : 'bg-red-50 text-red-800'
                                }`}>
                                    <h3 className="font-medium">
                                        {result.success ? '📋 실행 출력' : '🐛 실행 오류'}
                                    </h3>
                                </div>

                                <div className="p-4">
                                    {result.success ? (
                                        <pre className="text-sm text-gray-800 whitespace-pre-wrap bg-gray-50 p-3 rounded border">
                      {Array.isArray(result.output)
                          ? result.output.join('\n')
                          : String(result.output)
                      }
                    </pre>
                                    ) : (
                                        <p className="text-red-600 text-sm bg-red-50 p-3 rounded border">
                                            {result.error}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {result.success && !result.isCorrect && (
                                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                                    <h4 className="font-medium text-yellow-800 mb-2">💡 힌트</h4>
                                    <ul className="text-sm text-yellow-700 space-y-1">
                                        <li>• 출력 형식이 정확한지 확인해보세요</li>
                                        <li>• console.log() 사용법을 점검해보세요</li>
                                        <li>• 예상 출력과 실제 출력을 자세히 비교해보세요</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}