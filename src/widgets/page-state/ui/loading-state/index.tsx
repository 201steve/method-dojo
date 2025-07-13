// src/widgets/page-state/ui/LoadingState.tsx
import { Flex, Typography } from 'antd';

interface LoadingStateProps {
  /** 로딩 메시지 */
  message?: string;
}

export function LoadingState({ message = '로딩 중...' }: LoadingStateProps) {
  return (
    <Flex vertical style={{ width: '100%', padding: '40px' }}>
      <Typography.Title level={3}>{message}</Typography.Title>
    </Flex>
  );
}
