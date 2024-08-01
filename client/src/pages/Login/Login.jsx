import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { Box } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import MainButton from "../../widgets/buttons/MainButton";
import { Link } from "@chakra-ui/react";
import Logotype from "../../components/Logotype/Logotype";

function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "user@example.com" && password === "password") {
      setIsAuthenticated(true);
      navigate("/dashboard");
    } else {
      alert("Неверный логин или пароль");
    }
  };

  const handleInputChangeEmail = (e) => setEmail(e.target.value);

  return (
    <>
      <Box className={styles.container}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Logotype mb="25px" />

          <Box
            border="1px"
            borderColor="gray.200"
            bg={"white"}
            borderRadius="8"
            p={"24px"}
          >
            <FormControl w={"375px"}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                mb={"10px"}
                onChange={handleInputChangeEmail}
                value={email}
              />

              <FormLabel>Password</FormLabel>
              <Input type="password" mb={"20px"} />
              <MainButton mb={"10px"} w="100%">
                Sign In
              </MainButton>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Link
                  href="#"
                  isExternal
                  textDecoration="underline"
                  _hover={{ textDecoration: "none" }}
                >
                  Forgot password?
                </Link>
                <Link
                  href="#"
                  isExternal
                  textDecoration="underline"
                  _hover={{ textDecoration: "none" }}
                >
                  Registration
                </Link>
              </Box>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Login;
