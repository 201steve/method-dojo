import { oneDark } from '@codemirror/theme-one-dark';
import { EXTENSIONS } from '@entities/code-mirror/extensions';
import CodeMirror from '@uiw/react-codemirror';
import type { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { Card } from 'antd';
import { useEffect, useRef } from 'react';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  height?: string;
}

export function CodeEditor({
  value,
  onChange,
  placeholder,
  height = '300px',
}: CodeEditorProps) {
  const editorRef = useRef<ReactCodeMirrorRef>(null);

  // value가 변경될 때 에디터 강제 업데이트
  useEffect(() => {
    if (editorRef.current && value) {
      setTimeout(() => {
        if (editorRef.current && editorRef.current.view) {
          editorRef.current.view.focus();
        }
      }, 100);
    }
  }, [value]);

  return (
    <Card
      variant="outlined"
      styles={{ body: { padding: 0, borderRadius: 8, overflow: 'hidden' } }}
    >
      <CodeMirror
        ref={editorRef}
        value={value}
        height={height}
        extensions={EXTENSIONS}
        theme={oneDark}
        placeholder={placeholder || '여기에 코드를 작성하세요...'}
        onChange={onChange}
        basicSetup={false} // 수동으로 모든 확장 설정
      />
    </Card>
  );
}
