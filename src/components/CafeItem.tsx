import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import { MainProfileScreenNavigationProp } from "../../navigation";
import globalStyles from "../../styles/Styles";

interface CafeIremProps {
  children?: React.ReactNode,
  cafeData: {
    id: string;
    name: string;
    address: string;
    coordinates: string;
    description: string;
    images: string;
  }
}

export const CafeItem: React.FC<CafeIremProps> = ({cafeData}) => {
  const navigation = useNavigation<MainProfileScreenNavigationProp>();

  return (
    <TouchableWithoutFeedback key={cafeData.id} onPress={()=>navigation.navigate('Cafe', cafeData)}>
      <View style={globalStyles.cafeContainer} >
        <Image source={cafeData.images ? {uri: cafeData.images } : require('../../assets/img/listCafe1.png')}  style={{height: '100%', width: '28%',}}/>
        <View style={globalStyles.cafeDescription}>
          <Text style={globalStyles.cafeTitle}>{cafeData.name}</Text>
          <Text style={globalStyles.cafeSubText}>Мы находимся:</Text>
          <Text style={globalStyles.cafeText}>{cafeData.address}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}