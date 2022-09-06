import React, { useState} from 'react'
import { Text, TextInput, TouchableOpacity, Keyboard , View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import globalStyles from '../../styles/Styles';
import { BLUE, WHITE } from '../../styles/stylesConstant';
import { useAppDispatch } from '../app/hooks';
import { login } from '../app/reducers/loginReducer';

interface ILoginFormProps {
}
 
export const LoginForm: React.FC<ILoginFormProps> = () => {
  const [emailInputValue, setEmailInputValue] = useState<string>('')
  const [passwordInputValue, setPasswordInputValue] = useState<string>('')
  const [loginError, setLoginError] = useState<boolean>(false)
  const dispatch = useAppDispatch();

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
  } 
  
  return (
    <SafeAreaView>
      {loginError ? <Text style={globalStyles.loginError}>Неверный логин или пароль</Text> : null}
      <View style={[globalStyles.inputView,  (loginError ? globalStyles.errorInputView:null)]}>
        <TextInput
          style={globalStyles.TextInput}
          onChangeText={value => (setEmailInputValue(value), setLoginError(false))}
          value={emailInputValue}
          placeholder="email"
          placeholderTextColor={WHITE}
          onSubmitEditing={Keyboard.dismiss}
        />
      </View>
      <View style={[globalStyles.inputView,  (loginError ? globalStyles.errorInputView:null)]}>
        <TextInput
          style={globalStyles.TextInput}
          placeholder="Пароль"
          placeholderTextColor={WHITE}
          secureTextEntry={true}
          onChangeText={value => (setPasswordInputValue(value), setLoginError(false))}
          value={passwordInputValue}
          onSubmitEditing={Keyboard.dismiss}
        />
      </View>

      <TouchableOpacity style={[globalStyles.loginButton, {backgroundColor: BLUE}]} onPress={() => authorizeHandler()}>
        <Text style={globalStyles.loginButtonText}>Войти</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}