import React from "react";
import { View, ScrollView, ImageBackground, StyleSheet, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Header from '../components/header';
import globalStyles from '../../styles/Styles';
import DrinkCard from "../components/drinkCard";
import {cafeDrinkData} from '../features/data'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Props, StackParamList } from "../../navigation";

type HomeScreenProps = NativeStackScreenProps<StackParamList, "Cafe">

interface CafeProps {
  route: {
    id: string,
    name: string,
    address: string,
    coordinates: string,
    description: string,
    images: string,
  }
}
 
const Cafe = ({navigation, route}: Props) => {
  return ( 
    <ScrollView>
      <Header/>
      <ImageBackground source={{uri: route.params.images}} resizeMode="cover" style={globalStyles.mainCafeImage}>
        <LinearGradient colors={["rgba(255,255,255, 0.03)", "rgba(0,0,0, 1)"]} locations={[0, 1]} style={globalStyles.cafeImageGradient}>
          <View>
            <Text style={globalStyles.cafeName}>{route.params.name}</Text>
            <Text style={globalStyles.cafeAdress}>{route.params.description}</Text>
            <Text style={globalStyles.cafeAdress}>{route.params.address}</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
      <View style={globalStyles.productListContainer}>
        {cafeDrinkData.map(item=> (
          <DrinkCard key={item.id} drinkCardData={item}/>
        ))}
      </View>

 
    </ScrollView>
   );
}


export default Cafe;