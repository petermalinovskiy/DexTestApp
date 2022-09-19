import React, { useCallback } from "react";
import Icon from 'react-native-vector-icons/FontAwesome'
import { LIKE_RED } from "../../styles/stylesConstant";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectSessionID } from "../app/reducers/authorizationReducer";
import { like } from "../app/reducers/likeReducer";
import { setFavoriteURL, unSetFavoriteURL } from "../features/requestURL";
import { serverRequest } from "../features/serverRequest";

interface LikeButtonProps {
  favorite: boolean|undefined,
  id: string|undefined,
  size: number|undefined
}
 
export const LikeButton: React.FC<LikeButtonProps> = ({favorite, id, size}) => {
  const dispatch = useAppDispatch();
  const sessionID = useAppSelector(selectSessionID);

  const myProduct = {
    sessionID: sessionID,
    productId: id,
  }

  const favoriteURL = (favorite ? unSetFavoriteURL : setFavoriteURL);
  const favoriteIconName = (favorite ? "heart" : "heart-o");
  const favoriteID = (favorite ? id : undefined);

  const favoriteReducerData = [{
    productID: favoriteID,
    favorite: favorite
  }]

  const favoriteToggle  = () => {
    serverRequest(favoriteURL, myProduct).then(() => dispatch(like(favoriteReducerData)))
  }

  const favoriteIconRender = useCallback(()=>(<Icon name={favoriteIconName} size={size} color={LIKE_RED} onPress={() => favoriteToggle()}/>), [favoriteReducerData] ) 

  return ( 
    <> 
      {favoriteIconRender()}
    </>
   
   );
}
