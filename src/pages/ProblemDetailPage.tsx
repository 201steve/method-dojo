import { useProblemDetail } from '@features/problem-detail';
import { PageNavigation } from '@shared/ui';
import { ErrorState } from '@widgets/page-state/ui/error-state';
import { LoadingState } from '@widgets/page-state/ui/loading-state';
import { ProblemInfo } from '@widgets/problem-info/ui/problem-info';
import { ProblemSolvingWorkspace } from '@widgets/problem-solving-workspace/ui';
import { Flex } from 'antd';
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
    return <LoadingState message="문제를 불러오는 중..." />;
  }

  // 에러 상태
  if (error || !problem) {
    return (
      <ErrorState
        message={error || '문제를 찾을 수 없습니다'}
        onRetry={() => navigate('/')}
        retryText="홈으로 돌아가기"
      />
    );
  }

  return (
    <Flex vertical style={{ width: '100%', padding: '40px' }}>
      <PageNavigation backText="← 문제 목록으로" backPath="/" />

      <ProblemInfo problem={problem} />

      <ProblemSolvingWorkspace
        problem={problem}
        code={userCode}
        result={result}
        isExecuting={isExecuting}
        onCodeChange={handleCodeChange}
        onRunCode={handleRunCode}
        onReset={handleReset}
      />
    </Flex>
  );
}
