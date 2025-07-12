// src/features/problem-detail/hooks/useProblemDetail.ts
import type { Execution, Problem } from '@entities/index';
import { useCodeExecution } from '@features/code-execution';
import { useProblems } from '@features/problem-storage';
import { useState, useEffect } from 'react';

interface UseProblemDetailReturn {
  /** 현재 문제 */
  problem: Problem | undefined;
  /** 사용자 코드 */
  userCode: string;
  /** 실행 결과 */
  result: Execution | null;
  /** 실행 중 상태 */
  isExecuting: boolean;
  /** 코드 변경 핸들러 */
  handleCodeChange: (code: string) => void;
  /** 코드 실행 핸들러 */
  handleRunCode: () => Promise<void>;
  /** 코드 초기화 핸들러 */
  handleReset: () => void;
  /** 문제 로딩 상태 */
  isLoading: boolean;
  /** 에러 상태 */
  error: string | null;
}

export function useProblemDetail(problemId: string): UseProblemDetailReturn {
  const { getProblemById } = useProblems();
  const { executeCode, isExecuting } = useCodeExecution();

  const [userCode, setUserCode] = useState('');
  const [result, setResult] = useState<Execution | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const problem = getProblemById(problemId);

  // 문제 로드 및 초기화
  useEffect(() => {
    if (problemId) {
      setIsLoading(true);
      setError(null);

      // 문제가 존재하지 않는 경우
      if (!problem) {
        setError('문제를 찾을 수 없습니다');
        setIsLoading(false);
        return;
      }

      // 문제가 로드된 경우 초기 코드 설정
      if (problem.initialCode) {
        setUserCode(problem.initialCode);
      }

      setIsLoading(false);
    }
  }, [problemId, problem]);

  // 코드 변경 핸들러
  const handleCodeChange = (code: string): void => {
    setUserCode(code);
  };

  // 코드 실행 핸들러
  const handleRunCode = async (): Promise<void> => {
    if (!problem) return;

    try {
      const executionResult = await executeCode(
        userCode,
        problem.expectedOutput
      );
      setResult(executionResult);
    } catch (error) {
      setResult({
        success: false,
        error:
          error instanceof Error
            ? error.message
            : '실행 중 오류가 발생했습니다',
        isCorrect: false,
        feedback: '❌ 코드 실행 중 오류가 발생했습니다.',
        executionTime: 0,
      });
    }
  };

  // 코드 초기화 핸들러
  const handleReset = (): void => {
    if (problem?.initialCode) {
      setUserCode(problem.initialCode);
    }
    setResult(null);
  };

  return {
    problem,
    userCode,
    result,
    isExecuting,
    handleCodeChange,
    handleRunCode,
    handleReset,
    isLoading,
    error,
  };
}
