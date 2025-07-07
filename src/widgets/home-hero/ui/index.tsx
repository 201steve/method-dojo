import { Button, Flex, Typography } from 'antd';
import { Link } from 'react-router';

const HomeHero = () => {
  return (
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
  );
};

export default HomeHero;
