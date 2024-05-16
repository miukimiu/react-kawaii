import { Box } from '@chakra-ui/layout';
import { Link, LinkProps } from '@internal/components';
import { FC } from 'react';
import { DocStatusBadge, DocStatusBadgeProps } from './DocStatusBadge';

export type SideNavLinkProps = LinkProps & {
  href: string;
  isActive: boolean;
  title: string;
  status: DocStatusBadgeProps['status'];
  onClose: () => void;
};

export const SideNavLink: FC<SideNavLinkProps> = ({ href, isActive, title, onClose, status, ...props }) => {
  return (
    <Link
      href={href}
      color={isActive ? 'textPrimary' : 'textSubtle'}
      fontWeight={isActive ? 'bold' : 'medium'}
      borderLeft="solid 2px"
      borderColor={isActive ? 'primary' : 'transparent'}
      bg={isActive ? 'contrastLowest' : 'transparent'}
      fontSize="sm"
      py={1}
      _hover={{ bg: 'contrastLowest' }}
      display="flex"
      justifyContent="space-between"
      gap={2}
      px={2}
      ml={-2}
      onClick={() => onClose()}
      {...props}
    >
      {title}
      <Box>
        <DocStatusBadge status={status} variant="compact" />
      </Box>
    </Link>
  );
};
