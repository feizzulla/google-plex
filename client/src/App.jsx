import React from "react";
import Routers from "./routes/Routers";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Routers />
    </ChakraProvider>
  );
}

export default App;
