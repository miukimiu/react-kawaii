import { Button, Code, Dialog, Flex, Table } from '@radix-ui/themes';
import { FC } from 'react';
import { PROPS_DATA } from 'react-kawaii';
import { CodeBlock } from '~/components/codeBlock/CodeBlock';
import './kawaiiListDialog.css';

type KawaiiListDialogProps = {
  children: any;
  title: string;
  kawaiiProps: {
    size: number;
    mood: string;
    color: string;
  };
};

export const KawaiiListDialog: FC<KawaiiListDialogProps> = ({ children, title, kawaiiProps }) => {
  const codeString = `
  import { ${title} } from "react-kawaii";

  const Example = () => (
    <${title} size={${kawaiiProps.size}} mood="${kawaiiProps.mood}" color="${kawaiiProps.color}" />
  );
  `;

  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>

      <Dialog.Content maxWidth="650px">
        <Dialog.Title>{title}</Dialog.Title>

        <CodeBlock code={codeString} />

        <Flex direction="column" gap="3">
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Prop</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Type</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Default</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Default</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {PROPS_DATA.map((prop: any) => (
                <Table.Row key={prop.name}>
                  <Table.RowHeaderCell>{prop.name}</Table.RowHeaderCell>
                  <Table.Cell>
                    <Code>{prop.type}</Code>
                  </Table.Cell>
                  <Table.Cell>{prop.description}</Table.Cell>
                  <Table.Cell>
                    <Code>{prop.default}</Code>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Close
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};
