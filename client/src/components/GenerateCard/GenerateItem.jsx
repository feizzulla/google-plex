import { Box, Text, VStack, useToast } from "@chakra-ui/react";
import React from "react";
import HorizontalRule from "../../widgets/HorizontalRule/HorizontalRule";
import MainButton from "../../widgets/buttons/MainButton";
import { DeleteIcon } from "@chakra-ui/icons";

export default function GenerateItem({ ...props }) {
  const toast = useToast();

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied to clipboard",
        description: `Has been copied`,
        status: "success",
        duration: 500,
        isClosable: true,
      });
    });
  };

  return (
    <Box w="75%">
      <VStack spacing={1} align="start">
        <Text
          onClick={() => handleCopy("https://www.google.com/")}
          cursor="pointer"
        >
          <strong>Domain: </strong>https://www.google.com/
        </Text>
        <Text
          onClick={() => handleCopy("https://www.google.com/")}
          cursor="pointer"
        >
          <strong>Keywords: </strong> google, google ads, google adwords, google
        </Text>
        <Text
          onClick={() => handleCopy("https://www.google.com/")}
          cursor="pointer"
        >
          <strong>Address: </strong>NW 1212 Circus Ave
        </Text>
        <Text
          onClick={() => handleCopy("https://www.google.com/")}
          cursor="pointer"
        >
          <strong>Post Code: </strong>1Z2 6V2
        </Text>
        <Text
          onClick={() => handleCopy("https://www.google.com/")}
          cursor="pointer"
        >
          <strong>City: </strong>Toronto
        </Text>
        <Text
          onClick={() => handleCopy("https://www.google.com/")}
          cursor="pointer"
        >
          <strong>Payer: </strong>John Doe
        </Text>
        <Text
          onClick={() => handleCopy("https://www.google.com/")}
          cursor="pointer"
        >
          <strong>Business Description: </strong>Google is a widely-used search
          engine that allows users to find information, images, videos, and more
          on the internet. It also offers services like email, maps, and cloud
          storage.
        </Text>
        <Text
          onClick={() => handleCopy("https://www.google.com/")}
          cursor="pointer"
        >
          <strong>Description of the problem: </strong>I am writing to
          respectfully appeal the suspension of my Google Ads account (Account
          ID: [Your Account ID]) due to suspicious payment activity. I
          understand the importance of maintaining a secure and trustworthy
          advertising platform, and I appreciate the measures Google Ads takes
          to protect both advertisers and users. However, I believe this
          suspension may have been triggered by a misunderstanding or an error,
          and I would like to provide additional information to clarify the
          situation. Firstly, I want to assure you that I have always followed
          Google Ads' policies and guidelines with the utmost care. I have been
          an advertiser with Google Ads for [X years/months], during which time
          I have consistently ensured that all payment methods used were
          legitimate and authorized. To the best of my knowledge, there have
          been no fraudulent activities associated with my account.
        </Text>
      </VStack>
      <MainButton height="25px" mr="25px" mt={3} borderRadius="6px">
        Regenerate
      </MainButton>
      <DeleteIcon cursor="pointer" mt={3} color={"#2C2C2C"} />
      <HorizontalRule mt="25px" />
    </Box>
  );
}
