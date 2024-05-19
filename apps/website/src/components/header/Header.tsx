import { Button, Container, Flex, Link, Text } from '@radix-ui/themes';
import { ButtonGitHubStars } from '~/components/button/ButtonGithubStars';
import { ButtonThemeToggle } from '~/components/button/ButtonThemeToggle';

export const Header = () => {
  return (
    <Flex width="100%" height="64px" align="center">
      <Container size="4">
        <Flex justify="between" px="4" gap="4">
          <Flex gap="4" align="center">
            <Link href="#">
              <Text weight="medium" size="5" color="gray" highContrast>
                React Kawaii
              </Text>
            </Link>

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
