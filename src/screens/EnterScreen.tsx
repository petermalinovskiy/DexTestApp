import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from '../../styles/Styles';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from "../../navigation";

type HomeScreenProps = NativeStackScreenProps<StackParamList, "EnterScreen">

const EnterScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return ( 
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground source={require('../../assets/img/logoBackGround.png')} resizeMode='cover' style={globalStyles.bgImage}>
        <LinearGradient colors={["rgba(0,0,0, 0.1)", "rgba(243,233,216, 0.79)"]} style={globalStyles.gradient}>
          <Text style={globalStyles.loginText}>CoffeTime</Text>
          <View>
            <View style={styles.registration}>
              <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
                <View style={styles.buttonContainer}>              
                  <Image style={styles.icon} resizeMode='contain' source={require('../../assets/img/facebookIcon.png')}/>
                  <Text style={styles.loginButton}>Войти через Facebook</Text>
                </View>
              </TouchableWithoutFeedback>  
            </View>
            <View style={[styles.registration, {backgroundColor: '#C8D9AF'}]}>
              <TouchableWithoutFeedback onPress={() => navigation.navigate('Registration')}>
                <Text style={styles.loginButton}>Зарегистрироваться</Text>
              </TouchableWithoutFeedback>  
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView> 
   );
}

const styles = StyleSheet.create({
  registration: {
    height: 52,
    alignSelf: 'center',
    alignItems: 'center',
    width: '80%',
    borderRadius: 26,    
    justifyContent: 'center',
    backgroundColor: '#3B5998',
    marginBottom: 20
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    
  },

  loginButton: {
    fontFamily: 'SF-UI-Display-Regular',
    fontSize: 18,
    color: '#FFFFFF'
  },

  icon: {
    width: 25,
    height: 25,
    marginRight: 20
  },
});
 
export default EnterScreen;

