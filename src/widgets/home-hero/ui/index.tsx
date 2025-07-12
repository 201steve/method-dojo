import { Flex, Typography } from 'antd';

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
    </Flex>
  );
};

export default HomeHero;
