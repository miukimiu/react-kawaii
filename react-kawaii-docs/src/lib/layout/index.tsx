import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" transition="0.5s ease-out" height="100vh">
      <Box display={"flex"} flexDirection="column" height="100%">
        <Header />
        <Box as="main" flex={1}>
          {children}
        </Box>
        <Footer flex={0} />
      </Box>
    </Box>
  );
};

export default Layout;
