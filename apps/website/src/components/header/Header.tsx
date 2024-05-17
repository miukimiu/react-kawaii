'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Container, Flex, IconButton, Link } from '@radix-ui/themes';
import { useTheme } from 'next-themes';

export const Header = () => {
  const { theme, setTheme } = useTheme();

  const isDarkTheme = theme === 'dark';

  return (
    <Flex height="64px">
      <Container size="4">
        <Flex justify="between">
          <Flex>
            <Link href="#">React Kawaii</Link>
          </Flex>

          <Flex>
            <Link href="#">GitHub</Link>

            <IconButton
              onClick={() => {
                setTheme(isDarkTheme ? 'light' : 'dark');
              }}
            >
              {isDarkTheme ? <SunIcon width="18" height="18" /> : <MoonIcon width="18" height="18" />}
            </IconButton>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};
