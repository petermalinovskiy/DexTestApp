import React from "react";
import { FlatList, Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import  Header from '../components/header';
import globalStyles from '../../Styles'
import HitFlag from "../components/hitFlag";
import DrinkIcons from "../components/drinkIcons";
import {drinkData} from '../features/data'

interface IDrink {
  id: string,
  productName: string,
  price: number,
  cofeId: string,
  cofeName: string,
  favarite: boolean,
  attribute: [
    {
      id: string,
      description: string,
      iconType: string
    }
  ],
  imagesPath: any
}
 
const Drink: React.FC<IDrink> = () => {
  return ( 
    <View style={{flex: 1}}>
      <Header/>
      <HitFlag/>
      <View style={globalStyles.drinkContainer}>
        <Image source={drinkData.imagesPath} style={globalStyles.drinkCardImage}/>
        <View style={globalStyles.containerRow}>
          <Text style={globalStyles.drinkCardName}>{drinkData.productName}</Text>
          <Image source={require('../../assets/img/likeBig.png')}/>
        </View>
        <DrinkIcons/>
        <Text style={globalStyles.drinkCardDescription}>{drinkData.cofeName}</Text> 
        <View style={[globalStyles.containerRow, {justifyContent: 'space-between'}]}>
          <View style={globalStyles.containerRow}>
            <Text style={globalStyles.drinkPrice}>{drinkData.price}</Text>
            <Image source={require('../../assets/img/rubleBig.png')}/>
          </View>
          <Pressable 
            style={({ pressed }) => [{ backgroundColor: pressed ? '#B3C29C' : '#C8D9AF'}, globalStyles.buyButton]}>
            <Text style={globalStyles.buttonText}>заказать</Text>
          </Pressable>
        </View>
      </View>
    </View>    
   );
}

export default Drink;

