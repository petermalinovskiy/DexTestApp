import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import globalStyles from "../../styles/Styles";
import { ProfileScreenNavigationProp } from "./drinkCard";

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

const CafeItem: React.FC<CafeIremProps> = ({cafeData}) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  return (
    <TouchableWithoutFeedback key={cafeData.id} onPress={()=>navigation.navigate('Cafe', cafeData)}>
      <View style={globalStyles.cafeContainer} >
        <Image source={{ uri: cafeData.images}} style={{height: '100%', width: '28%',}}/>
        <View style={globalStyles.cafeDescription}>
          <Text style={globalStyles.cafeName}>{cafeData.name}</Text>
          <Text style={globalStyles.cafeText}>Мы находимся:</Text>
          <Text style={globalStyles.cafeAdress}>{cafeData.address}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
 
export default CafeItem;