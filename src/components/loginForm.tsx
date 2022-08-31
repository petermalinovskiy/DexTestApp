import React, { useRef, useState} from 'react'
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, Keyboard , View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ILoginFormProps {
  getEmail: (value: string) => void,
  getPassword: (value: string) => void,
  getAuthorized: () => void,
}
 
const LoginForm: React.FC<ILoginFormProps> = ({getEmail, getPassword, getAuthorized}) => {
 const [emailInputValue, setEmailInputValue] = useState<string>('')
 const [passwordlInputValue, setPasswordInputValue] = useState<string>('')

  const authorizeHandler = () => {
    getAuthorized();
    setEmailInputValue('');
    setPasswordInputValue('');
  }

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          onChangeText={value => {setEmailInputValue(value), getEmail(value)}}
          value={emailInputValue}
          placeholder="email"
          placeholderTextColor="#ffffff"
          onSubmitEditing={Keyboard.dismiss}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Пароль"
          placeholderTextColor="#ffffff"
          secureTextEntry={true}
          onChangeText={value => {setPasswordInputValue(value), getPassword(value)}}
          value={passwordlInputValue}
          onSubmitEditing={Keyboard.dismiss}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={() => authorizeHandler()}>
        <Text style={styles.loginText}>Войти</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    borderBottomWidth: 1,
    borderColor: '#ffffff',
    width: "80%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color: '#FFFFFF'
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: '#C8D9AF'
  },

  loginText: {
    fontFamily: 'SF-UI-Display-Regular',
    fontSize: 18,
    color: '#FFFFFF'
  },
});
 
export default LoginForm;