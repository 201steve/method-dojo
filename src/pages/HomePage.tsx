import HomeHero from '@widgets/home-hero/ui';
import ProblemList from '@widgets/problem-list/ui';
import { Flex } from 'antd';

export function HomePage() {
  return (
    <Flex
      vertical
      gap={48}
      style={{
        height: '100vh',
        width: '100%',
        padding: '100px',
      }}
    >
      <HomeHero />
      <ProblemList />
    </Flex>
  );
}
