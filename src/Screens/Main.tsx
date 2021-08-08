import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { useNavigation } from '@react-navigation/native';

import {
  Box,
  Button,
  Heading,
  Text,
} from 'native-base';

type MainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;

const MainScreen: React.FC = () => {
  const navigation = useNavigation<MainScreenProp>();

  return (
    <Box safeArea flex={1} w="90%" mx="auto" mt={10}>
      <Heading>
        Budget App
      </Heading>

      <Box shadow={3} rounded="lg" bg="white" my={10}>
        <Text p={3}>
          Text
        </Text>
      </Box>

      <Button onPress={() => navigation.navigate('Other')}>
        Go to Other
      </Button>
    </Box>
  )
}

export default MainScreen;
