import React from "react";
import {
  Stack,
  Heading,
  Text,
  Container,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
import { IceCream, Ghost, Planet } from "react-kawaii";
import CloudContainer from "./CloudContainer";
import { ParallaxProvider } from "react-scroll-parallax";
import { SPACES } from "../../constants";

const UseCases = () => {
  return (
    <ParallaxProvider>
      <Container maxWidth="container.xl" px={{ base: 4 }} my={SPACES.marginY}>
        <Stack
          as={Container}
          maxW={"4xl"}
          textAlign={"center"}
          pb={SPACES.marginY / 2}
        >
          <Heading fontSize={"4xl"}>For multiple scenarios</Heading>
          <Text fontSize={"xl"}>
            No more boring apps! The React Kawaii library was created with one
            thing in mind, make your app fun and cute!
          </Text>
        </Stack>

        <SimpleGrid
          columns={[1, 2]}
          spacing={SPACES.gutterX}
          mb={SPACES.marginY}
        >
          <Box>
            <CloudContainer kawaii={<IceCream mood="shocked" />} />
          </Box>
          <Box>
            <Stack spacing={4} as={Container} maxW={"4xl"}>
              <Heading fontSize={"4xl"}>Error states</Heading>
              <Text fontSize={"xl"}>
                Sometimes things go wrong and when it happens nothing can be
                more boring and frustrating than an awful screen just displaying
                the error message!
              </Text>
              <Text fontSize={"xl"}>
                You can use a React Kawaii and set the mood to sad and the user
                will feel engaged!
              </Text>
            </Stack>
          </Box>
        </SimpleGrid>

        <SimpleGrid
          columns={[1, 2]}
          spacing={SPACES.gutterX}
          mb={SPACES.marginY}
        >
          <Box>
            <Stack spacing={4} as={Container} maxW={"4xl"}>
              <Heading fontSize={"4xl"}>Empty States</Heading>
              <Text fontSize={"xl"}>
                When you are building an app you have to think about those
                moments when there is no content. When the user lands in your
                app for the first time, and there is nothing there. Or when they
                achieve something, and it's a moment of success.
              </Text>
              <Text fontSize={"xl"}>
                Nothing can be more boring than just a screen with text! That's
                a great opportunity to put a React Kawaii with a happy mood!
              </Text>
            </Stack>
          </Box>
          <Box>
            <CloudContainer kawaii={<Ghost />} />
          </Box>
        </SimpleGrid>

        <SimpleGrid columns={[1, 2]} spacing={SPACES.gutterX}>
          <Box>
            <CloudContainer kawaii={<Planet />} />
          </Box>
          <Box>
            <Stack spacing={4} as={Container} maxW={"4xl"}>
              <Heading fontSize={"4xl"}>Hero sections</Heading>
              <Text fontSize={"xl"}>
                No more boring apps! The React Kawaii library was created with
                one thing in mind, make your app fun and cute!
              </Text>
            </Stack>
          </Box>
        </SimpleGrid>
      </Container>
    </ParallaxProvider>
  );
};

export default UseCases;
