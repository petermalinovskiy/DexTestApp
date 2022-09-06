import React from "react";
import {
  Text,
  ImageBackground,
} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from '../../styles/Styles'
import { LoginForm } from "../components/LoginForm";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from "../../navigation";

type HomeScreenProps = NativeStackScreenProps<StackParamList, "Login">

export const Login: React.FC<HomeScreenProps> = () => {

  return ( 
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground source={require('../../assets/img/logoBackGround.png')} resizeMode='stretch' style={globalStyles.spaceAround}>
        <LinearGradient colors={["rgba(0,0,0, 0.1)", "rgba(243,233,216, 0.79)"]} style={globalStyles.spaceAround}>
          <Text style={globalStyles.loginText}>CoffeTime</Text>
          <LoginForm />
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
   );
}

