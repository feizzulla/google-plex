import { Divider } from "@chakra-ui/react";

export default function HorizontalRule({
  borderColor = "gray.200",
  borderWidth = "1px",
  ...props
}) {
  return (
    <Divider borderColor={borderColor} borderWidth={borderWidth} {...props} />
  );
}
