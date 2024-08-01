import { Box } from "@chakra-ui/react";

export default function Logotype({
  src = "/img/logo.svg",
  alt = "MARF - monitoring, appeals, registration, farming",
  ...props
}) {
  return (
    <Box {...props}>
      <img src={src} alt={alt} />
    </Box>
  );
}
