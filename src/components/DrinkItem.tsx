import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import { CafeProfileScreenNavigationProp } from "../../navigation";
import Icon from 'react-native-vector-icons/FontAwesome'

import globalStyles from '../../styles/Styles';
import { LIKE_RED } from "../../styles/stylesConstant";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectSessionID } from "../app/reducers/loginReducer";

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
  const dispatch = useAppDispatch();
  const navigation = useNavigation<CafeProfileScreenNavigationProp>();
  const sessionID = useAppSelector(selectSessionID);

  const favoriteTrue = <Icon name="heart" size={22} color={LIKE_RED} onPress={() => unSetFavorite()}/>
  const favoriteFalse = <Icon name="heart-o" size={22} color={LIKE_RED} onPress={() => setFavorite()} />

  const myProduct = {
    sessionID: sessionID,
    productId: drinkItemData.id
  }

  const setFavoriteURL  = 'http://ci2.dextechnology.com:8000/api/Favorite/Set'
  const unSetFavoriteURL  = 'http://ci2.dextechnology.com:8000/api/Favorite/Unset'

  const favoriteToggleRequest = (url: string) => { 
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(myProduct)
    })
    .then((r) => r.json())
    .catch(function(error) {
      console.log(error)
    });
  };

  const setFavorite  = () => favoriteToggleRequest(setFavoriteURL)
  const unSetFavorite  = () => favoriteToggleRequest(unSetFavoriteURL)
  
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
          {drinkItemData.favorite ? favoriteTrue : favoriteFalse}
        </View>
      </View>
     </TouchableWithoutFeedback>

  );
}
 
export default DrinkItem;