import type { Execution } from '@entities/execution/types/type';
import { Card, Typography, Alert, Flex } from 'antd';

interface ExecutionResultProps {
  /** 예상 출력 */
  expectedOutput?: string;
  /** 실행 결과 */
  result?: Execution | null;
}

export function ExecutionResult({
  expectedOutput,
  result,
}: ExecutionResultProps) {
  return (
    <Card
      title={
        <Typography.Title level={4} style={{ margin: 0 }}>
          실행 결과
        </Typography.Title>
      }
      style={{ borderRadius: 12 }}
    >
      <Flex vertical>
        {expectedOutput && (
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
              {expectedOutput}
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
  );
}
