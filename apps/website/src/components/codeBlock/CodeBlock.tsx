import { IconButton } from '@radix-ui/themes';
import { useTheme } from 'next-themes';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { TbCopy } from 'react-icons/tb';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './codeBlock.css';

type CodeBlockProps = {
  code: string;
};
export const CodeBlock = ({ code }: CodeBlockProps) => {
  const { theme } = useTheme();

  const codeblockTheme = theme === 'dark' ? nightOwl : oneLight;
  return (
    <div className="codeBlock">
      <IconButton className="codeBlockCopyButton">
        <CopyToClipboard text={code}>
          <TbCopy />
        </CopyToClipboard>
      </IconButton>

      <SyntaxHighlighter language="jsx" style={codeblockTheme}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
