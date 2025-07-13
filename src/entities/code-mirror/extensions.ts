import {
  autocompletion,
  closeBrackets,
  closeBracketsKeymap,
  completionKeymap,
} from '@codemirror/autocomplete';
import { defaultKeymap, history, historyKeymap } from '@codemirror/commands';
import { javascript } from '@codemirror/lang-javascript';
import {
  bracketMatching,
  defaultHighlightStyle,
  foldGutter,
  foldKeymap,
  indentOnInput,
  syntaxHighlighting,
} from '@codemirror/language';
import { highlightSelectionMatches, searchKeymap } from '@codemirror/search';
import type { Extension } from '@codemirror/state';
import {
  dropCursor,
  highlightActiveLine,
  keymap,
  lineNumbers,
  rectangularSelection,
} from '@codemirror/view';

export const EXTENSIONS: Extension[] = [
  // 언어 지원
  javascript(),

  // 기본 편집 기능
  lineNumbers(), // 라인 번호 표시
  highlightActiveLine(), // 현재 라인 하이라이트
  foldGutter(), // 코드 폴딩 거터
  dropCursor(), // 드래그 앤 드롭 커서
  indentOnInput(), // 자동 들여쓰기
  bracketMatching(), // 괄호 매칭
  closeBrackets(), // 자동 괄호 닫기
  rectangularSelection(), // 직사각형 선택
  highlightSelectionMatches(), // 선택 항목 하이라이트

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
      run: () => false, // 네이티브 복사 허용
    },
    {
      key: 'Ctrl-v',
      run: () => false, // 네이티브 붙여넣기 허용
    },
    {
      key: 'Ctrl-x',
      run: () => false, // 네이티브 잘라내기 허용
    },
    {
      key: 'Ctrl-a',
      run: () => false, // 네이티브 전체선택 허용
    },
  ]),
];
