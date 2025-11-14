import type { Problem } from '@entities/problem/types/type';
import { useProblemDetail } from '@features/problem-detail';
import type { ProblemMethod } from '@features/problem-storage/hooks/useProblems';
import { ProblemDrawer } from '@shared/ui';
import HomeIntro from '@widgets/home-intro/ui';
import { ErrorState } from '@widgets/page-state/ui/error-state';
import { LoadingState } from '@widgets/page-state/ui/loading-state';
import { ProblemInfo } from '@widgets/problem-info/ui/problem-info';
import { ProblemSolvingWorkspace } from '@widgets/problem-solving-workspace/ui';
import { Flex, Typography } from 'antd';
import { useState } from 'react';

import GNB from '../gnb';

type ProblemType = 'array' | 'object' | 'string' | 'number' | 'math';

const CommonLayout = () => {
  const [currentView, setCurrentView] = useState<'home' | 'problem'>('home');
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);

  // Drawer 상태 관리 추가
  const [drawerType, setDrawerType] = useState<ProblemType | null>(null);
  const [drawerMethod, setDrawerMethod] = useState<ProblemMethod>('all');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
  } = useProblemDetail(selectedProblem?.id || '');

  const handleProblemSelect = (problem: Problem): void => {
    setSelectedProblem(problem);
    setCurrentView('problem');
  };

  const handleHomeClick = (): void => {
    setCurrentView('home');
    setSelectedProblem(null);
  };

  // Drawer 제어 함수들 추가
  const handleDrawerOpen = (
    type: ProblemType,
    method?: ProblemMethod
  ): void => {
    setDrawerType(type);
    setDrawerMethod(method || 'all');
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = (): void => {
    setIsDrawerOpen(false);
  };

  return (
    <Flex vertical style={{ minHeight: '100vh' }}>
      <GNB onHomeClick={handleHomeClick} onDrawerOpen={handleDrawerOpen} />

      <Flex style={{ flex: 1, position: 'relative' }}>
        <ProblemDrawer
          type={drawerType}
          method={drawerMethod}
          open={isDrawerOpen}
          onClose={handleDrawerClose}
          onProblemSelect={handleProblemSelect}
        />
        <h1>helloworld</h1>
        {/* 메인 콘텐츠 영역 */}
        <div
          style={{
            flex: 1,
            marginLeft: isDrawerOpen ? '300px' : '0',
            transition: 'margin-left 0.3s ease',
            padding: currentView === 'home' ? '0' : '40px',
            minHeight: '100%',
          }}
        >
          {currentView === 'home' ? (
            <HomeIntro />
          ) : !selectedProblem ? (
            // 문제가 선택되지 않았을 때 (문제 풀이 모드)
            <Flex
              vertical
              align="center"
              justify="center"
              style={{ width: '100%', height: '100%' }}
            >
              <Typography.Title level={2} type="secondary">
                문제를 선택해주세요
              </Typography.Title>
              <Typography.Text type="secondary">
                상단 메뉴에서 원하는 문제 타입을 선택하여 시작하세요!
              </Typography.Text>
            </Flex>
          ) : isLoading ? (
            <LoadingState message="문제를 불러오는 중..." />
          ) : error || !problem ? (
            <ErrorState
              message={error || '문제를 찾을 수 없습니다'}
              onRetry={() => setSelectedProblem(null)}
              retryText="다른 문제 선택하기"
            />
          ) : (
            // 문제가 선택되었을 때
            <Flex vertical style={{ width: '100%' }} gap={24}>
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
          )}
        </div>
      </Flex>
    </Flex>
  );
};

export default CommonLayout;
