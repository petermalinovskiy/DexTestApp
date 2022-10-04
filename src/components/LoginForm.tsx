import React, { useRef, useState} from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../styles/Styles';
import { BLUE, WHITE } from '../../styles/stylesConstant';
import { useAppDispatch } from '../app/hooks';
import { login } from '../app/reducers/authorizationReducer';
import { authorizationURL } from '../features/requestURL';
import { serverRequest } from '../features/serverRequest';
 
export const LoginForm = () => {
  const [emailInputValue, setEmailInputValue] = useState<string>('')
  const [passwordInputValue, setPasswordInputValue] = useState<string>('')
  const [loginError, setLoginError] = useState<boolean>(false)
  const dispatch = useAppDispatch();

  const user = {
    email: emailInputValue,
    password: passwordInputValue
  }

  const getAuthorized = () =>  serverRequest(authorizationURL, user).then((data) => (dispatch(login(data))));

  const authorizeHandler = () => {
    getAuthorized()
    .then(() => setEmailInputValue(''))
    .then(() => setPasswordInputValue(''))
  } 

  const passwordInput = useRef<TextInput>(null)
  
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
          onSubmitEditing={() => passwordInput?.current?.focus()}
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
          onSubmitEditing={() => authorizeHandler()}
          ref={passwordInput}
        />
      </View>

      <TouchableOpacity style={[globalStyles.loginButton, {backgroundColor: BLUE}]} onPress={() => authorizeHandler()}>
        <Text style={globalStyles.loginButtonText}>Войти</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
