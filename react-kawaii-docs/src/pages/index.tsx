import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import Hero from "../lib/components/home/Hero";
import Contributors from "lib/components/home/Contributors";
import KawaiiPreview from "lib/components/home/KawaiiPreview";
import UseCases from "lib/components/home/UseCases";

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
      <Hero />
      <UseCases />
      <KawaiiPreview />
      <Contributors />
    </Flex>
  );
};

export default Home;
