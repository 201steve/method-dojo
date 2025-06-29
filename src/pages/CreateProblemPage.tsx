import { Card, Typography, Flex } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router';

import { ProblemForm } from '../domains/problem/components/ProblemForm';
import { useProblems } from '../domains/problem/hooks/useProblems';
import type { Problem } from '../domains/problem/types';

export function CreateProblemPage() {
  const navigate = useNavigate();
  const { saveProblem } = useProblems();

  const handleSave = (problem: Problem) => {
    saveProblem(problem);
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <Flex vertical>
      <Flex vertical>
        <Typography.Title level={2} style={{ margin: 0 }}>
          새 문제 만들기
        </Typography.Title>
        <Typography.Paragraph type="secondary" style={{ margin: 0 }}>
          JavaScript 배열 메소드 연습 문제를 만들어보세요.
        </Typography.Paragraph>
      </Flex>
      <Card style={{ borderRadius: 12 }}>
        <ProblemForm onSave={handleSave} onCancel={handleCancel} />
      </Card>
    </Flex>
  );
}
