import React, { useRef, useState} from 'react'
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, Keyboard , View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ERROR_RED } from '../../styles/stylesConstant';
import { useAppDispatch } from '../app/hooks';
import { login, selectSessionID } from '../app/reducers/loginReducer';
import { useAppSelector } from "../app/hooks";
import { useNavigation } from '@react-navigation/native';
import { ProfileScreenNavigationProp } from '../../navigation';

interface ILoginFormProps {

}
 
const LoginForm: React.FC<ILoginFormProps> = () => {
  const [emailInputValue, setEmailInputValue] = useState<string>('')
  const [passwordInputValue, setPasswordInputValue] = useState<string>('')
  const [loginError, setLoginError] = useState<boolean>(false)
  const dispatch = useAppDispatch();

  const sessionID = useAppSelector(selectSessionID);
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const user = {
    email: emailInputValue,
    password: passwordInputValue
  }

  const authorizationURL  = 'http://ci2.dextechnology.com:8000/api/User/Authorization'

  const authorization = (url: string) => { 
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then((r) => r.json())
    .catch(function(error) {
      setLoginError(true);
      console.log(error)
    });
  };

  const getAuthorized = () =>  authorization(authorizationURL).then((data) => (console.log(data), dispatch(login(data))));


  const authorizeHandler = () => {
    getAuthorized()
    .then(() => setEmailInputValue(''))
    .then(() => setPasswordInputValue(''))
    .then(sessionID ? (() => navigation.navigate('Main')) : null) //подумать над вариантом получше
  }
  
  

  return (
    <SafeAreaView style={styles.container} >
      {loginError ? <Text style={styles.loginError}>Неверный логин или пароль</Text> : null}
      <View style={[styles.inputView,  (loginError ? styles.errorInputView:null)]}>
        <TextInput
          style={styles.TextInput}
          onChangeText={value => (setEmailInputValue(value), setLoginError(false))}
          value={emailInputValue}
          placeholder="email"
          placeholderTextColor="#ffffff"
          onSubmitEditing={Keyboard.dismiss}
        />
      </View>
      <View style={[styles.inputView,  (loginError ? styles.errorInputView:null)]}>
        <TextInput
          style={styles.TextInput}
          placeholder="Пароль"
          placeholderTextColor="#ffffff"
          secureTextEntry={true}
          onChangeText={value => (setPasswordInputValue(value), setLoginError(false))}
          value={passwordInputValue}
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

  loginError: {
    color: '#ffffff',
    fontFamily: 'SF-UI-Display-Bold',
    fontSize: 18,
    backgroundColor: ERROR_RED,
    borderRadius: 10,
    paddingHorizontal: 10
  },

  errorInputView: {
    borderColor: ERROR_RED,
    color: ERROR_RED
  }, 
});
 
export default LoginForm;