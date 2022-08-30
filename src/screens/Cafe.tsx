import React from "react";
import { View, ScrollView, ImageBackground, StyleSheet, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Header from '../components/header';
import globalStyles from '../../Styles';
import DrinkCard from "../components/drinkCard";
import {cafeDrinkData} from '../features/data'

interface CafeProps {
  navigation: any
}
 
const Cafe: React.FC<CafeProps> = ({navigation}) => {
  return ( 
    <ScrollView>
      <Header/>
      <ImageBackground source={require('../../assets/img/Cafe1.png')} resizeMode="cover" style={globalStyles.mainCafeImage}>
        <LinearGradient colors={["rgba(255,255,255, 0.03)", "rgba(247,236,218, 1)"]} locations={[0.6, 1]} style={globalStyles.cafeImageGradient}>
          <View>
            <Text style={globalStyles.cafeName}>Coffe Fabrica</Text>
            <Text style={globalStyles.cafeAdress}>ул.Макарова д.5</Text>
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