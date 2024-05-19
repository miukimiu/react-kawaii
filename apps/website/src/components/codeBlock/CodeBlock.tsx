import { IconButton } from '@radix-ui/themes';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { TbCopy } from 'react-icons/tb';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './codeBlock.css';

type Props = {
  code: string;
  language: string;
};
export const CodeBlock = ({ language, code }: Props) => {
  return (
    <div className="codeBlock">
      <IconButton className="codeButton">
        <CopyToClipboard text={code}>
          <TbCopy />
        </CopyToClipboard>
      </IconButton>

      <SyntaxHighlighter language="jsx" style={nightOwl}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
