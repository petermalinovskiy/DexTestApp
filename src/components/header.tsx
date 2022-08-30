import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import globalStyles from "../../Styles";



 
const Header: React.FC = () => {

  return ( 
    <View style={styles.header}>
      <Text style={styles.headerText}>CoffeTime</Text>
    </View>
   );
}



const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    padding: 20,    
  },

  headerText: {
    color: '#474747',
    fontSize: 22,
    fontFamily: 'Lobster-Regular',
  },

  backButton: {
    
  }
});
 
export default Header;