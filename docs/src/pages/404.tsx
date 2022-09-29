import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  Link as ChakraLink,
  useColorMode,
  Flex,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link";

import MotionBox from "lib/components/motion/Box";

const Page404 = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex minHeight="70vh" direction="column" justifyContent="center">
      <NextSeo title="404 Not Found" />
      <MotionBox
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        width={{ base: "100%", sm: "70%", md: "60%" }}
        margin="0 auto"
      >
        <Image
          src="/404 Error-pana.svg"
          alt="Error 404 not found Illustration"
        />
      </MotionBox>
      <Text textAlign="center" fontSize="xs" color="gray">
        <ChakraLink
          href="https://stories.freepik.com/web"
          isExternal
          rel="noopener noreferrer"
        >
          Illustration by Freepik Stories
        </ChakraLink>
      </Text>

      <Box marginY={4}>
        <Heading textAlign="center" size="lg">
          Page not Found.
        </Heading>

        <Box textAlign="center" marginTop={4}>
          <Text fontSize="sm" color="gray">
            It&apos;s Okay!
          </Text>
          <Link href="/" passHref>
            <Button
              backgroundColor={colorMode === "light" ? "gray.300" : "teal.500"}
              size="sm"
            >
              Let&apos;s Head Back
            </Button>
          </Link>
        </Box>
      </Box>
    </Flex>
  );
};

export default Page404;
