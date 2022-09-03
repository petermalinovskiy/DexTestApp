import React from "react";
import Main from "./src/screens/Main";
import EnterScreen from "./src/screens/EnterScreen";
import Login from "./src/screens/Login";
import Registration from "./src/screens/Registration";
import Cafe from "./src/screens/Cafe";
import Drink from "./src/screens/Drink";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type StackParamList = {
  EnterScreen: undefined;
  Login: undefined;
  Registration: undefined;
  Main: undefined;
  Cafe: {id: string, name: string, address: string, coordinates: string, description: string, images: string,};
  Drink: undefined;
};

export type Props = NativeStackScreenProps<StackParamList, 'Cafe'>;

const Stack = createStackNavigator<StackParamList>();

export default function Navigate() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="EnterScreen"
          component={EnterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="Registration"
          component={Registration}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cafe"
          component={Cafe}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Drink"
          component={Drink}
          options={{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  )
}