import React, { FunctionComponent, useState } from "react";
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
import { COLORS } from "../../constants";

const Backpack = React.lazy(
  () => import("react-kawaii/lib/components/backpack")
);
const Browser = React.lazy(() => import("react-kawaii/lib/components/browser"));
const Cat = React.lazy(() => import("react-kawaii/lib/components/cat"));
const Chocolate = React.lazy(
  () => import("react-kawaii/lib/components/chocolate")
);
const CreditCard = React.lazy(
  () => import("react-kawaii/lib/components/creditCard")
);
const Folder = React.lazy(() => import("react-kawaii/lib/components/folder"));
const Ghost = React.lazy(() => import("react-kawaii/lib/components/ghost"));
const IceCream = React.lazy(
  () => import("react-kawaii/lib/components/iceCream")
);
const Mug = React.lazy(() => import("react-kawaii/lib/components/mug"));
const Planet = React.lazy(() => import("react-kawaii/lib/components/planet"));
const SpeechBubble = React.lazy(
  () => import("react-kawaii/lib/components/speechBubble")
);

export const KawaiiList: FunctionComponent = () => {
  const [color, setColor] = useState(COLORS[0]);

  const onChangeComplete = (color: any) => {
    setColor(color.hex);
  };

  const props = { size: 140, color };

  const list = [
    {
      name: "Backpack",
      component: <Backpack {...props} />,
    },
    {
      name: "Browser",
      component: <Browser {...props} />,
    },
    {
      name: "Cat",
      component: <Cat {...props} />,
    },
    {
      name: "Chocolate",
      component: <Chocolate {...props} />,
    },
    {
      name: "Folder",
      component: <Folder {...props} />,
    },
    {
      name: "Ghost",
      component: <Ghost {...props} />,
    },
    {
      name: "IceCream",
      component: <IceCream {...props} />,
    },
    {
      name: "Mug",
      component: <Mug {...props} />,
    },
    {
      name: "Planet",
      component: <Planet {...props} />,
    },
    {
      name: "SpeechBubble",
      component: <SpeechBubble {...props} />,
    },
  ];

  return (
    <>
      <Box
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
        width="100%"
      >
        <Container maxWidth="container.xl" px={{ base: 4 }} py="4">
          <HStack spacing={8}>
            <Input placeholder="medium size" size="md" />

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
        <SimpleGrid columns={4} spacing={10}>
          {list.map((item) => (
            <Box
              key={item.name}
              maxW={"320px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"2xl"}
              rounded={"lg"}
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
        </SimpleGrid>
      </Container>
    </>
  );
};
