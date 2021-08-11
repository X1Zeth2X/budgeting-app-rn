import 'react-native-gesture-handler';
import React from 'react';
import { extendTheme, NativeBaseProvider } from 'native-base';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import MainScreen from './Screens/Main';
import OtherScreen from './Screens/Other';

const Stack = createStackNavigator();

// Theme config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
}

const customTheme = extendTheme({ config });

const App: React.FC = () => {
  return (
    <NativeBaseProvider theme={customTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={MainScreen}
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen name="Other" component={OtherScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
