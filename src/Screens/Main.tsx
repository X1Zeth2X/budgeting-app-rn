import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { useNavigation } from '@react-navigation/native';

import {
  Avatar,
  Box,
  Button,
  Center,
  Divider,
  FlatList,
  Heading,
  HStack,
  Icon,
  IconButton,
  Text,
  useColorMode,
  ScrollView
} from 'native-base';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../Components/Header';
import Budget from '../Components/Budget';

type MainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;

const MainScreen: React.FC = () => {
  const navigation = useNavigation<MainScreenProp>();
  const { colorMode, setColorMode } = useColorMode();

  const toggleColorMode = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark');
  }

  return (
    <Box 
      safeArea
      bgColor={colorMode === 'dark' ? 'gray.800' : 'gray.200'}
    >
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        <Box
          bg={
            colorMode === 'dark'
              ? 'gray.700'
              : 'white'
          }

          borderRadius={30}
          shadow={4}
          p={4}
          m={4}
        >
          <Text fontSize="2xl">
            Balance
          </Text>
          <Divider mt={3}/>

          <HStack alignItems="center" justifyContent="center" mx={1}>
            <Heading fontSize={90}>
              2169
            </Heading>

            <Box mt={3}>
              <Heading fontSize="2xl" ml={2}>
                USD
              </Heading>
              <Heading fontSize="4xl">
                .50
              </Heading>
            </Box>
          </HStack>

          <Button
            borderRadius={20}
            colorScheme="teal"
            shadow={9}
          >
            UPDATE
          </Button>
        </Box>

        <Budget />

        <Box
          flex={1}
          mx={4}
          p={4}
          bg={
            colorMode === 'dark'
              ? 'gray.700'
              : 'white'
          }
          shadow={3}
          roundedTop={30}
        >
          <Text fontSize="2xl">
            Transactions
          </Text>

          <Divider my={3}/>

          <FlatList
            data={[
              { id: 1, name: '', date: '', type: '', amount: '' },
              { id: 2, name: '', date: '', type: '', amount: '' },
              { id: 3, name: '', date: '', type: '', amount: '' },
              { id: 4, name: '', date: '', type: '', amount: '' },
            ]}
            renderItem={({ item }) => (
              <HStack justifyContent="space-between" my={2}>
                <HStack alignItems="center">
                  <Avatar mr={2}>LS</Avatar>
                  
                  <Box>
                    <Heading fontSize="md">Person Name</Heading>
                    <Text fontSize="sm">3 Jun, 6:22PM</Text>
                  </Box>
                </HStack>

                <Box alignItems="flex-end" justifyContent="center">
                  <Heading fontSize="md" color="green.700">+200 USD</Heading>
                  <Text fontSize="sm">Transfer</Text>
                </Box>
              </HStack>
            )}
            keyExtractor={(item) => item.id}
            flex={1}
          />

          <Center>
            <IconButton
              icon={<Icon size="md" as={<Ionicons name="chevron-down"/>} />}
            />
          </Center>
        </Box>
      </ScrollView>
    </Box>
  )
}

export default MainScreen;
