import { ClipboardHelper, CodeEditor } from '@features/code-editing';
import { Card, Typography, Button, Alert, Flex } from 'antd';

interface CodeWorkspaceProps {
  /** 현재 코드 값 */
  code: string;
  /** 코드 변경 핸들러 */
  onCodeChange: (code: string) => void;
  /** 코드 실행 핸들러 */
  onRunCode: () => void;
  /** 초기화 핸들러 */
  onReset: () => void;
  /** 실행 중 상태 */
  isExecuting: boolean;
  /** 에디터 높이 */
  editorHeight?: string;
}

export function CodeWorkspace({
  code,
  onCodeChange,
  onRunCode,
  onReset,
  isExecuting,
  editorHeight = '400px',
}: CodeWorkspaceProps) {
  return (
    <Card
      title={
        <Typography.Title level={4} style={{ margin: 0 }}>
          코드 작성
        </Typography.Title>
      }
      style={{ borderRadius: 12 }}
    >
      <Flex vertical>
        <ClipboardHelper code={code} onCodeChange={onCodeChange} />
        <CodeEditor
          value={code}
          onChange={onCodeChange}
          height={editorHeight}
        />
        <Flex vertical>
          <Button
            type="primary"
            onClick={onRunCode}
            loading={isExecuting}
            disabled={isExecuting}
          >
            {isExecuting ? '검증 중...' : '코드 실행 & 검증'}
          </Button>
          <Button onClick={onReset}>초기화</Button>
        </Flex>
        <Alert
          type="info"
          showIcon
          message={
            <span>
              <strong>키보드 단축키:</strong> Ctrl+C (복사), Ctrl+V (붙여넣기),
              Ctrl+Z (실행취소), Ctrl+F (찾기)
            </span>
          }
          style={{ fontSize: 12, marginTop: 8 }}
        />
      </Flex>
    </Card>
  );
}
