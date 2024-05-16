import { Box, BoxProps, Flex, Icon, Text } from '@chakra-ui/react';
import { ChevronDown12Filled, ChevronRight12Filled } from '@fluentui/react-icons';
import { usePathname } from 'next/navigation';
import { FC, useState } from 'react';
import { SideNavLink } from './SideNavLink';
import { SideNavTreeNode as SideNavTreeNodeType } from './buildSideNavTree';

export interface SideNavProps extends BoxProps {
  tree: SideNavTreeNodeType[];
  // Function to close the menu on mobile
  onClose: () => void;
  routePrefix?: string;
}

export const SideNavTreeNode: FC<{ node: SideNavTreeNodeType; onClose: () => void; routePrefix: string }> = ({
  node,
  onClose,
  routePrefix
}) => {
  const pathname = usePathname();

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  const isNodeActive = (node: SideNavTreeNodeType): boolean => {
    if (pathname === `${routePrefix}/${node.slug}`) {
      return true;
    }

    for (const child of node.children) {
      if (isNodeActive(child)) {
        return true;
      }
    }

    return false;
  };

  const shouldNodeBeCollapsed = (node: SideNavTreeNodeType): boolean => {
    if (node.depth < 2) {
      return false;
    }

    if (isNodeActive(node)) {
      return false;
    }

    const hasActiveChild = node.children.some((child) => isNodeActive(child));

    if (hasActiveChild) {
      return false;
    }

    if (node.children.length > 0) {
      const hasExpandedChild = node.children.some((child) => !shouldNodeBeCollapsed(child));
      if (hasExpandedChild) {
        return false;
      }
    }

    return true;
  };

  const isActive = isNodeActive(node);
  const shouldCollapse = shouldNodeBeCollapsed(node);

  const [collapsed, setCollapsed] = useState(shouldCollapse);

  return (
    <Box pl={4} h="full">
      {node.children.length > 0 ? (
        <Flex
          as="button"
          alignItems="center"
          w="full"
          borderRadius="md"
          onClick={handleToggle}
          gap={2}
          justifyContent="space-between"
          mt={node.depth > 1 ? 1 : 4}
          mb={2}
        >
          <Text fontWeight="semibold" fontSize="sm">
            {node.title}
          </Text>
          <Icon as={collapsed && shouldCollapse ? ChevronRight12Filled : ChevronDown12Filled} boxSize={3} />
        </Flex>
      ) : (
        <SideNavLink
          href={`${routePrefix}/${node.slug}`}
          isActive={isActive}
          onClose={() => onClose()}
          title={node.title}
          status={node.status}
        />
      )}
      {!collapsed && (
        <Box>
          {node.children.map((child) => (
            <Box key={child.title}>
              <SideNavTreeNode node={child} onClose={onClose} routePrefix={routePrefix} />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export const SideNav: FC<SideNavProps> = ({ tree, onClose, routePrefix = '', ...props }) => {
  return (
    <Box ml={-4} mt={-4} {...props}>
      {tree.map((node) => (
        <SideNavTreeNode key={node.title} node={node} onClose={onClose} routePrefix={routePrefix} />
      ))}
    </Box>
  );
};
