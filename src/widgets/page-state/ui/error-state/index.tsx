// src/widgets/page-state/ui/ErrorState.tsx
import { Flex, Typography, Button } from 'antd';

interface ErrorStateProps {
  /** 에러 메시지 */
  message: string;
  /** 재시도 핸들러 */
  onRetry?: () => void;
  /** 재시도 버튼 텍스트 */
  retryText?: string;
}

export function ErrorState({
  message,
  onRetry,
  retryText = '다시 시도',
}: ErrorStateProps) {
  return (
    <Flex vertical style={{ width: '100%', padding: '40px' }}>
      <Typography.Title level={3}>{message}</Typography.Title>
      {onRetry && (
        <Button type="primary" onClick={onRetry}>
          {retryText}
        </Button>
      )}
    </Flex>
  );
}
