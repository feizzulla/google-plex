import { Box } from "@chakra-ui/react";
import React from "react";

export default function Container({ children }) {
  return (
    <Box maxW="100%" mx="auto" px={20} pb={3}>
      {children}
    </Box>
  );
}
