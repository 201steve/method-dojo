import { Button, Flex } from 'antd';
import React, { useState } from 'react';

interface ClipboardHelperProps {
  code: string;
  onCodeChange: (code: string) => void;
}

export function ClipboardHelper({ code, onCodeChange }: ClipboardHelperProps) {
  const [isVisible, setIsVisible] = useState(false);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      alert('코드가 클립보드에 복사되었습니다!');
    } catch (err) {
      console.error('복사 실패:', err);
      // 폴백: textarea를 이용한 복사
      const textarea = document.createElement('textarea');
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      alert('코드가 복사되었습니다!');
    }
  };

  const handlePasteCode = async () => {
    try {
      const text = await navigator.clipboard.readText();
      onCodeChange(text);
      alert('클립보드 내용이 붙여넣어졌습니다!');
    } catch (err) {
      console.error('붙여넣기 실패:', err);
      setIsVisible(true);
    }
  };

  const handleManualPaste = () => {
    const text = prompt('붙여넣을 코드를 입력하세요:');
    if (text) {
      onCodeChange(text);
    }
    setIsVisible(false);
  };

  return (
    <Flex gap={8} style={{ marginBottom: 8 }}>
      <Button
        size="small"
        type="primary"
        onClick={handleCopyCode}
        title="현재 코드 복사"
        icon={<span>📋</span>}
        style={{
          background: '#e6f4ff',
          color: '#1677ff',
          borderColor: '#91caff',
        }}
      >
        복사
      </Button>
      <Button
        size="small"
        type="primary"
        onClick={handlePasteCode}
        title="클립보드에서 붙여넣기"
        icon={<span>📥</span>}
        style={{
          background: '#d9f7be',
          color: '#389e0d',
          borderColor: '#b7eb8f',
        }}
      >
        붙여넣기
      </Button>
      {isVisible && (
        <Button
          size="small"
          type="primary"
          onClick={handleManualPaste}
          icon={<span>✏️</span>}
          style={{
            background: '#fff7e6',
            color: '#d46b08',
            borderColor: '#ffd591',
          }}
        >
          수동 입력
        </Button>
      )}
    </Flex>
  );
}
