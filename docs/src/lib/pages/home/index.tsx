import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import CTASection from "lib/components/samples/CTASection";
import SomeImage from "lib/components/samples/SomeImage";
import SomeText from "lib/components/samples/SomeText";

import { Backpack } from "react-kawaii";

const Home = () => {
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
      <NextSeo title="Home" />
      <SomeText />
      <SomeImage />
      <CTASection />
      <Backpack size={200} mood="happy" color="#83D1FB" />
    </Flex>
  );
};

export default Home;
