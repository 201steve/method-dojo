import type { Execution } from '@entities/index';
import { ClipboardHelper, CodeEditor } from '@features/code-editing';
import { useCodeExecution } from '@features/code-execution';
import { useProblems } from '@features/problem-storage';
import { Card, Typography, Row, Col, Button, Tag, Alert, Flex } from 'antd';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';

export function ProblemDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getProblemById } = useProblems();
  const { executeCode, isExecuting } = useCodeExecution();

  const problem = getProblemById(id!);
  const [userCode, setUserCode] = useState('');
  const [result, setResult] = useState<Execution | null>(null);

  // problem이 로드될 때마다 userCode 초기화
  useEffect(() => {
    if (problem?.initialCode) {
      setUserCode(problem.initialCode);
    }
  }, [problem?.initialCode]);

  if (!problem) {
    return (
      <Flex vertical style={{ width: '100%' }}>
        <Typography.Title level={3}>문제를 찾을 수 없습니다</Typography.Title>
        <Button type="primary" onClick={() => navigate('/')}>
          홈으로 돌아가기
        </Button>
      </Flex>
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
    <Flex vertical style={{ width: '100%', padding: '40px' }}>
      <Button
        type="link"
        onClick={() => navigate('/')}
        style={{ padding: 0, marginBottom: 8 }}
      >
        ← 문제 목록으로
      </Button>
      <Card style={{ borderRadius: 12 }}>
        <Flex vertical>
          <Typography.Title level={2}>{problem.title}</Typography.Title>
          <Flex align="center" gap={16}>
            <Tag
              color={
                problem.difficulty === 'beginner'
                  ? 'green'
                  : problem.difficulty === 'intermediate'
                    ? 'gold'
                    : 'red'
              }
            >
              {problem.difficulty === 'beginner'
                ? '초급'
                : problem.difficulty === 'intermediate'
                  ? '중급'
                  : '고급'}
            </Tag>
          </Flex>
          <Typography.Paragraph type="secondary">
            {problem.description}
          </Typography.Paragraph>
        </Flex>
      </Card>
      <Row gutter={[32, 32]}>
        <Col xs={24} lg={12}>
          <Card
            title={
              <Typography.Title level={4} style={{ margin: 0 }}>
                코드 작성
              </Typography.Title>
            }
            style={{ borderRadius: 12 }}
          >
            <Flex vertical>
              <ClipboardHelper code={userCode} onCodeChange={setUserCode} />
              <CodeEditor
                value={userCode}
                onChange={setUserCode}
                height="400px"
              />
              <Flex vertical>
                <Button
                  type="primary"
                  onClick={handleRunCode}
                  loading={isExecuting}
                  disabled={isExecuting}
                >
                  {isExecuting ? '검증 중...' : '코드 실행 & 검증'}
                </Button>
                <Button onClick={handleReset}>초기화</Button>
              </Flex>
              <Alert
                type="info"
                showIcon
                message={
                  <span>
                    <strong>키보드 단축키:</strong> Ctrl+C (복사), Ctrl+V
                    (붙여넣기), Ctrl+Z (실행취소), Ctrl+F (찾기)
                  </span>
                }
                style={{ fontSize: 12, marginTop: 8 }}
              />
            </Flex>
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card
            title={
              <Typography.Title level={4} style={{ margin: 0 }}>
                실행 결과
              </Typography.Title>
            }
            style={{ borderRadius: 12 }}
          >
            <Flex vertical>
              {problem.expectedOutput && (
                <div>
                  <Typography.Text strong>예상 출력:</Typography.Text>
                  <pre
                    style={{
                      background: '#f5f5f5',
                      padding: 12,
                      borderRadius: 8,
                      fontSize: 14,
                      marginTop: 8,
                    }}
                  >
                    {problem.expectedOutput}
                  </pre>
                </div>
              )}
              {result && (
                <Flex vertical>
                  {result.feedback && (
                    <Alert
                      type={result.isCorrect ? 'success' : 'error'}
                      showIcon
                      message={result.feedback}
                      description={
                        result.executionTime
                          ? `실행 시간: ${result.executionTime.toFixed(2)}ms`
                          : undefined
                      }
                    />
                  )}
                  <Card>
                    <div
                      style={{
                        background: result.success ? '#e6f4ff' : '#fff1f0',
                        color: result.success ? '#1677ff' : '#cf1322',
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        padding: '8px 16px',
                      }}
                    >
                      <Typography.Text strong>
                        {result.success ? '📋 실행 출력' : '🐛 실행 오류'}
                      </Typography.Text>
                    </div>
                    <div style={{ padding: '16px' }}>
                      {result.success ? (
                        <pre
                          style={{
                            fontSize: 14,
                            color: '#222',
                            background: 'none',
                            margin: 0,
                          }}
                        >
                          {Array.isArray(result.output)
                            ? result.output.join('\n')
                            : String(result.output)}
                        </pre>
                      ) : (
                        <Typography.Text type="danger">
                          {result.error}
                        </Typography.Text>
                      )}
                    </div>
                  </Card>
                  {result.success && !result.isCorrect && (
                    <Alert
                      type="warning"
                      showIcon
                      message={
                        <span>
                          <strong>💡 힌트</strong>
                        </span>
                      }
                      description={
                        <ul style={{ margin: 0, paddingLeft: 16 }}>
                          <li>• 출력 형식이 정확한지 확인해보세요</li>
                          <li>• console.log() 사용법을 점검해보세요</li>
                          <li>• 예상 출력과 실제 출력을 자세히 비교해보세요</li>
                        </ul>
                      }
                    />
                  )}
                </Flex>
              )}
            </Flex>
          </Card>
        </Col>
      </Row>
    </Flex>
  );
}
