'use client';

import { Box, Button, Container, Flex, Heading, Text } from '@radix-ui/themes';
import NextLink from 'next/link';
import './hero.css';

export const Hero = () => {
  return (
    <Container size="2" className="hero" pb="8">
      <Box px="4">
        <Flex direction="column" align="center" justify="center" gap="4" minHeight="240px">
          <Heading
            as="h1"
            align="center"
            size={{
              initial: '8',
              lg: '9'
            }}
          >
            Cute illustrations for React Apps
          </Heading>
          <Text size="4" align="center">
            React Kawaii is an open source library of cute SVG illustrations. Perfect if you want to give some cuteness
            to your React App.
          </Text>

          <NextLink
            href="https://github.com/miukimiu/react-kawaii/blob/main/packages/react-kawaii/README.md"
            className="header__link"
          >
            <Button size="3">Get started</Button>
          </NextLink>
        </Flex>
      </Box>
    </Container>
  );
};
