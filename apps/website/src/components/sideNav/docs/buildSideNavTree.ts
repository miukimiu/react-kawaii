import { DocStatusBadgeProps } from '..';

export type SideNavTreeNode = {
  title: string;
  slug?: string;
  depth: number;
  children: SideNavTreeNode[];
  status: DocStatusBadgeProps['status'];
};

export type SideNavItem = {
  _id: string;
  title: string;
  navTitle?: string | undefined;
  slug: string;
  status: DocStatusBadgeProps['status'];
  pathSegments: any;
};

export const buildSideNavTree = (items: SideNavItem[], startIndex: number = 1) => {
  const tree: SideNavTreeNode[] = [];

  const findOrCreateNode = (
    nodes: SideNavTreeNode[],
    title: string,
    slug: string | null,
    status: 'alpha' | 'beta' | 'ga'
  ) => {
    let node = nodes.find((node) => node.title === title);
    if (!node) {
      node = { title, children: [], depth: 0, status };
      if (slug) {
        node.slug = slug;
      }
      nodes.push(node);
    }
    return node;
  };

  const removeDashes = (str: string) => {
    const words = str.split('-').map((word) => {
      return word;
    });
    return words.join(' ');
  };

  // Sort by id to build the tree using the 000-900 prefixes
  const itemsSortedById = items.sort((a, b) => a._id.localeCompare(b._id));

  for (const item of itemsSortedById) {
    let currentNode = null;
    for (let i = startIndex; i < item.pathSegments.length; i++) {
      const segment = item.pathSegments[i];
      const slug = i === item.pathSegments.length - 1 ? item.slug : null;
      const title = i === item.pathSegments.length - 1 ? item.navTitle || item.title : removeDashes(segment.pathName);
      const status = i === item.pathSegments.length - 1 ? item.status : 'ga';
      currentNode = findOrCreateNode(currentNode ? currentNode.children : tree, title, slug, status);
      currentNode.depth = i;
    }
  }

  return tree;
};
