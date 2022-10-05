import React, { FunctionComponent } from "react";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import { Box, Flex } from "@chakra-ui/react";

type CloudContainerProps = {
  kawaii: React.ReactNode;
};

const CloudContainer: FunctionComponent<CloudContainerProps> = ({ kawaii }) => {
  return (
    <Box position="relative">
      <Box>
        <Image
          src="/cloud-container.svg"
          layout="responsive"
          width={512}
          height={316}
        />
      </Box>
      <Flex position="absolute" top={0} width="100%" justifyContent="center">
        <Parallax speed={-8}>{kawaii}</Parallax>
      </Flex>
    </Box>
  );
};

export default CloudContainer;
