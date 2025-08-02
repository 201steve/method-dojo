import type { Problem } from '@entities/problem/types/type';
import {
  ARRAY_METHODS,
  OBJECT_METHODS,
  type ArrayMethod,
  type ObjectMethod,
  type ProblemMethod,
} from '@features/problem-storage/hooks/useProblems';
import { ProblemDrawer } from '@shared/ui';
import { Button, Dropdown, Flex, Space, type MenuProps } from 'antd';
import { useState } from 'react';

type ProblemType = 'array' | 'object' | 'string' | 'number' | 'math';

const PROBLEM_TYPES = [
  { key: 'home', label: 'HOME', icon: '🏠' },
  { key: 'array', label: 'ARRAY', icon: '🔢' },
  { key: 'object', label: 'OBJECT', icon: '🔧' },
  { key: 'string', label: 'STRING', icon: '📝' },
  { key: 'number', label: 'NUMBER', icon: '🔢' },
  { key: 'math', label: 'MATH', icon: '📊' },
] as const;

interface GNBProps {
  onProblemSelect: (problem: Problem) => void;
  onHomeClick: () => void;
}

const GNB = ({ onProblemSelect, onHomeClick }: GNBProps) => {
  const [drawerType, setDrawerType] = useState<ProblemType | null>(null);
  const [drawerMethod, setDrawerMethod] = useState<ProblemMethod>('all');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleTypeClick = (key: string): void => {
    if (key === 'home') {
      onHomeClick();
    } else if (key !== 'array' && key !== 'object') {
      // Array, Object가 아닌 다른 카테고리들은 바로 drawer 열기
      const type = key as ProblemType;
      setDrawerType(type);
      setDrawerMethod('all');
      setIsDrawerOpen(true);
    }
    // Array, Object의 경우 드롭다운에서 처리하므로 여기서는 아무것도 하지 않음
  };

  const handleArrayMethodClick = (method: ArrayMethod): void => {
    setDrawerType('array');
    setDrawerMethod(method);
    setIsDrawerOpen(true);
  };

  const handleObjectMethodClick = (method: ObjectMethod): void => {
    setDrawerType('object');
    setDrawerMethod(method);
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = (): void => {
    setIsDrawerOpen(false);
    // Drawer가 완전히 닫힌 후에 타입을 null로 설정 (애니메이션 완료 대기)
    setTimeout(() => {
      setDrawerType(null);
      setDrawerMethod('all');
    }, 300);
  };

  // Array 메서드 드롭다운 메뉴 아이템
  const arrayMethodItems: MenuProps['items'] = ARRAY_METHODS.map((method) => ({
    key: method.key,
    label: (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '4px 0',
        }}
      >
        <span style={{ fontSize: '14px' }}>{method.icon}</span>
        <div>
          <div style={{ fontWeight: '500' }}>{method.label}</div>
          <div style={{ fontSize: '12px', color: '#666' }}>
            {method.description}
          </div>
        </div>
      </div>
    ),
    onClick: () => handleArrayMethodClick(method.key as ArrayMethod),
  }));

  // Object 메서드 드롭다운 메뉴 아이템
  const objectMethodItems: MenuProps['items'] = OBJECT_METHODS.map(
    (method) => ({
      key: method.key,
      label: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 0',
          }}
        >
          <span style={{ fontSize: '14px' }}>{method.icon}</span>
          <div>
            <div style={{ fontWeight: '500' }}>{method.label}</div>
            <div style={{ fontSize: '12px', color: '#666' }}>
              {method.description}
            </div>
          </div>
        </div>
      ),
      onClick: () => handleObjectMethodClick(method.key as ObjectMethod),
    })
  );

  const renderButton = (type: (typeof PROBLEM_TYPES)[number]) => {
    const baseButton = (
      <Button
        type="text"
        size="large"
        onClick={() => handleTypeClick(type.key)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          height: '40px',
          fontWeight: '500',
        }}
      >
        <span style={{ fontSize: '16px' }}>{type.icon}</span>
        {type.label}
      </Button>
    );

    // Array, Object 카테고리만 드롭다운으로 감싸기
    if (type.key === 'array') {
      return (
        <Dropdown
          menu={{ items: arrayMethodItems }}
          placement="bottomLeft"
          trigger={['click']}
        >
          {baseButton}
        </Dropdown>
      );
    }

    if (type.key === 'object') {
      return (
        <Dropdown
          menu={{ items: objectMethodItems }}
          placement="bottomLeft"
          trigger={['click']}
        >
          {baseButton}
        </Dropdown>
      );
    }

    return baseButton;
  };

  return (
    <>
      <Flex
        style={{
          width: '100%',
          height: '60px',
          padding: '0 24px',
          borderBottom: '1px solid #f0f0f0',
          backgroundColor: '#fff',
        }}
        align="center"
        justify="center"
      >
        <Space size="middle">
          {PROBLEM_TYPES.map((type) => (
            <div key={type.key}>{renderButton(type)}</div>
          ))}
        </Space>
      </Flex>

      <ProblemDrawer
        type={drawerType}
        method={drawerMethod}
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        onProblemSelect={onProblemSelect}
      />
    </>
  );
};

export default GNB;
