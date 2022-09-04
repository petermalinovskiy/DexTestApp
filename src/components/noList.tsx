import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Header from "./Header";
 
const NoList = () => {
  return ( 
    <View>
      <Header/>
      <View style={styles.noListContainer}>
        <Image source={require('../../assets/img/noListImage.png')} style={styles.noListImage}/>
        <Text style={styles.noListText}>Здесь нет ни одной чашки кофе. {'\n'} Попробуйте вернуться к нам позже.</Text>
      </View>
    </View>

   );
}
 
const styles = StyleSheet.create({
  noListContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingTop: 100,
    paddingBottom: 220
  }, 

  noListImage: {
    alignSelf: 'center'
  },

  noListText: {
    color: '#5E5E5E',
    fontSize: 16,
    fontFamily: 'SF-UI-Display-Regular',
    textAlign: 'center',
    lineHeight: 25
  }
})

export default NoList;