import type { Problem } from '@entities/problem/types/type';
import { getDifficultyColor } from '@shared/utils/get-difficulty-color';
import { getDifficultyText } from '@shared/utils/get-difficulty-text';
import { Card, Typography, Tag, Flex } from 'antd';

interface ProblemInfoProps {
  /** 표시할 문제 정보 */
  problem: Problem;
}

export function ProblemInfo({ problem }: ProblemInfoProps) {
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
