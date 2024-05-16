import { Badge, Box, BoxProps, Flex, Text, Tooltip } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from '..';

export interface DocStatusBadgeProps extends BoxProps {
  status: 'alpha' | 'beta' | 'ga';
  variant?: 'compact' | 'full';
}

export const DocStatusBadge: FC<DocStatusBadgeProps> = ({ status, variant = 'full', ...rest }) => {
  const statusColor = {
    alpha: 'orange',
    beta: 'blue',
    ga: 'green'
  }[status];
  const statusText = {
    alpha:
      'Experimental feature subject to potentially major changes, this is not recommended for use in production and access must be requested.',
    beta: 'Almost complete feature but still under development. There may be changes as we address issues and feedback. Use with caution.',
    ga: 'This feature is generally available in a stable state and can be used in production.'
  }[status];

  if (status === 'ga') {
    return null;
  }

  if (variant === 'compact') {
    return (
      <Tooltip label={statusText} placement="end">
        <Badge colorScheme={statusColor} fontSize="xx-small" {...rest} cursor="context-menu">
          {status}
        </Badge>
      </Tooltip>
    );
  }
  return (
    <Flex flexDir="column" gap={2} {...rest}>
      <Box>
        <Badge colorScheme={statusColor} fontSize="lg">
          {status} feature
        </Badge>
      </Box>
      <Text fontSize="sm" color="textSubtle">
        {statusText}
        {status === 'alpha' && (
          <>
            {' '}
            <Link href="https://5i8caik7lja.typeform.com/to/Gh5lin22">Request access</Link>.
          </>
        )}
      </Text>
    </Flex>
  );
};
