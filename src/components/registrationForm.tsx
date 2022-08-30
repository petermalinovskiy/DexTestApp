import React, { useState, Validator} from 'react'
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, Keyboard , View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface RegistrationFormProps {
  
}
 
const RegistrationForm: React.FC<RegistrationFormProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    "email": email,
    "password": password
  }
 



  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          onChangeText={setEmail}
          value={email}
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
          value={password}
          onChangeText={setPassword}
          onSubmitEditing={Keyboard.dismiss}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} >
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
 
export default RegistrationForm;