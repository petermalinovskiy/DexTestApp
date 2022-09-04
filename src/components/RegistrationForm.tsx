import React, { useRef, useState} from 'react'
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, Keyboard , View, Modal, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ERROR_RED } from '../../styles/stylesConstant';
import { useNavigation } from '@react-navigation/native';
import { ProfileScreenNavigationProp } from '../../navigation';

interface IRegistrationFormProps {

}
 
const RegistrationForm: React.FC<IRegistrationFormProps> = () => {
  const [emailInputValue, setEmailInputValue] = useState<string>('')
  const [passwordInputValue, setPasswordInputValue] = useState<string>('')
  const [repeatPasswordInputValue, setRepeatPasswordInputValue] = useState<string>('')
  const [passwordError, setPasswordError] = useState<boolean>(false)
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [isResgistred, setIsResgistred] = useState<boolean>(false)

  const navigation = useNavigation<ProfileScreenNavigationProp>();

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
    <SafeAreaView style={styles.container} >
      {passwordError ? <Text style={styles.loginError}>Пароли не совпадают</Text> : null}
      <Modal transparent={true} visible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.modalBlock}>
            <Text style={styles.Modalitle}>{isResgistred ? 'Регистрация прошла успешно' : 'Что-то пошло не так. Попробуйте еще раз'}</Text>
            <TouchableOpacity style={styles.loginBtn} onPress={isResgistred ? (() => navigation.navigate('Login')) : (() => (setModalVisible(false)))}>
              <Text style={styles.loginText}>{isResgistred ? 'Войти' : 'Закрыть'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={[styles.inputView,  (passwordError ? styles.errorInputView:null)]}>
        <TextInput
          style={styles.TextInput}
          onChangeText={value => setEmailInputValue(value)}
          value={emailInputValue}
          placeholder="email"
          placeholderTextColor="#ffffff"
          onSubmitEditing={Keyboard.dismiss}
        />
      </View>
      <View style={[styles.inputView,  (passwordError ? styles.errorInputView:null)]}>
        <TextInput
          style={styles.TextInput}
          placeholder="Пароль"
          placeholderTextColor="#ffffff"
          secureTextEntry={true}
          onChangeText={value => (setPasswordInputValue(value), setPasswordError(false))}
          value={passwordInputValue}
          onSubmitEditing={Keyboard.dismiss}
        />
      </View>
      <View style={[styles.inputView,  (passwordError ? styles.errorInputView:null)]}>
        <TextInput
          style={styles.TextInput}
          placeholder="Повторите пароль"
          placeholderTextColor="#ffffff"
          secureTextEntry={true}
          onChangeText={value => (setRepeatPasswordInputValue(value), setPasswordError(false))}
          value={repeatPasswordInputValue}
          onSubmitEditing={Keyboard.dismiss}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={() => registrationHandler()}>
        <Text style={styles.loginText}>Зарегистрироваться</Text>
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
    color: '#FFFFFF'
  },

  loginBtn: {
    minWidth: "80%",
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

  registrationModal: {
    flex: 1,
    padding: 30
  },

  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
    paddingVertical: 200,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    
  },

  modalBlock: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 65,
    alignItems: "center",
    shadowColor: "#fff",
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 1,
    shadowRadius: 40
  },

  modalButton: {
    height: 60,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#226ba7',
    borderRadius: 50,    
    justifyContent: 'center',
    backgroundColor: '#56a4f2',
    paddingHorizontal: 15
  },

  Modalitle: {
    fontFamily: 'SF-UI-Display-Regular',
    fontSize: 16,
    color: '#717171'
  }
});
 
export default RegistrationForm;