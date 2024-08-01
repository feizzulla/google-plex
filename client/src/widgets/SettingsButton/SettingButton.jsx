import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Button,
} from "@chakra-ui/react";
import Grap from "../SettingsButton/Grap";

export default function SettingButton({ onClick }) {
  return (
    <Menu>
      <MenuButton
        bg="none"
        as={IconButton}
        p={0}
        icon={<Grap />}
        minW="30px"
        width="30px"
        height="30px"
        borderRadius="100%"
        _hover={{ opacity: 0.9 }}
      ></MenuButton>
      <MenuList>
        <MenuItem onClick={() => alert("Option 1 clicked")}>
          Suspicious Payments
        </MenuItem>
        <MenuItem onClick={() => alert("Option 2 clicked")}>
          Business Practices
        </MenuItem>
        <MenuItem onClick={() => alert("Option 3 clicked")}>
          Circumventing policy
        </MenuItem>
        <MenuItem onClick={() => alert("Option 3 clicked")}>
          Unpaid balance
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
