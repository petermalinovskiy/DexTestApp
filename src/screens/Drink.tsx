import React, { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { globalStyles } from '../../styles/Styles'
import { TopSaleFlag } from "../components/TopSaleFlag";
import { DrinkIcons } from "../components/DrinkIcons";
import { DrinkProps } from "../../navigation";
import { LikeButton } from "../components/LikeButton";
import { serverRequest } from "../features/serverRequest";
import { getDrinkURL } from "../features/requestURL";
import { useAppSelector } from "../app/hooks";
import { selectProductLike } from "../app/reducers/likeReducer";
import Icon from 'react-native-vector-icons/FontAwesome'
import { TopLine } from "../components/TopLine";

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
  const likeProduct = useAppSelector(selectProductLike);
  const [productData, setProductData] = useState<ProductData|null>(null) 

  const myProduct = {
    sessionID: route.params.sessionID,
    productId: route.params.productId,
  }

  useEffect(() => {
    const fetchData = async () => await serverRequest(getDrinkURL, myProduct).then((data) => (setProductData(data)))
    fetchData()
  }, [likeProduct])

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon name={"heart-o"} size={20}  onPress={()=>navigation.navigate('Favorite')} style={{marginRight: 10}}/>
      ),
    });
  }, [navigation]);

  return ( 
    <View style={[globalStyles.flex, globalStyles.bgWhite]}>
      <TopLine/>
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
            style={({ pressed }) => [{ backgroundColor: pressed ? '#B3C29C' : '#C8D9AF'}, globalStyles.buyButton]}>
            <Text style={globalStyles.buttonText}>заказать</Text>
          </Pressable>
        </View>
      </View>
    </View>    
   );
}

