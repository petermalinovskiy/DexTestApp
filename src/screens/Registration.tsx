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
import globalStyles from '../../Styles'
import LoginForm from "../components/LoginForm";


interface IRegistrationProps {
  email: string,
  password: string
}
 
const Registration: React.FC<IRegistrationProps> = () => {

  const [userEmail, setEmail] = useState<string>("");
  const [userPassword, setPassword] = useState<string>("");

  const user = {
    email: userEmail,
    password: userPassword
  }
 
  const getEmail = (value: string) => setEmail(value)
  const getPassword = (value: string) => setPassword(value)

  const AuthorizationURL  = 'http://ci2.dextechnology.com:8000/api/User/Authorization'


  const Authorization = (method: string, url: string) => { //добавить try..catch
    return fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }).then((r) => r.json());
  };

  const getAuthorized = () =>  Authorization("POST", AuthorizationURL).then((data) => console.log(data));
  
  return ( 
    <KeyboardAvoidingView
    style={{flex: 1}}
    >
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground source={require('../../assets/img/logoBackGround.png')} resizeMode='stretch' style={globalStyles.bgImage}>
        <LinearGradient colors={["rgba(0,0,0, 0.1)", "rgba(243,233,216, 0.79)"]} style={styles.gradient}>
          <Text>{userEmail}</Text>
          <Text style={globalStyles.loginText}>CoffeTime</Text>
          <LoginForm getEmail={getEmail} getPassword={getPassword} getAuthorized={getAuthorized}/>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
    </KeyboardAvoidingView>
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

