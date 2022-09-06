import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import globalStyles from '../../styles/Styles'
import { TopSaleFlag } from "../components/TopSaleFlag";
import DrinkIcons from "../components/DrinkIcons";
import { DrinkProps } from "../../navigation";
import { LikeButton } from "../components/LikeButton";

type ProductData = {
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
  imagesPath: string
}
 
export const Drink = ({navigation, route}: DrinkProps) => {
  const [productData, setProductData] = useState<ProductData|null>(null) 

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

  const getData  = () => getCafeData(getDrinkURL).then((data) => (setProductData(data)));
  getData()

  return ( 
    <View style={{flex: 1}}>
      <TopSaleFlag/>
      <View style={[globalStyles.spaceAround, {paddingHorizontal: 20,}]}>
        <Image source={{uri: productData?.imagesPath}} style={{width: '100%', height: '40%'}}/>
        <View style={globalStyles.containerRow}>
          <Text style={globalStyles.drinkCardName}>{productData?.productName}</Text>
          <LikeButton id={productData?.id} favorite={productData?.favarite} size={22}/>
        </View>
        <DrinkIcons/>
        <Text style={globalStyles.cafeText}>{productData?.cofeName}</Text> 
        <View style={[globalStyles.containerRow, {justifyContent: 'space-between'}]}>
          <View style={globalStyles.containerRow}>
            <Text style={globalStyles.drinkPrice}>{productData?.price}</Text>
            <Image source={require('../../assets/img/rubleBig.png')}/>
          </View>
          <Pressable 
            style={({ pressed }) => [{ backgroundColor: pressed ? '#B3C29C' : '#C8D9AF'}, globalStyles.buyButton]} onPress={() => navigation.navigate('Favorite')}>
            <Text style={globalStyles.buttonText}>заказать</Text>
          </Pressable>
        </View>
      </View>
    </View>    
   );
}

