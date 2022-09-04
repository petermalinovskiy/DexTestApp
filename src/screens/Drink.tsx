import React from "react";
import { FlatList, Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import  Header from '../components/Header';
import globalStyles from '../../styles/Styles'
import HitFlag from "../components/HitFlag";
import DrinkIcons from "../components/DrinkIcons";
import {drinkData} from '../features/data'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrinkProps, StackParamList } from "../../navigation";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getProduct, selectProduct } from "../app/reducers/productReducer";
 
const Drink = ({route}: DrinkProps) => {
  const dispatch = useAppDispatch();
  const productData = useAppSelector(selectProduct)

  const myProduct = {
    sessionID: route.params.sessionID,
    productId: route.params.productId,
  }

  const getDrinkURL  = 'http://ci2.dextechnology.com:8000/api/Product/GetProduct'

  const getCafeData = (url: string) => { 
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

  const getData  = () => getCafeData(getDrinkURL).then((data) => (console.log(data), dispatch(getProduct(data))));
  getData()

  return ( 
    <View style={{flex: 1}}>
      <Header/>
      <HitFlag/>
      <View style={globalStyles.drinkContainer}>
        <Image source={drinkData.imagesPath} style={globalStyles.drinkCardImage}/>
        <View style={globalStyles.containerRow}>
          <Text style={globalStyles.drinkCardName}>{productData}</Text>
          <Image source={require('../../assets/img/likeBig.png')}/>
        </View>
        <DrinkIcons/>
        <Text style={globalStyles.drinkCardDescription}>{console.log(productData)}</Text> 
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

