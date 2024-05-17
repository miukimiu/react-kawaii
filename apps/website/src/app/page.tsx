import { Flex } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import type { Metadata } from 'next';

import { KawaiiList } from '~/components/home/KawaiiList';

export const metadata: Metadata = {
  title: '...',
  description: '...'
};

const Home = () => {
  return (
    <Flex direction="column" align="center" justify="center" minHeight="70vh" gap="4" mb="8" width="full">
      <KawaiiList />
    </Flex>
  );
};

export default Home;
