import { Flex } from 'antd';
import { Outlet } from 'react-router';

const CenteredLayout = () => {
  return (
    <Flex
      vertical
      align="center"
      justify="center"
      style={{ height: '100%', width: '100%' }}
    >
      <Flex style={{ width: '100%', padding: '20px' }}>
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default CenteredLayout;
