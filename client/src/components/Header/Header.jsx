import { Box, Center } from "@chakra-ui/react";
import React from "react";
import Logotype from "../Logotype/Logotype";
import Navbar from "../Navigation/Navbar";
import HorizontalRule from "../../widgets/HorizontalRule/HorizontalRule";

export default function Header() {
  return (
    <>
      <Box
        display="flex"
        alignItems={"center"}
        justifyContent={"space-between"}
        h={"100px"}
      >
        <Logotype />
        <Navbar />
      </Box>
      <HorizontalRule mt={3} />
    </>
  );
}
