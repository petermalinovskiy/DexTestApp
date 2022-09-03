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
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from "../../navigation";

type HomeScreenProps = NativeStackScreenProps<StackParamList, "Login">

const Login: React.FC<HomeScreenProps> = () => {

  return ( 
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground source={require('../../assets/img/logoBackGround.png')} resizeMode='stretch' style={globalStyles.bgImage}>
        <LinearGradient colors={["rgba(0,0,0, 0.1)", "rgba(243,233,216, 0.79)"]} style={styles.gradient}>
          <Text style={globalStyles.loginText}>CoffeTime</Text>
          <LoginForm />
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
 
export default Login;

