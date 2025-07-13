import type { Problem } from '@entities/problem/types/type';
import { getDifficultyColor } from '@shared/utils/get-difficulty-color';
import { getDifficultyText } from '@shared/utils/get-difficulty-text';
import { Card, Tag, Typography, Flex } from 'antd';
import { useNavigate } from 'react-router';

interface ProblemCardProps {
  problem: Problem;
}

export function ProblemCard({ problem }: ProblemCardProps) {
  const navigate = useNavigate();
  return (
    <Card
      hoverable
      style={{ borderRadius: 12, marginBottom: 12 }}
      onClick={() => navigate(`/problem/${problem.id}`)}
      styles={{ body: { padding: '20px' } }}
    >
      <Flex
        justify="space-between"
        align="flex-start"
        style={{ marginBottom: 12 }}
      >
        <Typography.Title level={5} style={{ margin: 0 }}>
          {problem.title}
        </Typography.Title>
        <Tag
          color={getDifficultyColor(problem.difficulty)}
          style={{ fontSize: 12, borderRadius: 16, padding: '2px 10px' }}
        >
          {getDifficultyText(problem.difficulty)}
        </Tag>
      </Flex>
      <Typography.Paragraph
        type="secondary"
        ellipsis={{ rows: 2 }}
        style={{ marginBottom: 16, fontSize: 14 }}
      >
        {problem.description}
      </Typography.Paragraph>
    </Card>
  );
}
