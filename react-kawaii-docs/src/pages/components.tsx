import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import {
  SimpleGrid,
  Box,
  useColorModeValue,
  Container,
  Heading,
  HStack,
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
} from "@chakra-ui/react";
import { CirclePicker } from "react-color";
import { COLORS } from "../lib/constants";
import { getComponentsList } from "../lib/utils/getComponentsList";

const Components = () => {
  const [color, setColor] = useState(COLORS[0]);

  const onChangeComplete = (color: any) => {
    setColor(color.hex);
  };

  // the value of the search field 
  const [name, setName] = useState('');

  // the search result
  const [foundComponents, setFoundComponents] = useState(getComponentsList({ color }));

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const COMPONENTS = getComponentsList({ color });

      const results = COMPONENTS.filter((item) => {
        return item.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundComponents(results);
    } else {
      const COMPONENTS = getComponentsList({ color });

      setFoundComponents(COMPONENTS);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  // if the color changes, update the search result
  useEffect(() => {
    filter({ target: { value: name } });
  }, [color]);

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap={4}
      mb={8}
      w="full"
    >
      <NextSeo title="Components" />
      <Box
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
        width="100%"
      >
        <Container maxWidth="container.xl" px={{ base: 4 }} py="4">
          <HStack spacing={8}>
            <Input placeholder="Search" size="md" value={name} onChange={filter} />

            <Popover>
              <PopoverTrigger>
                <Button borderRadius="50%" background={color}></Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Color</PopoverHeader>
                <PopoverBody>
                  <CirclePicker
                    colors={COLORS}
                    color={color}
                    onChangeComplete={onChangeComplete}
                  />
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </HStack>
        </Container>
      </Box>

      <Container maxWidth="container.xl" px={{ base: 4 }}>
        {foundComponents && foundComponents.length > 0 ? (
          <SimpleGrid columns={4} spacing={10}>
            {foundComponents.map((item) => (
              <Box
                key={item.name}
                maxW={"320px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                borderWidth={"1px"}
                borderRadius={"lg"}
                overflow={"hidden"}
                p={6}
                textAlign={"center"}
              >
                <Box margin="0 auto" display="inline-flex">
                  {item.component}
                </Box>

                <Heading fontSize={"2xl"} fontFamily={"body"}>
                  {item.name}
                </Heading>
              </Box>
            ))}
          </SimpleGrid>) : (<p>No results found</p>)}
      </Container>
    </Flex>
  );
};

export default Components;
