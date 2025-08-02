// src/pages/array/index.tsx
import { ARRAY_FILTER_PROBLEMS } from '@entities/problem/model/array-filter-problems';
import { ARRAY_FIND_PROBLEMS } from '@entities/problem/model/array-find-problems';
import { ARRAY_MAP_PROBLEMS } from '@entities/problem/model/array-map-problems';
import { FOR_EACH_PROBLEMS } from '@entities/problem/model/for-each';
import type { Problem } from '@entities/problem/types/type';
import { ProblemCard } from '@features/problem-browsing';
import { Col, Row, Space, Typography } from 'antd';
import React from 'react';

interface ProblemSectionProps {
  title: string;
  description: string;
  problems: Problem[];
}

const ProblemSection: React.FC<ProblemSectionProps> = ({
  title,
  description,
  problems,
}) => (
  <section>
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Typography.Title level={2} style={{ marginBottom: 8 }}>
          {title}
        </Typography.Title>
        <Typography.Text type="secondary">{description}</Typography.Text>
      </div>
      <Row gutter={[24, 24]}>
        {problems.map((problem) => (
          <Col xs={24} sm={12} lg={8} key={problem.id}>
            <ProblemCard problem={problem} />
          </Col>
        ))}
      </Row>
    </Space>
  </section>
);

const ArrayPage: React.FC = () => {
  return (
    <div style={{ padding: '32px' }}>
      <div style={{ marginBottom: 32 }}>
        <Typography.Title level={1} style={{ marginBottom: 16 }}>
          배열 메서드 연습 문제
        </Typography.Title>
        <Typography.Paragraph style={{ fontSize: 18, color: '#6b7280' }}>
          JavaScript 배열 메서드(forEach, map, filter, find)를 연습할 수 있는
          문제들입니다.
        </Typography.Paragraph>
      </div>

      <Space direction="vertical" size={48} style={{ width: '100%' }}>
        <ProblemSection
          title={`forEach() 메서드 (${FOR_EACH_PROBLEMS.length}문제)`}
          description="배열의 각 요소에 대해 제공된 함수를 실행합니다."
          problems={FOR_EACH_PROBLEMS}
        />

        <ProblemSection
          title={`map() 메서드 (${ARRAY_MAP_PROBLEMS.length}문제)`}
          description="배열의 모든 요소를 변환하여 새로운 배열을 만듭니다."
          problems={ARRAY_MAP_PROBLEMS}
        />

        <ProblemSection
          title={`filter() 메서드 (${ARRAY_FILTER_PROBLEMS.length}문제)`}
          description="주어진 조건을 만족하는 요소들로 새로운 배열을 만듭니다."
          problems={ARRAY_FILTER_PROBLEMS}
        />

        <ProblemSection
          title={`find() 메서드 (${ARRAY_FIND_PROBLEMS.length}문제)`}
          description="주어진 조건을 만족하는 첫 번째 요소를 반환합니다."
          problems={ARRAY_FIND_PROBLEMS}
        />
      </Space>
    </div>
  );
};

export default ArrayPage;
