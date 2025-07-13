import type { Problem } from '@entities/problem/types/type';

const DIFFICULTY_COLORS = {
  beginner: 'green',
  intermediate: 'gold',
  advanced: 'red',
} as const;

export function getDifficultyColor(difficulty: Problem['difficulty']): string {
  return DIFFICULTY_COLORS[difficulty] || 'default';
}
