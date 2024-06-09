import { Card, Code, Container, Flex, Heading, Text } from '@radix-ui/themes';
import type { Metadata } from 'next';
import { CodeBlock } from '~/components/codeBlock/CodeBlock';

export const metadata: Metadata = {
  title: 'React Kawaii - Cute illustrations for React Apps',
  description:
    'React Kawaii is an open source library of cute SVG illustrations. Perfect if you want to give some cuteness to your React App.'
};

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container size="4" className="get-started">
      <Card>
        <Flex p="4" gap="4" width="100%" direction="column">
          {children}
        </Flex>
      </Card>
    </Container>
  );
}
