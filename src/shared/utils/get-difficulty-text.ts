import type { Problem } from '@entities/problem/types/type';

const DIFFICULTY_LABELS = {
  beginner: '초급',
  intermediate: '중급',
  advanced: '고급',
} as const;

export function getDifficultyText(difficulty: Problem['difficulty']): string {
  return DIFFICULTY_LABELS[difficulty] || '알 수 없음';
}
