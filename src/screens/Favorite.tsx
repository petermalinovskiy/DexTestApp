import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getAllFavorite, selectFavoriteAll } from "../app/reducers/favoriteReducer";
import { selectSessionID } from "../app/reducers/loginReducer";
import { DrinkItem } from "../components/DrinkItem";

 
export const Favorite = () => {
  const dispatch = useAppDispatch();
  const allFavoriteData = useAppSelector(selectFavoriteAll).filter(i => i.favorite)
  const sessionID = useAppSelector(selectSessionID);

  const getCafeURL  = 'http://ci2.dextechnology.com:8000/api/Product/GetAll'

  const getCafeData = (url: string) => { 
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sessionID)
    })
    .then((r) => r.json())
    .catch(function(error) {
      console.log(error)
    });
  };

  const getData = () => getCafeData(getCafeURL).then((data) => (dispatch(getAllFavorite(data))));
  getData()

  return (
    <FlatList
    data={allFavoriteData.filter(i => i.favorite)}
    renderItem={({item}) => <DrinkItem drinkItemData={item}/>}
    keyExtractor={item => item.id}
    numColumns={2}
    contentContainerStyle={{justifyContent: 'space-around'}}/>
  );
}
