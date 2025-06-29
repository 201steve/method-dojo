import { Typography, Button, Row, Col, Flex } from 'antd';
import { Link } from 'react-router';

import { ProblemCard } from '../domains/problem/components/ProblemCard';
import { useProblems } from '../domains/problem/hooks/useProblems';

export function HomePage() {
  const { getProblemsByDifficulty } = useProblems();

  const beginnerProblems = getProblemsByDifficulty('beginner');
  const intermediateProblems = getProblemsByDifficulty('intermediate');
  const advancedProblems = getProblemsByDifficulty('advanced');

  return (
    <Flex
      vertical
      gap={48}
      style={{
        width: '100%',
        maxWidth: 1100,
        margin: '0 auto',
        padding: '40px 0',
      }}
    >
      <Flex vertical gap={16} style={{ width: '100%', alignItems: 'center' }}>
        <Typography.Title level={1} style={{ margin: 0, textAlign: 'center' }}>
          JavaScript 배열 메소드 마스터
        </Typography.Title>
        <Typography.Paragraph
          type="secondary"
          style={{ fontSize: 18, margin: 0, textAlign: 'center' }}
        >
          배열 메소드를 연습하고 마스터하세요
        </Typography.Paragraph>
        <Link to="/create">
          <Button type="primary" size="large" style={{ borderRadius: 8 }}>
            새 문제 만들기
          </Button>
        </Link>
      </Flex>
      <Flex vertical>
        <section>
          <Typography.Title level={2} style={{ marginBottom: 24 }}>
            초급 ({beginnerProblems.length}문제)
          </Typography.Title>
          <Row gutter={[24, 24]}>
            {beginnerProblems.map((problem) => (
              <Col xs={24} sm={12} lg={8} key={problem.id}>
                <ProblemCard problem={problem} />
              </Col>
            ))}
          </Row>
        </section>
        <section>
          <Typography.Title level={2} style={{ marginBottom: 24 }}>
            중급 ({intermediateProblems.length}문제)
          </Typography.Title>
          <Row gutter={[24, 24]}>
            {intermediateProblems.map((problem) => (
              <Col xs={24} sm={12} lg={8} key={problem.id}>
                <ProblemCard problem={problem} />
              </Col>
            ))}
          </Row>
        </section>
        <section>
          <Typography.Title level={2} style={{ marginBottom: 24 }}>
            고급 ({advancedProblems.length}문제)
          </Typography.Title>
          <Row gutter={[24, 24]}>
            {advancedProblems.map((problem) => (
              <Col xs={24} sm={12} lg={8} key={problem.id}>
                <ProblemCard problem={problem} />
              </Col>
            ))}
          </Row>
        </section>
      </Flex>
    </Flex>
  );
}
