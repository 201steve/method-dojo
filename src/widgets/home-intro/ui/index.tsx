// src/widgets/home-intro/ui/index.tsx
import {
  CodeOutlined,
  CheckCircleOutlined,
  PlayCircleOutlined,
} from '@ant-design/icons';
import { Card, Col, Flex, Row, Space, Typography } from 'antd';

const { Title, Paragraph, Text } = Typography;

export default function HomeIntro() {
  const features = [
    {
      icon: <CodeOutlined style={{ fontSize: '24px', color: '#1677ff' }} />,
      title: '실전 코딩 연습',
      description:
        '배열, 객체, 문자열 등 핵심 JavaScript 개념을 실제 문제를 통해 학습',
    },
    {
      icon: (
        <PlayCircleOutlined style={{ fontSize: '24px', color: '#52c41a' }} />
      ),
      title: '즉시 실행 & 피드백',
      description:
        '코드를 작성하고 바로 실행하여 결과를 확인할 수 있는 인터랙티브 환경',
    },
    {
      icon: (
        <CheckCircleOutlined style={{ fontSize: '24px', color: '#faad14' }} />
      ),
      title: '난이도별 학습',
      description:
        '초급부터 고급까지 단계적으로 구성된 문제로 체계적인 학습 가능',
    },
  ];

  return (
    <Flex
      vertical
      align="center"
      style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 20px',
      }}
    >
      {/* 메인 헤더 */}
      <Space
        direction="vertical"
        size="large"
        align="center"
        style={{ marginBottom: '60px' }}
      >
        <Title
          level={1}
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textAlign: 'center',
            margin: 0,
          }}
        >
          JavaScript 코딩 마스터
        </Title>

        <Title
          level={2}
          style={{
            fontSize: '1.5rem',
            color: '#666',
            fontWeight: 'normal',
            textAlign: 'center',
            margin: 0,
          }}
        >
          배열, 객체, 문자열 메소드를 마스터하는 인터랙티브 플랫폼
        </Title>

        <Paragraph
          style={{
            fontSize: '1.1rem',
            color: '#888',
            textAlign: 'center',
            maxWidth: '600px',
            margin: '16px 0 32px 0',
          }}
        >
          실전 문제를 통해 JavaScript 핵심 개념을 익히고, 즉시 실행하여 결과를
          확인하며 실력을 향상시켜보세요.
        </Paragraph>
      </Space>

      {/* 특징 섹션 */}
      <Row gutter={[32, 32]} style={{ width: '100%', marginBottom: '60px' }}>
        {features.map((feature, index) => (
          <Col xs={24} md={8} key={index}>
            <Card
              bordered={false}
              style={{
                height: '100%',
                textAlign: 'center',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
              }}
              bodyStyle={{ padding: '32px 24px' }}
              hoverable
            >
              <Space direction="vertical" size="middle" align="center">
                {feature.icon}
                <Title level={4} style={{ margin: 0, color: '#333' }}>
                  {feature.title}
                </Title>
                <Paragraph
                  style={{
                    color: '#666',
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {feature.description}
                </Paragraph>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>

      {/* 학습 주제 미리보기 */}
      <Space
        direction="vertical"
        size="large"
        align="center"
        style={{ width: '100%' }}
      >
        <Title level={3} style={{ color: '#333', textAlign: 'center' }}>
          학습할 수 있는 주제들
        </Title>

        <Row gutter={[16, 16]} justify="center">
          {[
            { icon: '🔢', title: 'Array', desc: '배열 메소드 마스터' },
            { icon: '🔧', title: 'Object', desc: '객체 다루기' },
            { icon: '📝', title: 'String', desc: '문자열 처리' },
            { icon: '🔢', title: 'Number', desc: '숫자 연산' },
            { icon: '📊', title: 'Math', desc: '수학 함수' },
          ].map((topic, index) => (
            <Col key={index}>
              <Card
                size="small"
                style={{
                  borderRadius: '12px',
                  border: '1px solid #f0f0f0',
                  minWidth: '120px',
                  textAlign: 'center',
                }}
                bodyStyle={{ padding: '16px 12px' }}
              >
                <Space direction="vertical" size={4} align="center">
                  <Text style={{ fontSize: '24px' }}>{topic.icon}</Text>
                  <Text strong>{topic.title}</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    {topic.desc}
                  </Text>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      </Space>
    </Flex>
  );
}
