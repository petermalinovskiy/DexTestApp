import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  SafeAreaViewBase
} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from '../../Styles'
import RegistrationForm from "../components/registrationForm";


interface IRegistrationProps {
  email: string,
  password: string
}
 
const Registration: React.FC<IRegistrationProps> = () => {
  return ( 
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground source={require('../../assets/img/logoBackGround.png')} resizeMode="cover" style={globalStyles.bgImage}>
        <LinearGradient colors={["rgba(0,0,0, 0.1)", "rgba(243,233,216, 0.79)"]} style={styles.gradient}>
          <Text style={globalStyles.loginText}>CoffeTime</Text>
          <RegistrationForm/>
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

