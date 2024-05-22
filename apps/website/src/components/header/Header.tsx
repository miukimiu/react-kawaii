import { Button, Container, Flex, Text } from '@radix-ui/themes';
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
            <NextLink href="/" className="logo">
              <NextImage src="/logo.svg" alt="Postgres" width={40} height={40} />
              <Text weight="medium" size="5" color="gray" highContrast style={{ fontFamily: 'var(--font-baloo)' }}>
                React Kawaii
              </Text>
            </NextLink>

            <Button color="gray" variant="soft" size="1">
              <Text weight="bold">v.0.18.0</Text>
            </Button>
          </Flex>

          <Flex gap="4">
            <ButtonGitHubStars />
            <ButtonThemeToggle />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};
