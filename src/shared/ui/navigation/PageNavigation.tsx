import { Button } from 'antd';
import type { ReactNode } from 'react';
import { useNavigate } from 'react-router';

interface PageNavigationProps {
  /** 뒤로가기 버튼 텍스트 */
  backText?: string;
  /** 뒤로가기 대상 경로 */
  backPath?: string;
  /** 뒤로가기 버튼 클릭 핸들러 (커스텀 동작이 필요한 경우) */
  onBack?: () => void;
  /** 추가 네비게이션 요소들 */
  children?: ReactNode;
  /** 하단 마진 */
  bottomMargin?: number;
}

export function PageNavigation({
  backText = '← 뒤로가기',
  backPath = '/',
  onBack,
  children,
  bottomMargin = 8,
}: PageNavigationProps) {
  const navigate = useNavigate();

  const handleBack = (): void => {
    if (onBack) {
      onBack();
    } else {
      navigate(backPath);
    }
  };

  return (
    <div style={{ marginBottom: bottomMargin }}>
      <Button type="link" onClick={handleBack} style={{ padding: 0 }}>
        {backText}
      </Button>
      {children}
    </div>
  );
}
