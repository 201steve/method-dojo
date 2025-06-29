import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import pluginImport from 'eslint-plugin-import';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    // React 관련 설정 추가
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // React 17+ JSX Transform 사용 시 React import 불필요
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
    },
  },
  {
    plugins: {
      import: pluginImport,
    },
    rules: {
      // Import 순서 규칙
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      // 중복 import 방지
      'import/no-duplicates': 'error',
      // 존재하지 않는 모듈 import 방지
      'import/no-unresolved': 'off', // TypeScript가 처리하므로 off
      // 기본 export가 있는 모듈에서 named import 사용 방지
      'import/no-named-as-default': 'warn',
      // 사용하지 않는 import 방지 (TypeScript에서 처리)
      'import/no-unused-modules': 'off',
    },
  },
  {
    // TypeScript 파일에 대한 추가 규칙
    files: ['**/*.{ts,tsx}'],
    rules: {
      // TypeScript에서 type import 강제 (rules/import-type.mdc 규칙 적용)
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: false,
        },
      ],
    },
  },
]);
