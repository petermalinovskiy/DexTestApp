import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../styles/Styles";
import { TopLine } from "./TopLine";
 
export const NoList = () => {
  return ( 
    <View style={globalStyles.flex}>
      <View style={[globalStyles.spaceAround, globalStyles.noList]}>
        <TopLine/>
        <Image source={require('../../assets/img/noListImage.png')} style={{alignSelf: 'center'}}/>
        <Text style={[globalStyles.cafeText, {textAlign: 'center'}]}>Здесь нет ни одной чашки кофе. {'\n'} Попробуйте вернуться к нам позже.</Text>
      </View>
    </View>
   );
}
