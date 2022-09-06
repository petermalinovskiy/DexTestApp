import React from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from '../../styles/Styles'
import { RegistrationForm } from "../components/RegistrationForm";


export const Registration = () => {


  return ( 
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground source={require('../../assets/img/logoBackGround.png')} resizeMode='cover' style={globalStyles.spaceAround}>
        <LinearGradient colors={["rgba(0,0,0, 0.1)", "rgba(243,233,216, 0.79)"]} style={globalStyles.spaceAround}>
          <Text style={globalStyles.loginText}>CoffeTime</Text>
          <RegistrationForm />
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView> 
   );
}

