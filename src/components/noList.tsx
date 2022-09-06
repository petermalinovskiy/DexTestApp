import React from "react";
import { Image, Text, View } from "react-native";
import globalStyles from "../../styles/Styles";
 
export const NoList = () => {
  return ( 
    <View style={globalStyles.spaceAround}>
      <View style={globalStyles.spaceAround}>
        <Image source={require('../../assets/img/noListImage.png')} style={{alignSelf: 'center'}}/>
        <Text style={[globalStyles.cafeAdress, {textAlign: 'center'}]}>Здесь нет ни одной чашки кофе. {'\n'} Попробуйте вернуться к нам позже.</Text>
      </View>
    </View>

   );
}