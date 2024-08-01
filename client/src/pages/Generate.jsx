import React, { useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Container from "../components/Container/Container";
import HorizontalRule from "../widgets/HorizontalRule/HorizontalRule";
import { CopyIcon } from "@chakra-ui/icons";
import GenerateCard from "../components/GenerateCard/GenerateCard";
import GenerateQuerries from "../components/GenerateQuerries/GenerateQuerries";

export default function Generate({ setIsAuthenticated }) {
  return (
    <>
      <Container>
        <Header />
        <Box mt={7} mb={4}>
          <Heading as="h2" size="x1">
            Appeal Generator
          </Heading>
        </Box>
        <GenerateQuerries />

        <HorizontalRule mt={6} mb={6} />

        <Box display={"flex"} color={"gray.500"} fontSize={12}>
          <Text mr={2}>All fields clickable. Click for copy field</Text>
          <CopyIcon mt={1} boxSize={3} pb={4} />
        </Box>
        <GenerateCard />
        <GenerateCard />
      </Container>
    </>
  );
}
