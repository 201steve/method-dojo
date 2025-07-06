import type { Problem } from '@entities/index';
import { Card, Tag, Typography, Flex } from 'antd';
import { useNavigate } from 'react-router';

interface ProblemCardProps {
  problem: Problem;
}

const DIFFICULTY_LABELS = {
  beginner: '초급',
  intermediate: '중급',
  advanced: '고급',
} as const;

const DIFFICULTY_COLORS = {
  beginner: 'green',
  intermediate: 'gold',
  advanced: 'red',
} as const;

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
          color={DIFFICULTY_COLORS[problem.difficulty]}
          style={{ fontSize: 12, borderRadius: 16, padding: '2px 10px' }}
        >
          {DIFFICULTY_LABELS[problem.difficulty]}
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
