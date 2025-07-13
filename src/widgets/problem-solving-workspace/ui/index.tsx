// src/widgets/problem-solving-workspace/ui/ProblemSolvingWorkspace.tsx
import type { Execution } from '@entities/execution/types/type';
import type { Problem } from '@entities/problem/types/type';
import { CodeWorkspace } from '@widgets/code-workspace/ui';
import { ExecutionResult } from '@widgets/execution-result/ui';
import { Row, Col } from 'antd';

interface ProblemSolvingWorkspaceProps {
  /** 문제 정보 */
  problem: Problem;
  /** 현재 코드 */
  code: string;
  /** 실행 결과 */
  result: Execution | null;
  /** 실행 중 상태 */
  isExecuting: boolean;
  /** 코드 변경 핸들러 */
  onCodeChange: (code: string) => void;
  /** 코드 실행 핸들러 */
  onRunCode: () => void;
  /** 초기화 핸들러 */
  onReset: () => void;
}

export function ProblemSolvingWorkspace({
  problem,
  code,
  result,
  isExecuting,
  onCodeChange,
  onRunCode,
  onReset,
}: ProblemSolvingWorkspaceProps) {
  return (
    <Row gutter={[32, 32]}>
      <Col xs={24} lg={12}>
        <CodeWorkspace
          code={code}
          onCodeChange={onCodeChange}
          onRunCode={onRunCode}
          onReset={onReset}
          isExecuting={isExecuting}
          editorHeight="400px"
        />
      </Col>
      <Col xs={24} lg={12}>
        <ExecutionResult
          expectedOutput={problem.expectedOutput}
          result={result}
        />
      </Col>
    </Row>
  );
}
