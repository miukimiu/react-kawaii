'use client';

import { Box, Button, Container, Flex, Heading, Text } from '@radix-ui/themes';
import NextLink from 'next/link';
import './hero.css';

export const Hero = () => {
  return (
    <Container size="2" className="hero">
      <Box px="4" py="8">
        <Flex direction="column" align="center" justify="center" gap="4">
          <Heading as="h1" align="center" size="8">
            Cute illustrations for React Apps
          </Heading>
          <Text size="4" align="center">
            React Kawaii is an open source library of cute SVG illustrations. Perfect if you want to give some cuteness
            to your React App.
          </Text>

          <NextLink
            href="https://github.com/miukimiu/react-kawaii/blob/main/packages/react-kawaii/README.md"
            className="header__link"
            target="_blank"
          >
            <Button size="3" className="hero__getStartedBtn">
              Get started
            </Button>
          </NextLink>
        </Flex>
      </Box>
    </Container>
  );
};
