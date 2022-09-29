import React from "react";
import {
  Stack,
  Heading,
  Text,
  Container,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";

const UseCases = () => {
  return (
    <Container maxWidth="container.xl" px={{ base: 4 }}>
      <Stack
        spacing={4}
        as={Container}
        maxW={"4xl"}
        textAlign={"center"}
        mt="24"
      >
        <Heading fontSize={"4xl"}>For multiple scenarios</Heading>
        <Text fontSize={"xl"}>
          No more boring apps! The React Kawaii library was created with one
          thing in mind, make your app fun and cute!
        </Text>
      </Stack>

      <SimpleGrid columns={[1, 2]}>
        <Box>A</Box>
        <Box>
          <Stack spacing={4} as={Container} maxW={"4xl"} mt="24">
            <Heading fontSize={"4xl"}>Error states</Heading>
            <Text fontSize={"xl"}>
              Sometimes things go wrong and when it happens nothing can be more
              boring and frustrating than an awful screen just displaying the
              error message!
            </Text>
            <Text fontSize={"xl"}>
              You can use a React Kawaii and set the mood to sad and the user
              will feel engaged!
            </Text>
          </Stack>
        </Box>
      </SimpleGrid>

      <SimpleGrid columns={[1, 2]}>
        <Box>
          <Stack spacing={4} as={Container} maxW={"4xl"} mt="24">
            <Heading fontSize={"4xl"}>Empty States</Heading>
            <Text fontSize={"xl"}>
              When you are building an app you have to think about those moments
              when there is no content. When the user lands in your app for the
              first time, and there is nothing there. Or when they achieve
              something, and it's a moment of success.
            </Text>
            <Text fontSize={"xl"}>
              Nothing can be more boring than just a screen with text! That's a
              great opportunity to put a React Kawaii with a happy mood!
            </Text>
          </Stack>
        </Box>
        <Box>A</Box>
      </SimpleGrid>

      <SimpleGrid columns={[1, 2]}>
        <Box>A</Box>
        <Box>
          <Stack spacing={4} as={Container} maxW={"4xl"} mt="24">
            <Heading fontSize={"4xl"}>Hero sections</Heading>
            <Text fontSize={"xl"}>
              No more boring apps! The React Kawaii library was created with one
              thing in mind, make your app fun and cute!
            </Text>
          </Stack>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default UseCases;
