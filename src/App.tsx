import React from 'react';
import {
  NativeBaseProvider,
  Box,
  useColorMode,
  useColorModeValue,
  Button,
  Heading,
  Container
} from 'native-base';

const App: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.200", "gray.800");

  return (
    <NativeBaseProvider>
      <Box bg={bg} flex={1}>
        <Heading>
          Budgeting App
        </Heading>

        <Button onPress={() => toggleColorMode()}>
          Hello
        </Button>
      </Box>
    </NativeBaseProvider>
  );
}

export default App;
