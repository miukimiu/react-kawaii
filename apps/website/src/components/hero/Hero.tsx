'use client';

import { Box, Container, Flex, Heading, Text } from '@radix-ui/themes';
import './hero.css';

export const Hero = () => {
  return (
    <Container size="2" className="hero" pb="4">
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
        </Flex>
      </Box>
    </Container>
  );
};
