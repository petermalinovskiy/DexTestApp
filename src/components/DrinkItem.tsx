import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import { CafeProfileScreenNavigationProp } from "../../navigation";
import globalStyles from '../../styles/Styles';
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectSessionID } from "../app/reducers/loginReducer";
import LikeButton from "./LikeButton";

interface DrinkCardProps {
  children?: React.ReactNode,
  drinkItemData: {
    id: string,
    cofeId: string,
    name: string,
    price: number,
    favorite: boolean,
    imagesPath: string
  }
}
 
const DrinkItem: React.FC<DrinkCardProps> = ({drinkItemData}) => {
  const navigation = useNavigation<CafeProfileScreenNavigationProp>();
  const sessionID = useAppSelector(selectSessionID);

  const myProduct = {
    sessionID: sessionID,
    productId: drinkItemData.id
  }
  
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Drink', myProduct)}>
      <View  style={globalStyles.cafeDrinkContainer}>
        <Text style={globalStyles.cafeDrinkTitle}>{drinkItemData.name}</Text>
        <Text style={globalStyles.cafeDrinkSubtitle}>кофейный напиток</Text>
        <Image source={{uri: drinkItemData.imagesPath}} style={{height: 100, width: '100%',}}/>
        <View style={globalStyles.cafeDrinkFooter}>
          <View style={globalStyles.cafeDrinkPriiceContainer}>
            <Text style={globalStyles.cafeDrinkPriice}>{drinkItemData.price}</Text>
            <Image source={require('../../assets/img/ruble.png')}/>
          </View>      
          <LikeButton id={drinkItemData.id} favorite={drinkItemData.favorite} size={22}/>
        </View>
      </View>
     </TouchableWithoutFeedback>

  );
}
 
export default DrinkItem;