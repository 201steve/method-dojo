export interface Execution {
  success: boolean;
  output?: unknown;
  error?: string;
  executionTime: number;
  isCorrect?: boolean;
  feedback?: string;
}
