import type { Problem } from '@entities/problem';
import { Card, Typography, Tag, Flex } from 'antd';

interface ProblemInfoProps {
  /** 표시할 문제 정보 */
  problem: Problem;
}

export function ProblemInfo({ problem }: ProblemInfoProps) {
  const getDifficultyColor = (difficulty: Problem['difficulty']): string => {
    switch (difficulty) {
      case 'beginner':
        return 'green';
      case 'intermediate':
        return 'gold';
      case 'advanced':
        return 'red';
      default:
        return 'default';
    }
  };

  const getDifficultyText = (difficulty: Problem['difficulty']): string => {
    switch (difficulty) {
      case 'beginner':
        return '초급';
      case 'intermediate':
        return '중급';
      case 'advanced':
        return '고급';
      default:
        return '알 수 없음';
    }
  };

  return (
    <Card style={{ borderRadius: 12 }}>
      <Flex vertical>
        <Typography.Title level={2}>{problem.title}</Typography.Title>
        <Flex align="center" gap={16}>
          <Tag color={getDifficultyColor(problem.difficulty)}>
            {getDifficultyText(problem.difficulty)}
          </Tag>
        </Flex>
        <Typography.Paragraph type="secondary">
          {problem.description}
        </Typography.Paragraph>
      </Flex>
    </Card>
  );
}
