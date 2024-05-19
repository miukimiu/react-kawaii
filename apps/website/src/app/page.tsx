import type { Metadata } from 'next';
import { Hero } from '~/components/hero/Hero';
import { KawaiiList } from '~/components/kawaiiList/KawaiiList';

export const metadata: Metadata = {
  title: '...',
  description: '...'
};

const Home = () => {
  return (
    <>
      <Hero />
      <KawaiiList />
    </>
  );
};

export default Home;
