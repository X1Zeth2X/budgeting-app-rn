import React from 'react';
import { Box, Button } from 'native-base';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { useNavigation } from '@react-navigation/native';

type OtherScreenProp = StackNavigationProp<RootStackParamList, 'Other'>;

const OtherScreen: React.FC = () => {
  const navigation = useNavigation<OtherScreenProp>();

  return (
    <Box>
      <Button onPress={() => navigation.goBack()}>
        hmmm
      </Button>
    </Box>
  )
}

export default OtherScreen;

