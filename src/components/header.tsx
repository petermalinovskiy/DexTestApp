import React from "react";
import { StyleSheet, Text, View } from "react-native";

 
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
  }
});
 
export default Header;