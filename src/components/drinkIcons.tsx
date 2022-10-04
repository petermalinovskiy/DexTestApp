import React from "react";
import { Image, Text, View } from "react-native";
import { globalStyles } from '../../styles/Styles'
import { iconData } from '../features/data'

export const DrinkIcons: React.FC = () => {
  return ( 
    <View style={globalStyles.containerRow}>
      {iconData.map(item => (
        <View key={item.id} style={globalStyles.iconCard}>
          <View style={[globalStyles.iconContainer, {backgroundColor: item.BGColor}]}>
            <Image source={item.image}/>
          </View>
          <Text style={globalStyles.iconText}>{item.text}</Text>
        </View>
      ))}
    </View>
   );
}
