import { Box, Flex, Link, Text, useColorModeValue } from "@chakra-ui/react";

const Footer = ({ ...rest }) => {
  return (
    <Box
      borderTop={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.900")}
      padding={4}
    >
      <Flex as="footer" width="full" justifyContent="center" {...rest}>
        <Text fontSize="sm" color="gray.500">
          {new Date().getFullYear()} -{" "}
          <Link href="https://sznm.dev" isExternal rel="noopener noreferrer">
            sznm.dev
          </Link>
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
