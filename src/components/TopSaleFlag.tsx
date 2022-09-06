import React from "react";
import { ImageBackground, Text } from "react-native";
import globalStyles from '../../styles/Styles'
import { WHITE } from "../../styles/stylesConstant";

 
export const TopSaleFlag: React.FC = () => {
  return ( 
    <ImageBackground source={require('../../assets/img/drinkSaleeIcon.png')} resizeMode="cover" style={globalStyles.drinkFlag}>
    <Text style={[globalStyles.cafeText, {color: WHITE, marginRight: 16 }]}>Хит</Text>
  </ImageBackground>
   );
}
