
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";


import globalStyles from '../../Styles';


export type ProfileScreenNavigationProp = Props['navigation'];

interface DrinkCardProps {
  children?: React.ReactNode,
  key: number | string,
  drinkCardData: {
    id: number,
    cofeId: number,
    name: string,
    price: number,
    favorite: boolean,
    imagesPath: any,
  }
}
 
const DrinkCard: React.FC<DrinkCardProps> = ({drinkCardData}) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Drink', drinkCardData.id)}>
      <View  style={globalStyles.cafeDrinkContainer}>
        <Text style={globalStyles.cafeDrinkTitle}>{drinkCardData.name}</Text>
        <Text style={globalStyles.cafeDrinkSubtitle}>кофейный напиток</Text>
        <Image source={drinkCardData.imagesPath}/>
        <View style={globalStyles.cafeDrinkFooter}>
          <View style={globalStyles.cafeDrinkPriiceContainer}>
            <Text style={globalStyles.cafeDrinkPriice}>{drinkCardData.price}</Text>
            <Image source={require('../../assets/img/ruble.png')}/>
          </View>      
          <Image source={drinkCardData.favorite ? require('../../assets/img/likeTrue.png') : require('../../assets/img/likeFalse.png')}/>
        </View>
      </View>
     </TouchableWithoutFeedback>

  );
}
 
export default DrinkCard;