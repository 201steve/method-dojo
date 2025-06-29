import { Flex } from 'antd';
import { Outlet } from 'react-router';

const CenteredLayout = () => {
  return (
    <Flex vertical align="center" justify="center" style={{ height: '100vh' }}>
      <Outlet />
    </Flex>
  );
};

export default CenteredLayout;
