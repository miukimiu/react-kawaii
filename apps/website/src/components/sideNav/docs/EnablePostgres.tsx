import { Badge, Box, BoxProps, Code, Divider, Flex, FlexProps, Text } from '@chakra-ui/layout';
import { FC } from 'react';
import { Link } from '..';

interface NumberedStepProps extends FlexProps {
  number: number;
  children: React.ReactNode;
}

const NumberedStep: FC<NumberedStepProps> = ({ number, children, ...props }) => {
  return (
    <Flex alignItems="center" gap={4} ml={4} {...props}>
      <Flex
        alignItems="center"
        justifyContent="center"
        boxSize={8}
        minW={8}
        minH={8}
        borderRadius="50%"
        bg="bgPrimary"
        color="ghost"
        fontWeight="bold"
        border="solid 1px"
        borderColor="primary"
      >
        {number}
      </Flex>
      {children}
    </Flex>
  );
};

export interface DocsEnablePostgresProps extends BoxProps {
  docsLink?: boolean;
}

export const DocsEnablePostgres: FC<DocsEnablePostgresProps> = ({ docsLink = true, ...props }) => {
  return (
    <Box bg="contrastEmpty" p={4} borderRadius="lg" border="solid 1px" borderColor="stroke" {...props}>
      <Flex gap={2} mb={2}>
        <Text fontSize="lg" fontWeight="bold">
          Enable Postgres connections in Xata
        </Text>
        <Box>
          <Badge colorScheme="blue" fontSize="xs" alignItems="center" variant="subtle">
            Beta
          </Badge>
        </Box>
      </Flex>
      <Text color="textSubtle">Xata now allows direct connections to Postgres. To enable it follow these steps:</Text>
      <Divider my={4} />
      <NumberedStep number={1} mb={4}>
        <Text>
          Enable Postgres in your <Link href="https://app.xata.io/workspaces/settings">workspace settings</Link>
        </Text>
      </NumberedStep>
      <NumberedStep number={2} mb={4}>
        <Text>
          Create a{' '}
          <Text
            as="span"
            fontWeight="semibold"
            fontStyle="italic"
            textDecoration="underline"
            textDecorationStyle="dotted"
          >
            brand new database
          </Text>{' '}
          with Postgres enabled
        </Text>
      </NumberedStep>
      <NumberedStep number={3} alignItems="start">
        <Box>
          <Text mb={2}>
            Use the <Code>@next</Code> version of our APIs within your project
          </Text>
          <Box mb={1}>
            <Code>npm install -g @xata.io/cli@next</Code>
          </Box>
          <Box>
            <Code>npm install @xata.io/client@next</Code>
          </Box>
        </Box>
      </NumberedStep>
      {docsLink && (
        <>
          <Divider my={4} />
          <Text>
            Check the Postgres <Link href="/docs/postgres">documentation</Link> for details and troubleshooting.
          </Text>
        </>
      )}
    </Box>
  );
};
