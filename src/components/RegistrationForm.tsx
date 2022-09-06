import React, { useState} from 'react'
import { Text, TextInput, TouchableOpacity, Keyboard , View, Modal, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LIGHT_GREEN, WHITE } from '../../styles/stylesConstant';
import { useNavigation } from '@react-navigation/native';
import { RegistrationProfileScreenNavigationProp } from '../../navigation';
import globalStyles from '../../styles/Styles';

interface IRegistrationFormProps {

}
 
export const RegistrationForm: React.FC<IRegistrationFormProps> = () => {
  const [emailInputValue, setEmailInputValue] = useState<string>('')
  const [passwordInputValue, setPasswordInputValue] = useState<string>('')
  const [repeatPasswordInputValue, setRepeatPasswordInputValue] = useState<string>('')
  const [passwordError, setPasswordError] = useState<boolean>(false)
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [isResgistred, setIsResgistred] = useState<boolean>(false)

  const navigation = useNavigation<RegistrationProfileScreenNavigationProp>();

  const user = {
    email: emailInputValue,
    password: passwordInputValue
  }

  const registrationURL  = 'http://ci2.dextechnology.com:8000/api/User/Register'

  const registration = (url: string) => { 
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then((r) => (console.log(r.ok), r.ok ? setIsResgistred(true) : null))
    .catch(function(error) {
      console.log(error)
    });
  };

  const getRegistred = () =>  registration(registrationURL);

  const registrationHandler = () => {
    if(passwordInputValue!==repeatPasswordInputValue) {
      setPasswordError(true)
    } else { 
    getRegistred()
    .then(() => setEmailInputValue(''))
    .then(() => setPasswordInputValue(''))
    .then(() => setRepeatPasswordInputValue(''))
    .then(() => setModalVisible(true))
    }
  }
  
  return (
    <SafeAreaView>
      {passwordError ? <Text style={globalStyles.loginError}>Пароли не совпадают</Text> : null}
      <Modal transparent={true} visible={modalVisible}>
        <View style={globalStyles.modal}>
          <View style={globalStyles.modalBlock}>
            <Text style={globalStyles.Modalitle}>{isResgistred ? 'Регистрация прошла успешно' : 'Что-то пошло не так. Попробуйте еще раз'}</Text>
            <TouchableOpacity style={[globalStyles.loginButton, {backgroundColor: LIGHT_GREEN, minWidth: '80%'}]} onPress={isResgistred ? (() => navigation.navigate('Login')) : (() => (setModalVisible(false)))}>
              <Text style={globalStyles.loginButtonText}>{isResgistred ? 'Войти' : 'Закрыть'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={[globalStyles.inputView,  (passwordError ? globalStyles.errorInputView:null)]}>
        <TextInput
          style={globalStyles.TextInput}
          onChangeText={value => setEmailInputValue(value)}
          value={emailInputValue}
          placeholder="email"
          placeholderTextColor={WHITE}
          onSubmitEditing={Keyboard.dismiss}
        />
      </View>
      <View style={[globalStyles.inputView,  (passwordError ? globalStyles.errorInputView:null)]}>
        <TextInput
          style={globalStyles.TextInput}
          placeholder="Пароль"
          placeholderTextColor={WHITE}
          secureTextEntry={true}
          onChangeText={value => (setPasswordInputValue(value), setPasswordError(false))}
          value={passwordInputValue}
          onSubmitEditing={Keyboard.dismiss}
        />
      </View>
      <View style={[globalStyles.inputView,  (passwordError ? globalStyles.errorInputView:null)]}>
        <TextInput
          style={globalStyles.TextInput}
          placeholder="Повторите пароль"
          placeholderTextColor={WHITE}
          secureTextEntry={true}
          onChangeText={value => (setRepeatPasswordInputValue(value), setPasswordError(false))}
          value={repeatPasswordInputValue}
          onSubmitEditing={Keyboard.dismiss}
        />
      </View>

      <TouchableOpacity style={[globalStyles.loginButton, {backgroundColor: LIGHT_GREEN}]} onPress={() => registrationHandler()}>
        <Text style={globalStyles.loginButtonText}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

 