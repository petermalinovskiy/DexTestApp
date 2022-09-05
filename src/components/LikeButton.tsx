import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome'
import { LIKE_RED } from "../../styles/stylesConstant";
import { useAppSelector } from "../app/hooks";
import { selectSessionID } from "../app/reducers/loginReducer";

interface LikeButtonProps {
  favorite: boolean|undefined,
  id: string|undefined,
  size: number|undefined
}
 
const LikeButton: React.FC<LikeButtonProps> = ({favorite, id, size}) => {
  const favoriteTrue = <Icon name="heart" size={size} color={LIKE_RED} onPress={() => unSetFavorite()}/>
  const favoriteFalse = <Icon name="heart-o" size={size} color={LIKE_RED} onPress={() => setFavorite()} />

  const sessionID = useAppSelector(selectSessionID);



  const myProduct = {
    sessionID: sessionID,
    productId: id,
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
    <> 
      {favorite ? favoriteTrue : favoriteFalse}
    </>
   
   );
}
 
export default LikeButton;