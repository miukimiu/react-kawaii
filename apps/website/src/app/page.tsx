import type { Metadata } from 'next';
import { Hero } from '~/components/hero/Hero';
import { KawaiiList } from '~/components/kawaiiList/KawaiiList';

export const metadata: Metadata = {
  title: 'React Kawaii - Cute illustrations for React Apps',
  description:
    'React Kawaii is an open source library of cute SVG illustrations. Perfect if you want to give some cuteness to your React App.'
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
