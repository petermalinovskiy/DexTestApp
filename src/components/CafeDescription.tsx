import React from "react";
import { ImageBackground, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import globalStyles from "../../styles/Styles";
import { WHITE } from "../../styles/stylesConstant";

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
  return (       
    <ImageBackground source={{uri: cafeData?.images}} resizeMode="cover" style={globalStyles.mainCafeImage}>
      <LinearGradient colors={["rgba(255,255,255, 0.03)", "rgba(0,0,0, 1)"]} locations={[0, 1]} style={globalStyles.cafeImageGradient}>
        <View>
          <Text style={globalStyles.cafeTitle}>{cafeData?.name}</Text>
          <Text style={[globalStyles.cafeText, {color: WHITE}]}>{cafeData?.description}</Text>
          <Text style={[globalStyles.cafeText, {color: WHITE}]}>{cafeData?.address}</Text>
        </View>
      </LinearGradient>
    </ImageBackground> 
  );
}
