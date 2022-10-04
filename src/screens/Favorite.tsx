import React, { useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getAllFavorite, selectFavoriteAll } from "../app/reducers/favoriteReducer";
import { selectSessionID } from "../app/reducers/authorizationReducer";
import { DrinkItem } from "../components/DrinkItem";
import { NoList } from "../components/NoList";
import { getAllProductURL } from "../features/requestURL";
import { serverRequest } from "../features/serverRequest";
import { selectProductLike } from "../app/reducers/likeReducer";
import { TopLine } from "../components/TopLine";
import { globalStyles } from "../../styles/Styles";
 
export const Favorite = () => {
  const dispatch = useAppDispatch();
  const allFavoriteData = useAppSelector(selectFavoriteAll).filter(i => i.favorite)
  const sessionID = useAppSelector(selectSessionID);
  const likeProduct = useAppSelector(selectProductLike);

  useEffect(() => {
    const fetchData = async () => await serverRequest(getAllProductURL, sessionID).then((data) => (dispatch(getAllFavorite(data))))
    fetchData()
  }, [likeProduct]);

  return (
    <FlatList
    data={allFavoriteData.filter(i => i.favorite)}
    renderItem={({item}) => <DrinkItem drinkItemData={item}/>}
    keyExtractor={item => item.id}
    numColumns={2}
    style={globalStyles.bgWhite}
    contentContainerStyle={{justifyContent: 'space-around'}}
    ListHeaderComponent={<TopLine/>}
    ListEmptyComponent={<NoList/>}/>
  );
}
