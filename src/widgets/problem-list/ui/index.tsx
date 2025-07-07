import { ProblemCard } from '@features/problem-browsing';
import { useProblems } from '@features/problem-storage';
import { Col, Flex, Row, Space, Typography } from 'antd';

const ProblemList = () => {
  const { getProblemsByDifficulty } = useProblems();

  const beginnerProblems = getProblemsByDifficulty('beginner');
  const intermediateProblems = getProblemsByDifficulty('intermediate');
  const advancedProblems = getProblemsByDifficulty('advanced');

  return (
    <Flex vertical>
      <Space direction="vertical">
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
      </Space>
      <Space direction="vertical">
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
      </Space>
      <Space direction="vertical">
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
      </Space>
    </Flex>
  );
};

export default ProblemList;
