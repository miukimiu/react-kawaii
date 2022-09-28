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
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
} from "@chakra-ui/react";
import { CirclePicker } from "react-color";

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

const colors = [
  "#A6E191",
  "#40407a",
  "#706fd3",
  "#f7f1e3",
  "#34ace0",
  "#2c2c54",
  "#474787",
  "#aaa69d",
  "#227093",
  "#218c74",
  "#ff5252",
  "#ff793f",
  "#d1ccc0",
  "#ffb142",
  "#ffda79",
  "#b33939",
  "#cd6133",
  "#84817a",
  "#cc8e35",
  "#ccae62",
];

export const KawaiiList: FunctionComponent = () => {
  const [color, setColor] = useState(colors[0]);

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
    <Container maxWidth="container.xl" px={{ base: 4 }}>
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
                colors={colors}
                color={color}
                onChangeComplete={onChangeComplete}
              />
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </HStack>

      <SimpleGrid columns={4} spacing={10}>
        {list.map((item) => (
          <Box
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
  );
};
