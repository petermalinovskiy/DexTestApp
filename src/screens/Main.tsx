import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/header';
import {cafeData} from '../features/data'


interface MainListProps {
  navigation: any
}

const MainList: React.FC <MainListProps> = ({navigation}) => {
  
  return ( 
    <ScrollView>
      <Header/>
      {cafeData.map((item) => (
        <TouchableWithoutFeedback key={item.id} onPress={()=>navigation.navigate('Cafe', item.id)}>
          <View style={styles.cafeContainer} >
            <Image source={item.image}/>
            <View style={styles.cafeDescription}>
              <Text style={styles.cafeName}>{item.name}</Text>
              <Text style={styles.cafeText}>Мы находимся:</Text>
              <Text style={styles.cafeAdress}>{item.address}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
    ))}
  </ScrollView>
   );
}
 
const styles = StyleSheet.create({
  cafeContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    height: 126,
    backgroundColor: '#ffffff'
  },

  cafeDescription: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 25,
    justifyContent: 'center',
    shadowRadius: 4,
    shadowColor: '#000000'

  },

  cafeName: {
    fontFamily: 'SF-UI-Display-Bold',
    fontSize: 20,
    color: '#C8D9AF',
    marginBottom: 10
  },

  cafeText: {
    fontFamily: 'SF-UI-Display-Light',
    fontSize: 14,
    color: '#717171'
  },

  cafeAdress: {
    fontFamily: 'SF-UI-Display-Regular',
    fontSize: 16,
    color: '#717171'
  },
});

export default MainList;







