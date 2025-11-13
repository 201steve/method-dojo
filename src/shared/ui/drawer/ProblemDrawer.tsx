// src/shared/ui/drawer/ProblemDrawer.tsx
import { CloseOutlined, CheckCircleOutlined } from '@ant-design/icons';
import type { Problem } from '@entities/problem/types/type';
import {
  useProblems,
  type ProblemMethod,
} from '@features/problem-storage/hooks/useProblems';
import { Button, Card, Space, Typography } from 'antd';

type ProblemType = 'array' | 'object' | 'string' | 'number' | 'math';

interface ProblemDrawerProps {
  type: ProblemType | null;
  method?: ProblemMethod;
  open: boolean;
  onClose: () => void;
  onProblemSelect: (problem: Problem) => void;
}

const TYPE_CONFIG = {
  array: { title: '🔢 Array 문제', icon: '🔢' },
  object: { title: '🔧 Object 문제', icon: '🔧' },
  string: { title: '📝 String 문제', icon: '📝' },
  number: { title: '🔢 Number 문제', icon: '🔢' },
  math: { title: '📊 Math 문제', icon: '📊' },
} as const;

const METHOD_CONFIG = {
  // Array 메서드들
  forEach: { title: 'forEach', description: '배열 순회', icon: '🔄' },
  map: { title: 'map', description: '배열 변환', icon: '🔄' },
  filter: { title: 'filter', description: '배열 필터링', icon: '🔍' },
  find: { title: 'find', description: '요소 찾기', icon: '🎯' },
  split: { title: 'split', description: '문자열 분리', icon: '✂️' },
  join: { title: 'join', description: '배열 연결', icon: '🔗' },
  reduce: { title: 'reduce', description: '배열 축약', icon: '📉' },
  slice: { title: 'slice', description: '배열 잘라내기', icon: '🍰' },
  indexOf: { title: 'indexOf', description: '인덱스 찾기', icon: '📍' },
  sort: { title: 'sort', description: '배열 정렬', icon: '📊' },
  some: { title: 'some', description: '일부 조건 확인', icon: '❓' },
  every: { title: 'every', description: '모든 조건 확인', icon: '✅' },
  // Object 메서드들
  basic: { title: 'Basic', description: '기본 객체 조작', icon: '🔧' },
  keys: { title: 'Object.keys', description: '키 목록 가져오기', icon: '🔑' },
  values: {
    title: 'Object.values',
    description: '값 목록 가져오기',
    icon: '💎',
  },
  entries: {
    title: 'Object.entries',
    description: '키-값 쌍 처리',
    icon: '📋',
  },
  assign: { title: 'Object.assign', description: '객체 병합', icon: '🔗' },
  advanced: { title: 'Advanced', description: '고급 객체 기능', icon: '⚡' },
} as const;

