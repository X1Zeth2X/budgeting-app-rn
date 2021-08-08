import React from 'react';
import { Box, Button } from 'native-base';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { useNavigation } from '@react-navigation/native';

type MainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;

const MainScreen: React.FC = () => {
  const navigation = useNavigation<MainScreenProp>();

  return (
    <Box>
      <Button onPress={() => navigation.push('Other')}>
        Go to Other
      </Button>
    </Box>
  )
}

export default MainScreen;
