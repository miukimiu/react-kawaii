import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { KawaiiList } from "../lib/components/KawaiiList";

const Components = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <NextSeo title="Components" />
      <KawaiiList />
    </Flex>
  );
};

export default Components;
