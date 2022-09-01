import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from '../../styles/Styles'

import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";


interface IRegistrationProps {
  email: string,
  password: string
}

const Registration: React.FC<IRegistrationProps> = () => {


  return ( 
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground source={require('../../assets/img/logoBackGround.png')} resizeMode='cover' style={globalStyles.bgImage}>
        <LinearGradient colors={["rgba(0,0,0, 0.1)", "rgba(243,233,216, 0.79)"]} style={globalStyles.gradient}>
          <Text style={globalStyles.loginText}>CoffeTime</Text>
          <RegistrationForm />
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView> 
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  gradient: {
    flex: 1,
    justifyContent: 'center'
    
  },
});
 
export default Registration;

