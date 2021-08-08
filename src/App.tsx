import 'react-native-gesture-handler';
import React from 'react';
import { NativeBaseProvider } from 'native-base';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import MainScreen from './Screens/Main';
import OtherScreen from './Screens/Other';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={MainScreen} />
          <Stack.Screen name="Other" component={OtherScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
