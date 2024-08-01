import { Box, FormLabel, Input, Text } from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";

export default function MainInput({ labelText, infoText, ...props }) {
  return (
    <Box>
      <FormLabel>{labelText}</FormLabel>
      <Input placeholder="Type..." {...props} w="auto" />
      <Box display="flex" alignItems="center" mt={1}>
        <QuestionOutlineIcon color="gray.500" mr={2} boxSize={3} />
        <Text fontSize="xs" color="gray.500">
          {infoText}
        </Text>
      </Box>
    </Box>
  );
}
