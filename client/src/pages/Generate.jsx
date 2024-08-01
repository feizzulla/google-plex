import React, { useState } from "react";
import { Box, FormControl, Heading, HStack, Text } from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Container from "../components/Container/Container";
import InputsGenerator from "../components/InputsGenerator/InputsGenerator";
import SettingButton from "../widgets/SettingsButton/SettingButton";
import MainButton from "../widgets/buttons/MainButton";
import HorizontalRule from "../widgets/HorizontalRule/HorizontalRule";
import { CopyIcon } from "@chakra-ui/icons";
import GenerateItem from "../components/GenerateCard/GenerateItem";

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
        <FormControl display={"flex"}>
          <HStack
            spacing={5}
            w={"100%"}
            display={"flex"}
            alignItems="center"
            justifyContent={"flex-start"}
          >
            <InputsGenerator labelText="Domain" infoText="Enter with https" />
            <InputsGenerator labelText="Full Name" infoText="Optional" />
            <InputsGenerator labelText="Address" infoText="Optional" />
            <InputsGenerator labelText="ADS Client ID" infoText="Optional" />
            <SettingButton />
            <MainButton
              bg="#C00F0C"
              _hover={{ bg: "#B40D0A" }}
              h="30px"
              minW="30px"
            >
              S
            </MainButton>
          </HStack>
          <MainButton>Generate</MainButton>
        </FormControl>
        <HorizontalRule mt={6} mb={6} />

        <Box display={"flex"} color={"gray.500"} fontSize={12}>
          <Text mr={2}>All fields clickable. Click for copy field</Text>
          <CopyIcon mt={1} boxSize={3} />
        </Box>
        <GenerateItem />
      </Container>
    </>
  );
}
