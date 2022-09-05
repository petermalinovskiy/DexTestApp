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
import { useAppSelector } from "./src/app/hooks";
import { selectSessionID } from "./src/app/reducers/loginReducer";
import Icon from 'react-native-vector-icons/FontAwesome'
import { LITE_GREY, LOBSTER, WHITE } from "./styles/stylesConstant";

export type StackParamList = {
  EnterScreen: undefined;
  Login: undefined;
  Registration: undefined;
  Main: undefined;
  Cafe: {id: string, name: string, address: string, coordinates: string, description: string, images: string,};
  Drink: {sessionID: string|undefined, productId: string};
};

export type RegistrationProps = NativeStackScreenProps<StackParamList, 'Registration'>;
export type RegistrationProfileScreenNavigationProp = RegistrationProps['navigation'];

export type MainProps = NativeStackScreenProps<StackParamList, 'Main'>;
export type MainProfileScreenNavigationProp = MainProps['navigation'];

export type CafeProps = NativeStackScreenProps<StackParamList, 'Cafe'>;
export type CafeProfileScreenNavigationProp = CafeProps['navigation'];

export type DrinkProps = NativeStackScreenProps<StackParamList, 'Drink'>;
export type DrinkProfileScreenRouteProp = DrinkProps['route'];

const Stack = createStackNavigator<StackParamList>();

export default function Navigate() {
  const sessionID = useAppSelector(selectSessionID);
  return (
    <NavigationContainer>
      <Stack.Navigator >
        {!sessionID ? (
        <>
          <Stack.Screen
            name="EnterScreen"
            component={EnterScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: true, 
              title: '',
              headerTransparent: true,
              headerBackImage: ()=>(<Icon name="angle-left" color={WHITE} size={30} style={{marginLeft: 10}}/>)
            }}
          />
            <Stack.Screen
            name="Registration"
            component={Registration}
            options={{
              headerShown: true, 
              title: '',
              headerTransparent: true,
              headerBackImage: ()=>(<Icon name="angle-left" color={WHITE} size={30} style={{marginLeft: 10}}/>)
            }}
          />
        </>
        ) : (
        <>        
          <Stack.Screen
            name="Main"
            component={Main}
            options={{
              headerShown: true, 
              title: 'CoffeTime', 
              headerTitleAlign: 'center', 
              headerTitleStyle: {
                fontFamily: LOBSTER,
                fontSize: 22,
                color: LITE_GREY,
                paddingTop: 10
              },
              headerBackImage: ()=>(null)
            }}
          />
          <Stack.Screen
            name="Cafe"
            component={Cafe}
            options={{
              headerShown: true, 
              title: 'CoffeTime', 
              headerTitleAlign: 'center', 
              headerTitleStyle: {
                fontFamily: LOBSTER,
                fontSize: 22,
                color: LITE_GREY,
                paddingTop: 10
              },
              headerBackImage: ()=>(<Icon name="angle-left" color={LITE_GREY} size={30} style={{marginLeft: 10}}/>)
            }}
          />
          <Stack.Screen
            name="Drink"
            component={Drink}
            options={{
              headerShown: true, 
              title: 'CoffeTime', 
              headerTitleAlign: 'center', 
              headerTitleStyle: {
                fontFamily: LOBSTER,
                fontSize: 22,
                color: LITE_GREY,
                paddingTop: 10,
              },
              headerBackImage: ()=>(<Icon name="angle-left" color={LITE_GREY} size={30} style={{marginLeft: 10}}/>)
            }}
          />
        </>)} 
      </Stack.Navigator>
    </NavigationContainer>
  )
}