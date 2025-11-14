import type { Execution } from '@entities/execution/types/type';
import { useState } from 'react';

export function useCodeExecution() {
  const [isExecuting, setIsExecuting] = useState(false);

  const executeCode = async (
    code: string,
    expectedOutput?: string
  ): Promise<Execution> => {
    setIsExecuting(true);

    try {
      const startTime = performance.now();

      // 콘솔 출력을 캡처하기 위한 배열
      const consoleOutputs: unknown[] = [];

      // console.log 오버라이드
      const originalConsoleLog = console.log;
      console.log = (...args: unknown[]) => {
        consoleOutputs.push(...args);
        originalConsoleLog(...args);
      };

      // 코드 실행
      const func = new Function(code);
      const result = func();

      // console.log 복원
      console.log = originalConsoleLog;

      const endTime = performance.now();
      const executionTime = endTime - startTime;

      // 실제 출력 결과 정리
      const actualOutput = result !== undefined ? result : consoleOutputs;
      const outputString = Array.isArray(actualOutput)
        ? actualOutput.join('\n')
        : String(actualOutput);

      // 정답 검증
      let isCorrect = false;
      let feedback = '';
      console.log(feedback);
      if (expectedOutput) {
        // 공백과 개행 정규화해서 비교
        const normalizedActual = outputString.trim().replace(/\s+/g, ' ');
        const normalizedExpected = expectedOutput.trim().replace(/\s+/g, ' ');

        isCorrect = normalizedActual === normalizedExpected;

        if (isCorrect) {
          feedback = '🎉 정답입니다!';
        } else {
          feedback = '❌ 틀렸습니다. 예상 출력과 다릅니다.';
        }
      }

      return {
        success: true,
        output: actualOutput,
        executionTime,
        isCorrect,
        feedback,
      };
    } catch (error) {
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
      setIsExecuting(false);
    }
  };

  return {
    executeCode,
    isExecuting,
  };
}
