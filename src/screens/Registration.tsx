import React, { useState } from "react";
import { Text, ImageBackground, TouchableOpacity, View, Image } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles}  from '../../styles/Styles'
import { RegistrationForm } from "../components/RegistrationForm";
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { LITE_GREY } from "../../styles/stylesConstant";

export const Registration = () => {

  const [path, setPath] = useState<string>('')

  const pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
      setPath(image.path)
    });
  }


  return ( 
    <SafeAreaView style={globalStyles.flex}>
      <ImageBackground source={require('../../assets/img/logoBackGround.png')} resizeMode='cover' style={globalStyles.spaceAround}>
        <LinearGradient colors={["rgba(0,0,0, 0.1)", "rgba(243,233,216, 0.79)"]} style={globalStyles.spaceAround}>
          <Text style={globalStyles.loginText}>CoffeTime</Text>
            <View style={globalStyles.imagePickerContainer}>
              <TouchableOpacity onPress={() => pickImage()} style={globalStyles.imagePicker}>
                {path ? 
                  <Image source={{uri: path}} style={{width: 118, height: 118, borderRadius: 60}}/> :
                  <Icon name={'add-a-photo'} size={50} color={LITE_GREY} style={{alignSelf: 'center'}}/>
                }
              </TouchableOpacity>              
            </View>
          <RegistrationForm />
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView> 
   );
}

  