export function ProblemDrawer({
  type,
  method = 'all',
  open,
  onClose,
  onProblemSelect,
}: ProblemDrawerProps) {
  const { getProblemsByTypeAndMethod } = useProblems();

  if (!type) {
    return null;
  }

  const problems = getProblemsByTypeAndMethod(type, method);
  const config = TYPE_CONFIG[type];

  // 제목 생성 (Array나 Object이고 특정 메서드가 선택된 경우)
  const getDrawerTitle = (): string => {
    if (type === 'array' && method && method !== 'all') {
      const methodConfig = METHOD_CONFIG[method as keyof typeof METHOD_CONFIG];
      return `🔢 Array.${methodConfig.title}() 문제`;
    }
    if (type === 'object' && method && method !== 'all') {
      const methodConfig = METHOD_CONFIG[method as keyof typeof METHOD_CONFIG];
      return `🔧 ${methodConfig.title} 문제`;
    }
    return config.title;
  };

  // 문제 선택 핸들러 (Drawer는 닫지 않음)
  const handleProblemSelect = (problem: Problem): void => {
    onProblemSelect(problem);
    // Drawer를 닫지 않음
  };

  // 난이도별로 문제 분류
  const beginnerProblems = problems.filter((p) => p.difficulty === 'beginner');
  const intermediateProblems = problems.filter(
    (p) => p.difficulty === 'intermediate'
  );
  const advancedProblems = problems.filter((p) => p.difficulty === 'advanced');

  return (
    <div
      style={{
        position: 'fixed',
        left: open ? '0' : '-300px',
        top: '60px', // GNB 높이만큼 아래에 위치
        width: '300px',
        height: 'calc(100vh - 60px)',
        backgroundColor: '#fff',
        borderRight: '1px solid #f0f0f0',
        boxShadow: '2px 0 8px rgba(0, 0, 0, 0.1)',
        transition: 'left 0.3s ease',
        zIndex: 1000,
        overflow: 'auto',
      }}
    >
      {/* X 버튼이 있는 헤더 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px',
          borderBottom: '1px solid #f0f0f0',
          position: 'sticky',
          top: 0,
          backgroundColor: '#fff',
          zIndex: 1,
        }}
      >
        <Typography.Title level={5} style={{ margin: 0 }}>
          {getDrawerTitle()}
        </Typography.Title>
        <Button
          type="text"
          icon={<CloseOutlined />}
          onClick={onClose}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </div>

      {/* TodoList 스타일의 문제 목록 */}
      <div style={{ padding: '16px' }}>
        <Space direction="vertical" size={24} style={{ width: '100%' }}>
          {/* 메서드 설명 (Array 메서드가 선택된 경우) */}
          {(type === 'array' || type === 'object') &&
            method &&
            method !== 'all' && (
              <div
                style={{
                  padding: '12px',
                  backgroundColor: type === 'array' ? '#f6ffed' : '#f0f5ff',
                  border:
                    type === 'array'
                      ? '1px solid #b7eb8f'
                      : '1px solid #adc6ff',
                  borderRadius: '6px',
                  marginBottom: '8px',
                }}
              >
                <Typography.Text
                  style={{
                    fontSize: '13px',
                    color: type === 'array' ? '#389e0d' : '#1890ff',
                  }}
                >
                  {
                    METHOD_CONFIG[method as keyof typeof METHOD_CONFIG]
                      ?.description
                  }{' '}
                  관련 문제들입니다
                </Typography.Text>
              </div>
            )}

          {/* TodoList 스타일 초급 섹션 */}
          {beginnerProblems.length > 0 && (
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Typography.Title
                level={5}
                style={{ marginBottom: 8, color: '#52c41a' }}
              >
                🟢 초급 ({beginnerProblems.length}문제)
              </Typography.Title>
              <Space direction="vertical" size={8} style={{ width: '100%' }}>
                {beginnerProblems.map((problem) => (
                  <Card
                    key={problem.id}
                    size="small"
                    hoverable
                    onClick={() => handleProblemSelect(problem)}
                    style={{
                      cursor: 'pointer',
                      border: '1px solid #d9d9d9',
                      borderRadius: '6px',
                    }}
                    bodyStyle={{ padding: '12px' }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <CheckCircleOutlined
                        style={{ color: '#52c41a', fontSize: '16px' }}
                      />
                      <div style={{ flex: 1 }}>
                        <Typography.Text strong style={{ fontSize: '14px' }}>
                          {problem.title}
                        </Typography.Text>
                        <div
                          style={{
                            fontSize: '12px',
                            color: '#666',
                            marginTop: '2px',
                          }}
                        >
                          {problem.description}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </Space>
            </Space>
          )}

          {/* TodoList 스타일 중급 섹션 */}
          {intermediateProblems.length > 0 && (
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Typography.Title
                level={5}
                style={{ marginBottom: 8, color: '#faad14' }}
              >
                🟡 중급 ({intermediateProblems.length}문제)
              </Typography.Title>
              <Space direction="vertical" size={8} style={{ width: '100%' }}>
                {intermediateProblems.map((problem) => (
                  <Card
                    key={problem.id}
                    size="small"
                    hoverable
                    onClick={() => handleProblemSelect(problem)}
                    style={{
                      cursor: 'pointer',
                      border: '1px solid #d9d9d9',
                      borderRadius: '6px',
                    }}
                    bodyStyle={{ padding: '12px' }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <CheckCircleOutlined
                        style={{ color: '#faad14', fontSize: '16px' }}
                      />
                      <div style={{ flex: 1 }}>
                        <Typography.Text strong style={{ fontSize: '14px' }}>
                          {problem.title}
                        </Typography.Text>
                        <div
                          style={{
                            fontSize: '12px',
                            color: '#666',
                            marginTop: '2px',
                          }}
                        >
                          {problem.description}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </Space>
            </Space>
          )}

          {/* TodoList 스타일 고급 섹션 */}
          {advancedProblems.length > 0 && (
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Typography.Title
                level={5}
                style={{ marginBottom: 8, color: '#f5222d' }}
              >
                🔴 고급 ({advancedProblems.length}문제)
              </Typography.Title>
              <Space direction="vertical" size={8} style={{ width: '100%' }}>
                {advancedProblems.map((problem) => (
                  <Card
                    key={problem.id}
                    size="small"
                    hoverable
                    onClick={() => handleProblemSelect(problem)}
                    style={{
                      cursor: 'pointer',
                      border: '1px solid #d9d9d9',
                      borderRadius: '6px',
                    }}
                    bodyStyle={{ padding: '12px' }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <CheckCircleOutlined
                        style={{ color: '#f5222d', fontSize: '16px' }}
                      />
                      <div style={{ flex: 1 }}>
                        <Typography.Text strong style={{ fontSize: '14px' }}>
                          {problem.title}
                        </Typography.Text>
                        <div
                          style={{
                            fontSize: '12px',
                            color: '#666',
                            marginTop: '2px',
                          }}
                        >
                          {problem.description}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </Space>
            </Space>
          )}

          {/* 문제가 없는 경우 */}
          {problems.length === 0 && (
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <Typography.Title level={5} type="secondary">
                {config.icon} 문제 준비 중...
              </Typography.Title>
              <Typography.Text type="secondary">
                곧 다양한 문제들을 만나보실 수 있습니다!
              </Typography.Text>
            </div>
          )}
        </Space>
      </div>
    </div>
  );
}
