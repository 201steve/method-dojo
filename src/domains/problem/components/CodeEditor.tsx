import React, { useEffect, useRef } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import { defaultKeymap, history, historyKeymap } from '@codemirror/commands';
import { searchKeymap, highlightSelectionMatches } from '@codemirror/search';
import { keymap, lineNumbers, highlightActiveLine, dropCursor, rectangularSelection } from '@codemirror/view';
import {
    indentOnInput,
    bracketMatching,
    foldGutter,
    foldKeymap,
    syntaxHighlighting,
    defaultHighlightStyle
} from '@codemirror/language';
import { closeBrackets, autocompletion, closeBracketsKeymap, completionKeymap } from '@codemirror/autocomplete';

interface CodeEditorProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    height?: string;
}

export function CodeEditor({ value, onChange, placeholder, height = '300px' }: CodeEditorProps) {
    const editorRef = useRef<any>(null);

    // value가 변경될 때 에디터 강제 업데이트
    useEffect(() => {
        if (editorRef.current && value) {
            setTimeout(() => {
                if (editorRef.current) {
                    editorRef.current.focus();
                }
            }, 100);
        }
    }, [value]);

    // CodeMirror 확장 설정
    const extensions = [
        // 언어 지원
        javascript(),

        // 기본 편집 기능
        lineNumbers(),                    // 라인 번호 표시
        highlightActiveLine(),            // 현재 라인 하이라이트
        foldGutter(),                     // 코드 폴딩 거터
        dropCursor(),                     // 드래그 앤 드롭 커서
        indentOnInput(),                  // 자동 들여쓰기
        bracketMatching(),                // 괄호 매칭
        closeBrackets(),                  // 자동 괄호 닫기
        rectangularSelection(),           // 직사각형 선택
        highlightSelectionMatches(),      // 선택 항목 하이라이트

        // 문법 하이라이팅
        syntaxHighlighting(defaultHighlightStyle, { fallback: true }),

        // 자동완성
        autocompletion(),

        // 히스토리 (실행취소/다시실행)
        history(),

        // 키맵 설정
        keymap.of([
            // 기본 키맵 (복사, 붙여넣기, 실행취소 등)
            ...defaultKeymap,
            // 히스토리 키맵 (Ctrl+Z, Ctrl+Y)
            ...historyKeymap,
            // 검색 키맵 (Ctrl+F)
            ...searchKeymap,
            // 폴딩 키맵
            ...foldKeymap,
            // 자동완성 키맵
            ...completionKeymap,
            // 괄호 키맵
            ...closeBracketsKeymap,
            // 커스텀 키바인딩 (네이티브 클립보드 이벤트 허용)
            {
                key: 'Ctrl-c',
                run: () => false // 네이티브 복사 허용
            },
            {
                key: 'Ctrl-v',
                run: () => false // 네이티브 붙여넣기 허용
            },
            {
                key: 'Ctrl-x',
                run: () => false // 네이티브 잘라내기 허용
            },
            {
                key: 'Ctrl-a',
                run: () => false // 네이티브 전체선택 허용
            }
        ])
    ];

    return (
        <div className="border border-gray-300 rounded-md overflow-hidden">
            <CodeMirror
                ref={editorRef}
                value={value}
                height={height}
                extensions={extensions}
                theme={oneDark}
                placeholder={placeholder || '여기에 코드를 작성하세요...'}
                onChange={onChange}
                basicSetup={false} // 수동으로 모든 확장 설정
            />
        </div>
    );
}