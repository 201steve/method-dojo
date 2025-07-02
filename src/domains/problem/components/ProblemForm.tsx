import type { Problem, ProblemDifficulty } from '@entities/index';
import { Form, Input, Select, Button, Typography, Space } from 'antd';

import { CodeEditor } from './CodeEditor';

interface ProblemFormProps {
  initialProblem?: Problem;
  onSave: (problem: Problem) => void;
  onCancel: () => void;
}

type ProblemFormValues = {
  title: string;
  description: string;
  difficulty: string;
  initialCode: string;
  expectedOutput: string;
};

export function ProblemForm({
  initialProblem,
  onSave,
  onCancel,
}: ProblemFormProps) {
  const [form] = Form.useForm();
  const handleFinish = (values: ProblemFormValues) => {
    const problem: Problem = {
      id: initialProblem?.id || Date.now().toString(),
      title: values.title,
      description: values.description,
      difficulty: values.difficulty as ProblemDifficulty,
      initialCode: values.initialCode,
      expectedOutput: values.expectedOutput,
      testCases: initialProblem?.testCases || [],
      createdAt: initialProblem?.createdAt || new Date().toISOString(),
    };
    onSave(problem);
  };
  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{
        title: initialProblem?.title || '',
        description: initialProblem?.description || '',
        difficulty: initialProblem?.difficulty || 'beginner',
        initialCode: initialProblem?.initialCode || '',
        expectedOutput: initialProblem?.expectedOutput || '',
      }}
      onFinish={handleFinish}
    >
      <Form.Item
        label={<Typography.Text strong>문제 제목</Typography.Text>}
        name="title"
        rules={[{ required: true, message: '문제 제목을 입력하세요.' }]}
      >
        <Input placeholder="문제 제목을 입력하세요" />
      </Form.Item>
      <Form.Item
        label={<Typography.Text strong>문제 설명</Typography.Text>}
        name="description"
        rules={[{ required: true, message: '문제 설명을 입력하세요.' }]}
      >
        <Input.TextArea rows={3} placeholder="문제 설명을 입력하세요" />
      </Form.Item>
      <Form.Item
        label={<Typography.Text strong>난이도</Typography.Text>}
        name="difficulty"
        rules={[{ required: true, message: '난이도를 선택하세요.' }]}
      >
        <Select>
          <Select.Option value="beginner">초급</Select.Option>
          <Select.Option value="intermediate">중급</Select.Option>
          <Select.Option value="advanced">고급</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label={<Typography.Text strong>초기 코드</Typography.Text>}
        name="initialCode"
      >
        <CodeEditor
          value={form.getFieldValue('initialCode')}
          onChange={(val) => form.setFieldValue('initialCode', val)}
          placeholder="초기 코드를 입력하세요..."
        />
      </Form.Item>
      <Form.Item
        label={<Typography.Text strong>예상 출력</Typography.Text>}
        name="expectedOutput"
      >
        <Input.TextArea
          rows={3}
          placeholder="예상되는 출력 결과를 입력하세요..."
        />
      </Form.Item>
      <Form.Item>
        <Space
          style={{ width: '100%', justifyContent: 'flex-end', display: 'flex' }}
        >
          <Button onClick={onCancel}>취소</Button>
          <Button type="primary" htmlType="submit">
            저장
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
}
