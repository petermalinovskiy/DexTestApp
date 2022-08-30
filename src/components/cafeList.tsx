import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import globalStyles from "../../Styles";
import { ProfileScreenNavigationProp } from "./drinkCard";

interface CafeListProps {

    navigation: any,
    cafeData: any

}



const CafeList: React.FC<CafeListProps> = ({cafeData}) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  return ( 

      <TouchableWithoutFeedback key={cafeData} onPress={()=>navigation.navigate('Cafe', cafeData.id)}>
        <View style={globalStyles.cafeContainer} >
          <Image source={cafeData.image}/>
          <View style={globalStyles.cafeDescription}>
            <Text style={globalStyles.cafeName}>{cafeData.name}</Text>
            <Text style={globalStyles.cafeText}>Мы находимся:</Text>
            <Text style={globalStyles.cafeAdress}>{cafeData.address}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
   );
}
 
export default CafeList;