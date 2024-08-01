import React from "react";
import { FormControl, HStack } from "@chakra-ui/react";
import MainButton from "../../widgets/buttons/MainButton";
import InputsGenerator from "../InputsGenerator/InputsGenerator";
import SettingButton from "../../widgets/SettingsButton/SettingButton";

export default function GenerateQuerries() {
  return (
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
        <InputsGenerator
          labelText="Language"
          infoText="Optional. Default English"
        />
        <SettingButton />
        <MainButton>Generate</MainButton>
      </HStack>
    </FormControl>
  );
}
