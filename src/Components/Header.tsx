import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  useColorMode,
  Avatar,
  Heading,
  HStack,
  Icon,
  IconButton,
  VStack,
  Text
} from 'native-base';

const Header: React.FC = () => {
  const { colorMode, setColorMode } = useColorMode();

  const toggleColorMode = () => {
    setColorMode(
      colorMode === 'dark'
        ? 'light'
        : 'dark'
    );
  }

  return (
    <HStack justifyContent="space-between" m={4}>
      <HStack>
        <Avatar
          source={{
            uri: "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg"
          }}

          mr={2}
        >
          ZL
        </Avatar>

        <VStack>
          <Heading fontSize="2xl">Hi, Linus!</Heading>
          <Text>Welcome back to AppName</Text>
        </VStack>
      </HStack>
      <IconButton
        onPress={toggleColorMode}
        icon={
          <Icon
            color={colorMode === 'dark' ? 'yellow' : 'gray.700'}
            size="md"
            as={
              <Ionicons name={colorMode === 'dark' ? 'flash' : 'moon'}/>
            }
          />
        }
      />
    </HStack>
  )
}

export default Header;