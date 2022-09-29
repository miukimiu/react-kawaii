import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import CTASection from "../lib/components/samples/CTASection";
import SomeImage from "../lib/components/samples/SomeImage";
import Hero from "../lib/components/Hero";
import Contributors from "lib/components/Contributors";
import KawaiiPreview from "lib/components/KawaiiPreview";
import { Browser } from "react-kawaii";

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
      <Contributors />
      <KawaiiPreview />
    </Flex>
  );
};

export default Home;
