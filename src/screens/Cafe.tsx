import React, { useEffect } from "react";
import { View,  ImageBackground, Text, BackHandler } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import globalStyles from '../../styles/Styles';
import { DrinkItem } from "../components/DrinkItem";
import { CafeProps} from "../../navigation";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectSessionID } from "../app/reducers/loginReducer";
import { getAllCafeProduct, selectCafeProductAll } from "../app/reducers/cafeProductAllReducer";
import { FlatList } from "react-native-gesture-handler";
import { WHITE } from "../../styles/stylesConstant";

 
export const Cafe = ({navigation, route}: CafeProps) => {
  const dispatch = useAppDispatch();
  const allCafeProductData = useAppSelector(selectCafeProductAll)
  const sessionID = useAppSelector(selectSessionID);
  useEffect(() => {
    const backAction = () => {
      if (true) navigation.goBack() 

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);


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
            <Text style={globalStyles.cafeTitle}>{route.params.name}</Text>
            <Text style={[globalStyles.cafeText, {color: WHITE}]}>{route.params.description}</Text>
            <Text style={[globalStyles.cafeText, {color: WHITE}]}>{route.params.address}</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
      <FlatList
          data={allCafeProductData}
          renderItem={({item}) => <DrinkItem drinkItemData={item}/>}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={{justifyContent: 'space-around'}}/>
    </>
   );
}
