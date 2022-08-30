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
import CafeList from '../components/cafeList';
import Header from '../components/header';
import NoList from '../components/noList';
import {cafeData} from '../features/data'


interface MainListProps {
  navigation: any
}

const MainList: React.FC <MainListProps> = ({navigation}) => {
  return ( 
    (cafeData.length > 0)  ? (
      <ScrollView >
        <Header/>
        {cafeData.map(item=> <CafeList key={item.id} cafeData={item}/>)}
      </ScrollView>
    ) : <NoList/>
   );
}
 
const styles = StyleSheet.create({
  
});

export default MainList;







