import React from "react";
import {
  Stack,
  Text,
  Heading,
  SimpleGrid,
  Container,
  Avatar,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";

const contributorsList = [
  {
    name: "Elizabet Oliveira",
    githubUsername: "miukimiu",
    githubUrl: "https://github.com/miukimiu",
    imageUrl: "https://avatars1.githubusercontent.com/u/2750668?s=460&v=4",
  },
  {
    name: "Alicia Catalina",
    githubUsername: "aliciacatalina",
    githubUrl: "https://github.com/aliciacatalina",
    imageUrl: "https://avatars1.githubusercontent.com/u/1421493?s=460&v=4",
  },
  {
    name: "Sara Vieira",
    githubUsername: "SaraVieira",
    githubUrl: "https://github.com/SaraVieira",
    imageUrl: "https://avatars1.githubusercontent.com/u/1051509?s=400&v=4",
  },
  {
    name: "Vincent Lemeunier",
    githubUsername: "kombucha",
    githubUrl: "https://github.com/kombucha",
    imageUrl: "https://avatars0.githubusercontent.com/u/1584370?s=460&v=4",
  },
  {
    name: "Ricardo Abreu",
    githubUsername: "codenakama",
    githubUrl: "https://github.com/codenakama",
    imageUrl: "https://avatars1.githubusercontent.com/u/5193050?s=460&v=4",
  },
  {
    name: "Yuan Chuan",
    githubUsername: "yuanchuan",
    githubUrl: "https://github.com/yuanchuan",
    imageUrl: "https://avatars3.githubusercontent.com/u/250426?s=460&v=4",
  },
  {
    name: "Karin Hendrikse",
    githubUsername: "khendrikse",
    githubUrl: "https://github.com/khendrikse",
    imageUrl: "https://avatars3.githubusercontent.com/u/30577427?s=460&v=4",
  },
  {
    name: "Italo Aurelio",
    githubUsername: "Italox",
    githubUrl: "https://github.com/Italox",
    imageUrl: "https://avatars2.githubusercontent.com/u/11761170?s=460&v=4",
  },
  {
    name: "Vincent",
    githubUsername: "Vinnl",
    githubUrl: "https://github.com/Vinnl",
    imageUrl: "https://avatars0.githubusercontent.com/u/4251?s=460&v=4",
  },
  {
    name: "eliasparis",
    githubUsername: "eliasparis",
    githubUrl: "https://github.com/eliasparis",
    imageUrl: "https://avatars2.githubusercontent.com/u/13252924?s=460&v=4",
  },
  {
    name: "uselessdev",
    githubUsername: "uselessdev",
    githubUrl: "https://github.com/uselessdev",
    imageUrl: "https://avatars1.githubusercontent.com/u/6943919?s=400&v=4",
  },
  {
    name: "serotonyn",
    githubUsername: "serotonyn",
    githubUrl: "https://github.com/serotonyn",
    imageUrl: "https://avatars1.githubusercontent.com/u/22910212?s=400&v=4",
  },
  {
    name: "pducolin",
    githubUsername: "pducolin",
    githubUrl: "https://github.com/pducolin",
    imageUrl:
      "https://avatars0.githubusercontent.com/u/45568537?s=400&u=0da2353f210ef4d1e81508ca1e005e51f0025df1&v=4",
  },
  {
    name: "Sue",
    githubUsername: "sioanis",
    githubUrl: "https://github.com/sioanis",
    imageUrl:
      "https://avatars2.githubusercontent.com/u/3586765?s=400&u=180553463632d778daef0c3ecf70b34f7aff8226&v=4",
  },
  {
    name: "Oliver Lang",
    githubUsername: "LangOliver",
    githubUrl: "https://github.com/LangOliver",
    imageUrl:
      "https://avatars1.githubusercontent.com/u/2932505?s=400&u=b0281a21a31ce6a2b3a5dba66496e7d1601faa8a&v=4",
  },
];

const Contributors = () => {
  const marginYSpace = 40;

  return (
    <Box background={useColorModeValue("blue.50", "gray.900")} width="100%">
      <Container maxWidth="container.xl" px={{ base: 4 }}>
        <Stack
          spacing={4}
          as={Container}
          maxW={"4xl"}
          textAlign={"center"}
          mb={marginYSpace / 2}
        >
          <Heading fontSize={"4xl"}>For multiple scenarios</Heading>
          <Text fontSize={"xl"}>
            No more boring apps! The React Kawaii library was created with one
            thing in mind, make your app fun and cute!
          </Text>
        </Stack>

        <SimpleGrid columns={6} spacing={2} mb={marginYSpace}>
          {contributorsList.map((item) => (
            <Avatar
              src={item.imageUrl}
              name={`${item.name} - ${item.githubUsername}`}
              title={`${item.name} - ${item.githubUsername}`}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Contributors;
