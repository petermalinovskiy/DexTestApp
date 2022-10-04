import React, { useEffect } from "react";
import {  BackHandler, FlatList } from "react-native";
import { DrinkItem } from "../components/DrinkItem";
import { CafeProps} from "../../navigation";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectSessionID } from "../app/reducers/authorizationReducer";
import { getProductList, selectProductList } from "../app/reducers/productListReducer";
import { CafeDescription } from "../components/CafeDescription";
import { getCafeURL } from "../features/requestURL";
import { serverRequest } from "../features/serverRequest";
import { selectProductLike } from "../app/reducers/likeReducer";
import Icon from 'react-native-vector-icons/FontAwesome'
import { globalStyles } from "../../styles/Styles";

export const Cafe = ({navigation, route}: CafeProps) => {
  const dispatch = useAppDispatch();
  const allCafeProductData = useAppSelector(selectProductList)
  const sessionID = useAppSelector(selectSessionID);
  const likeProduct = useAppSelector(selectProductLike);

  useEffect(() => {
    const backAction = () => {
      navigation.goBack() 
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
    cafeId: route.params?.id
  }
 
  useEffect(() => {
    const fetchData = async () => await serverRequest(getCafeURL, cafeID).then((data) => (dispatch(getProductList(data))))
    fetchData()
  },[likeProduct])

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon name={"heart-o"} size={20}  onPress={()=>navigation.navigate('Favorite')} style={{marginRight: 10}}/>
      ),
    });
  }, [navigation]);
 

  return ( 
    <FlatList
        data={allCafeProductData}
        renderItem={({item}) => <DrinkItem drinkItemData={item}/>}
        keyExtractor={item => item.id}
        numColumns={2}
        style={globalStyles.bgWhite}
        contentContainerStyle={{justifyContent: 'space-around'}}
        ListHeaderComponent={<CafeDescription cafeData={route?.params}/>}
    />
   );
}
