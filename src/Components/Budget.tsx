import React from 'react';
import {
  Box,
  FlatList,
  Heading,
  HStack,
  Icon,
  IconButton,
  Text,
  useColorMode,
} from 'native-base';
import { Dimensions, ListRenderItemInfo } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type TBudget = {
  name: string;
  icon: string;
  total: number;
  isAction?: boolean;
}

const budgets: TBudget[] = [
  {
    name: "Rent",
    icon: "home-outline",
    total: 800.75
  },
  {
    name: "Metro",
    icon: "subway-outline",
    total: 50,
  },
  {
    name: "Other",
    icon: "happy-outline",
    total: 5012.50,
  }
]

const Budget: React.FC = () => {
  const { colorMode } = useColorMode();
  return (
    <FlatList
      mb={4}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={[
        ...budgets,
        { name: 'ADD', icon: "add", isAction: true }
      ]}
      keyExtractor={item => item.name}
      renderItem={({ item, index }: ListRenderItemInfo<TBudget>) => (
        <Box
          key={index}
          bg={
            colorMode === 'dark'
              ? 'gray.700'
              : 'white'
          }
          h={Dimensions.get('window').height / 12}
          mr={5}
          my={2}
          borderRadius={20}
          justifyContent="center"
          shadow={2}
          ml={
            index === 0
              ? 4
              : 0
          }
        >
          {
            item.isAction ?
            <IconButton
              p={4}
              h="100%"
              borderRadius={20}
              icon={
                <Icon as={<Ionicons name={item.icon} />} />
              }
            /> :
            <HStack alignItems="center" w="100%" pl={2} pr={6}>
              <Box
                p={2}
                bgColor={
                  colorMode === 'dark'
                    ? 'gray.600'
                    : 'gray.100'
                }
                borderRadius={15}
              >
                <Icon
                  size="md"
                  as={<Ionicons name={item.icon}/>}
                />
              </Box>

              <Box ml={2}>
                <Heading fontSize="sm">{item.name}</Heading>
                <Text fontSize="sm">${item.total}</Text>
              </Box>
            </HStack>
          }
        </Box>
      )}
    />
  )
}

export default Budget;