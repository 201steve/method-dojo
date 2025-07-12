// src/pages/ProblemDetailPage.tsx
import { useProblemDetail } from '@features/problem-detail';
import { PageNavigation } from '@shared/ui';
import { CodeWorkspace } from '@widgets/code-workspace';
import { ExecutionResult } from '@widgets/execution-result';
import { ProblemInfo } from '@widgets/problem-info';
import { Typography, Row, Col, Button, Flex } from 'antd';
import { useParams, useNavigate } from 'react-router';

export function ProblemDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    problem,
    userCode,
    result,
    isExecuting,
    handleCodeChange,
    handleRunCode,
    handleReset,
    isLoading,
    error,
  } = useProblemDetail(id!);

  // 로딩 상태
  if (isLoading) {
    return (
      <Flex vertical style={{ width: '100%', padding: '40px' }}>
        <Typography.Title level={3}>문제를 불러오는 중...</Typography.Title>
      </Flex>
    );
  }

  // 에러 상태
  if (error || !problem) {
    return (
      <Flex vertical style={{ width: '100%', padding: '40px' }}>
        <Typography.Title level={3}>
          {error || '문제를 찾을 수 없습니다'}
        </Typography.Title>
        <Button type="primary" onClick={() => navigate('/')}>
          홈으로 돌아가기
        </Button>
      </Flex>
    );
  }

  return (
    <Flex vertical style={{ width: '100%', padding: '40px' }}>
      <PageNavigation backText="← 문제 목록으로" backPath="/" />

      <ProblemInfo problem={problem} />

      <Row gutter={[32, 32]}>
        <Col xs={24} lg={12}>
          <CodeWorkspace
            code={userCode}
            onCodeChange={handleCodeChange}
            onRunCode={handleRunCode}
            onReset={handleReset}
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
    </Flex>
  );
}
