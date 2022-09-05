import React from "react";
import { View, ScrollView, ImageBackground, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import globalStyles from '../../styles/Styles';
import DrinkItem from "../components/DrinkItem";
import {cafeDrinkData} from '../features/data'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CafeProps, StackParamList } from "../../navigation";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectSessionID } from "../app/reducers/loginReducer";
import { getAllCafeProduct, selectCafeProductAll } from "../app/reducers/cafeProductAllReducer";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

 
const Cafe = ({navigation, route}: CafeProps) => {
  const dispatch = useAppDispatch();
  const allCafeProductData = useAppSelector(selectCafeProductAll)
  const sessionID = useAppSelector(selectSessionID);

  const cafeID = {
    sessionID: sessionID,
    cafeId: route.params.id
  }

  const getCafeURL  = 'http://ci2.dextechnology.com:8000/api/Product/GetProductsCafe'

  const getCafeData = (url: string) => { 
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(cafeID)
    })
    .then((r) => r.json())
    .catch(function(error) {
      console.log(error)
    });
  };

  const getData  = () => getCafeData(getCafeURL).then((data) => (dispatch(getAllCafeProduct(data))));
  getData()
  
  return ( 
    <>
      <ImageBackground source={{uri: route.params.images}} resizeMode="cover" style={globalStyles.mainCafeImage}>
        <LinearGradient colors={["rgba(255,255,255, 0.03)", "rgba(0,0,0, 1)"]} locations={[0, 1]} style={globalStyles.cafeImageGradient}>
          <View>
            <Text style={globalStyles.cafeName}>{route.params.name}</Text>
            <Text style={globalStyles.cafeAdress}>{route.params.description}</Text>
            <Text style={globalStyles.cafeAdress}>{route.params.address}</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
      <FlatList style={globalStyles.productListContainer}
          data={allCafeProductData}
          renderItem={({item}) => <DrinkItem drinkItemData={item}/>}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={{justifyContent: 'space-around'}}/>
    </>
   );
}


export default Cafe;