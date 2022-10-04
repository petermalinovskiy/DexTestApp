import React from "react";
import { View, Text, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from '../../styles/Styles';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from "../../navigation";
import { BLUE, LIGHT_GREEN } from "../../styles/stylesConstant";

type HomeScreenProps = NativeStackScreenProps<StackParamList, "EnterScreen">

export const EnterScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return ( 
    <SafeAreaView style={globalStyles.flex}>
      <ImageBackground source={require('../../assets/img/logoBackGround.png')} resizeMode='cover' style={globalStyles.spaceAround}>
        <LinearGradient colors={["rgba(0,0,0, 0.1)", "rgba(243,233,216, 0.79)"]} style={globalStyles.spaceAround}>
          <Text style={globalStyles.loginText}>CoffeTime</Text>
          <View>
            <View style={[globalStyles.loginButton, {backgroundColor: BLUE}]}>
              <TouchableWithoutFeedback  onPress={() => navigation.navigate('Login')}>
                <View style={globalStyles.containerRow}>              
                  <Text style={globalStyles.loginButtonText}>Войти</Text>
                </View>
              </TouchableWithoutFeedback>  
            </View>
            <View style={[globalStyles.loginButton, {backgroundColor: LIGHT_GREEN}]}>
              <TouchableWithoutFeedback onPress={() => navigation.navigate('Registration')}>
                <Text style={globalStyles.loginButtonText}>Зарегистрироваться</Text>
              </TouchableWithoutFeedback>  
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView> 
   );
}
 

