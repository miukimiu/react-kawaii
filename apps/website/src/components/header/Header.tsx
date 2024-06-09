import { Box, Button, Container, Flex, Text } from '@radix-ui/themes';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { ButtonGitHubStars } from '~/components/button/ButtonGithubStars';
import { ButtonThemeToggle } from '~/components/button/ButtonThemeToggle';
import './header.css';

export const Header = () => {
  return (
    <Flex width="100%" height="64px" align="center" className="header">
      <Container size="4">
        <Flex justify="between" px="4" gap="4">
          <Flex gap="4" align="center">
            <NextLink href="/" className="header__logo">
              <Box
                display={{
                  initial: 'none',
                  md: 'block'
                }}
              >
                <NextImage src="/logo.svg" alt="Postgres" width={40} height={40} />
              </Box>

              <Text weight="medium" size="5" color="gray" highContrast style={{ fontFamily: 'var(--font-baloo)' }}>
                React Kawaii
              </Text>
            </NextLink>
          </Flex>

          <Flex gap="6">
            <Flex
              gap="4"
              display={{
                initial: 'none',
                md: 'flex'
              }}
            >
              <NextLink
                href="https://github.com/miukimiu/react-kawaii/blob/main/packages/react-kawaii/README.md"
                className="header__link"
              >
                <Text weight="medium" size="3" color="gray" highContrast>
                  Get Started
                </Text>
              </NextLink>
            </Flex>
            <ButtonGitHubStars />
            <ButtonThemeToggle />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};
