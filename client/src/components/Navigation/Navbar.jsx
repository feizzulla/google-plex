import React from "react";
import { Box, Flex, Link, HStack } from "@chakra-ui/react";
import MainButton from "../../widgets/buttons/MainButton";

export default function Navbar() {
  return (
    <Box px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack as="nav" spacing={8} display={{ base: "none", md: "flex" }}>
          <Link href="/dashboard" color="black" fontWeight="semibold">
            Monitoring
          </Link>
          <Link href="/tasks" color="black" fontWeight="semibold">
            Tasks
          </Link>
          <Link href="/farming" color="black" fontWeight="semibold">
            Farming
          </Link>
          <Link href="/registratin" color="black" fontWeight="semibold">
            Registrations
          </Link>
          <Link href="/generate" color="black" fontWeight="semibold">
            GPT
          </Link>
          <Link href="/add" color="black">
            <MainButton width="85px">Add</MainButton>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}
