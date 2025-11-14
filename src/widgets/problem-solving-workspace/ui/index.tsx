// src/widgets/problem-solving-workspace/ui/ProblemSolvingWorkspace.tsx
import type { Execution } from '@entities/execution/types/type';
import type { Problem } from '@entities/problem/types/type';
import { CodeWorkspace } from '@widgets/code-workspace/ui';
import { ExecutionResult } from '@widgets/execution-result/ui';
import { Row, Col } from 'antd';

interface ProblemSolvingWorkspaceProps {
  problem: Problem;
  code: string;
  result: Execution | null;
  isExecuting: boolean;
  onCodeChange: (code: string) => void;
  onRunCode: () => void;
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
