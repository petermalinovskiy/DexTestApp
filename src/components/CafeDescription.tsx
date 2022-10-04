import React, { useState } from "react";
import { ImageBackground, Text, TouchableWithoutFeedback, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { globalStyles } from "../../styles/Styles";
import { LIKE_RED, WHITE } from "../../styles/stylesConstant";
import Icon from 'react-native-vector-icons/FontAwesome'
import { TopLine } from "./TopLine";

interface CafeDescriptionProps {
  children?: React.ReactNode,
  cafeData: {
    id: string;
    name: string;
    address: string;
    coordinates: string;
    description: string;
    images: string;
  } | undefined
}
 
export const CafeDescription: React.FC<CafeDescriptionProps> = ({cafeData}) => {
  const [likeToggle, setLikeToggle] = useState<boolean>(true)
  const likeIcon: string = likeToggle ? "heart" : "heart-o"
  
  return (       
    <ImageBackground source={{uri: cafeData?.images}} resizeMode="cover" style={globalStyles.mainCafeImage}>
      <LinearGradient colors={["rgba(255, 255, 255, 0.0319)", "rgba(247, 236, 218, 1)"]} locations={[0.5, 1]} style={globalStyles.cafeImageGradient}>
        <View style={[globalStyles.containerRow, globalStyles.cafeDescriptionContainer]}>
          <TopLine/>
          <View style={{width: '80%'}}>
            <Text style={globalStyles.drinkCardName}>{cafeData?.name}</Text>
            <Text style={[globalStyles.cafeText, {fontSize: 18}]}>{cafeData?.address}</Text>
          </View>
          <TouchableWithoutFeedback onPress={()=>setLikeToggle(prev=>!prev)}>
            <View style={globalStyles.heartContainer} >
              <Icon name={likeIcon} size={20} color={LIKE_RED} style={[globalStyles.heartButton, (likeToggle ? null : {alignSelf: 'flex-end'})]}/>
            </View>
          </TouchableWithoutFeedback>

        </View>
      </LinearGradient>
    </ImageBackground> 
  );
}
