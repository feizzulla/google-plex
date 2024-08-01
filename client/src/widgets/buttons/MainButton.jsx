import React from "react";
import { Button } from "@chakra-ui/react";

export default function MainButton({ children, ...props }) {
  return (
    <Button
      bg="#2C2C2C"
      color="white"
      width="auto"
      borderRadius="8px"
      _hover={{ bg: "#404040" }}
      fontWeight="normal"
      fontSize="sm"
      {...props}
    >
      {children}
    </Button>
  );
}
