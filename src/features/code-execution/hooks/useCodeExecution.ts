import type { Execution } from '@entities/execution/types/type';
import { useState } from 'react';

export function useCodeExecution() {
  const [isExecuting, setIsExecuting] = useState(false);

  const executeCode = async (
    code: string,
    expectedOutput?: string
  ): Promise<Execution> => {
    setIsExecuting(true);

    // 1. 콘솔 캡처 설정
    // 원본 console.log를 백업하고, 출력을 저장할 배열을 생성합니다.
    const originalConsoleLog = console.log;
    const consoleOutputs: unknown[] = [];

    console.log = (...args: unknown[]) => {
      consoleOutputs.push(...args);
      originalConsoleLog(...args); // 실제 콘솔에도 로그를 출력합니다.
    };

    try {
      // 2. 코드 실행 및 시간 측정
      const startTime = performance.now();

      const func = new Function(code);
      const result: unknown = func(); // 'any' 대신 'unknown'을 명시적으로 사용

      const endTime = performance.now();
      const executionTime = endTime - startTime;

      // 3. 출력 결과 처리
      // 함수의 반환 값이 있으면 그것을, 없으면(undefined) 콘솔 출력 값을 사용합니다.
      const actualOutput: unknown =
        result !== undefined ? result : consoleOutputs;

      const outputString = Array.isArray(actualOutput)
        ? actualOutput.join('\n')
        : String(actualOutput);

      // 4. 정답 검증
      let isCorrect = false;
      let feedback = ''; // expectedOutput이 없는 경우 빈 문자열이 됩니다.

      if (expectedOutput) {
        // 공백과 개행을 정규화하여 비교
        const normalizedActual = outputString.trim().replace(/\s+/g, ' ');
        const normalizedExpected = expectedOutput.trim().replace(/\s+/g, ' ');

        isCorrect = normalizedActual === normalizedExpected;

        feedback = isCorrect
          ? '🎉 정답입니다!'
          : '❌ 틀렸습니다. 예상 출력과 다릅니다.';
      }

      return {
        success: true,
        output: actualOutput,
        executionTime,
        isCorrect,
        feedback,
      };
    } catch (error) {
      // 5. 에러 핸들링
      return {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : '알 수 없는 오류가 발생했습니다.',
        isCorrect: false,
        feedback: '❌ 코드 실행 중 오류가 발생했습니다.',
        executionTime: 0,
      };
    } finally {
      // 6. 정리 (가장 중요)
      // 성공하든, 오류가 발생하든 항상 console.log를 원본으로 복원합니다.
      console.log = originalConsoleLog;
      setIsExecuting(false);
    }
  };

  return {
    executeCode,
    isExecuting,
  };
}
