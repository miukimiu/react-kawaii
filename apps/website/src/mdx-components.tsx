import { ExternalLinkIcon, Link2Icon } from '@radix-ui/react-icons';
import { Blockquote, Box, Code, Em, Flex, Heading, Kbd, Link, Separator, Strong, Tabs, Text } from '@radix-ui/themes';
import type { MDXComponents } from 'mdx/types';
import NextLink from 'next/link';
// import { CodeBlock } from '~/components/codeBlock/CodeBlock';

const LinkHeading = ({
  id,
  children,
  className,
  ...props
}: {
  id: string;
  children: React.ReactNode;
} & React.ComponentProps<typeof Link>) => (
  <Link asChild weight="bold" highContrast color="gray" underline="hover" {...props}>
    <a id={id} href={`#${id}`}>
      {children}

      <Link2Icon aria-hidden />
    </a>
  </Link>
);

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <Heading asChild size="8" mb="2">
        <h1 {...props} style={{ scrollMarginTop: 'var(--space-9)' }} />
      </Heading>
    ),
    Description: ({ children, ...props }) => {
      // takes the text even if it's wrapped in `<p>`
      // https://github.com/wooorm/xdm/issues/47
      const childText = typeof children === 'string' ? children : children.props.children;
      return <Text as="p" size="4" mt="2" mb="7" color="gray" children={childText} {...props} />;
    },
    h2: ({ children, id, ...props }: any) => (
      <Heading
        size="6"
        mt="8"
        mb="3"
        asChild
        {...props}
        id={id}
        style={{ scrollMarginTop: 'var(--space-9)' }}
        data-heading
      >
        <h2>
          <LinkHeading id={id}>{children}</LinkHeading>
        </h2>
      </Heading>
    ),
    h3: ({ children, id, ...props }: any) => (
      <Heading
        size="4"
        mt="7"
        mb="2"
        asChild
        {...props}
        id={id}
        style={{ scrollMarginTop: 'var(--space-9)' }}
        data-heading
      >
        <h3>
          <LinkHeading id={id}>{children}</LinkHeading>
        </h3>
      </Heading>
    ),
    h4: ({ children, ...props }: any) => (
      <Heading asChild size="4" mt="6" mb="3" {...props}>
        <h4 children={children} style={{ scrollMarginTop: 'var(--space-9)' }} />
      </Heading>
    ),
    p: (props: any) => <Text mb="4" as="p" size="3" {...props} />,
    a: ({ href = '', children, ...props }: any) => {
      if (href.startsWith('http')) {
        return (
          <Flex asChild display="inline-flex" align="center" gap="1">
            <Link {...props} href={href} target="_blank" rel="noopener">
              {children}
              <ExternalLinkIcon style={{ marginTop: 2, marginLeft: -1, marginRight: -1 }} />
            </Link>
          </Flex>
        );
      }
      return (
        <NextLink href={href} passHref>
          <Link {...props}>{children}</Link>
        </NextLink>
      );
    },
    hr: (props: any) => <Separator size="2" my="8" style={{ marginInline: 'auto' }} {...props} />,
    ul: (props: any) => <ul {...props} className="List" />,
    ol: ({ children, ...props }: any) => (
      <Box {...props} mb="3" pl="4" asChild>
        <ol>{children}</ol>
      </Box>
    ),
    li: (props: any) => (
      <li>
        <Text {...props} />
      </li>
    ),
    em: Em,
    strong: Strong,
    img: ({ style, ...props }) => (
      <Box my="6">
        <img {...props} style={{ maxWidth: '100%', verticalAlign: 'middle', ...style }} />
      </Box>
    ),
    // blockquote: Blockquote,
    // pre: ({ children }) => (
    //   <Headingt>
    // ),
    code: ({ className, line, live, style, ...props }: any) => {
      // if it's a codeblock (``` block in markdown), it'll have a className from prism
      const isInlineCode = !className;
      return isInlineCode ? (
        <Code className={className} {...props} style={{ whiteSpace: 'break-spaces' }} />
      ) : (
        <code className={className} {...props} />
      );
    },
    NextLink,
    Kbd: Kbd,
    Code,
    Flex,
    ...components
  };
}
