import React from "react";
import { ImageBackground, Text } from "react-native";
import globalStyles from '../../styles/Styles'

 
const HitFlag: React.FC = () => {
  return ( 
    <ImageBackground source={require('../../assets/img/drinkSaleeIcon.png')} resizeMode="cover" style={globalStyles.drinkFlag}>
    <Text style={globalStyles.drinkFlagText}>Хит</Text>
  </ImageBackground>
   );
}
 
export default HitFlag;