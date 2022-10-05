import React, { Component, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Container,
  Tag,
  useColorModeValue,
  SliderMark,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Ghost, KawaiiProps, MOODS } from "react-kawaii";
import { CirclePicker } from "react-color";
import { css } from "@emotion/react";
import { COLORS, SPACES } from "../../constants";

export const KawaiiPreview = () => {
  const [activeMood, setActiveMood] = useState<KawaiiProps["mood"]>("happy");
  const [activeColor, setActiveColor] = useState(COLORS[0]);
  const [activeSize, setActiveSize] = useState(200);

  const onChangeComplete = (color: any) => {
    setActiveColor(color.hex);
  };

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  return (
    <Box background={useColorModeValue("blue.50", "gray.900")} width="100%">
      <Container maxWidth="container.xl" px={{ base: 4 }} py={SPACES.marginY}>
        <Stack
          as={Container}
          maxW={"4xl"}
          textAlign={"center"}
          pb={SPACES.marginY / 2}
        >
          <Heading fontSize={"4xl"}>Try it out</Heading>
          <Text fontSize={"xl"}>
            You can see how easy it is to use this library! Just set the props
            and you are done!
          </Text>
        </Stack>

        <SimpleGrid columns={2} borderRadius="md" overflow="hidden" minH={400}>
          <Box
            background={useColorModeValue("gray.700", "gray.900")}
            padding={10}
            height="100%"
          >
            <Flex direction={"column"} alignItems="center">
              <Heading as="h3" size="md" color="white" paddingBottom="4">
                Mood
              </Heading>

              <Flex
                gap="2"
                direction="row"
                alignItems="center"
                justifyContent="center"
                flexWrap={"wrap"}
                paddingBottom="8"
              >
                {MOODS.map((mood) => (
                  <Tag
                    key={mood}
                    as="button"
                    colorScheme={mood === activeMood ? "purple" : "gray"}
                    onClick={() => setActiveMood(mood)}
                  >
                    {mood.toUpperCase()}
                  </Tag>
                ))}
              </Flex>

              <Heading as="h3" size="md" color="white" paddingBottom="4">
                Color
              </Heading>

              <Box
                paddingBottom="8"
                justifyContent="center"
                css={css`
                  .circle-picker {
                    justify-content: center;
                  }
                `}
              >
                <CirclePicker
                  colors={COLORS}
                  color={activeColor}
                  onChangeComplete={onChangeComplete}
                />
              </Box>

              <Heading as="h3" size="md" color="white" paddingBottom="4">
                Size
              </Heading>

              <Box width="100%">
                <Slider
                  aria-label="slider-ex-6"
                  onChange={(val) => setActiveSize(val)}
                  min={50}
                  max={200}
                >
                  <SliderMark value={100} {...labelStyles}>
                    100
                  </SliderMark>
                  <SliderMark value={150} {...labelStyles}>
                    150
                  </SliderMark>
                  <SliderMark value={200} {...labelStyles}>
                    200
                  </SliderMark>
                  <SliderMark
                    value={activeSize}
                    textAlign="center"
                    bg="blue.500"
                    color="white"
                    mt="-10"
                    ml="-5"
                    w="12"
                  >
                    {activeSize}
                  </SliderMark>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </Box>
            </Flex>
          </Box>
          <Flex
            px={4}
            height="100%"
            background={useColorModeValue("white", "gray.700")}
            justifyContent="center"
            alignItems={"center"}
          >
            <Ghost color={activeColor} mood={activeMood} size={activeSize} />
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default KawaiiPreview;
