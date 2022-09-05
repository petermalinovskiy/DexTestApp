import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getAllCafe, selectCafeAll } from '../app/reducers/cafeAllReducer';
import { selectSessionID } from '../app/reducers/loginReducer';
import { CafeItem } from '../components/CafeItem';
import NoList from '../components/NoList';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainProps, StackParamList } from "../../navigation";
import { SafeAreaView } from 'react-native-safe-area-context';

type HomeScreenProps = NativeStackScreenProps<StackParamList, "Main">


const Main = ({navigation}: MainProps) => {
  const dispatch = useAppDispatch();
  const sessionID = useAppSelector(selectSessionID);
  const allCafeData = useAppSelector(selectCafeAll)

  const getAllCafeURL  = 'http://ci2.dextechnology.com:8000/api/Cafe/GetAll'

  const getAllCafeData = (url: string) => { 
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sessionID)
    })
    .then((r) => r.json())
    .catch(function(error) {
      console.log(error)
    });
  };

  const getData  = () => getAllCafeData(getAllCafeURL).then((data) => (dispatch(getAllCafe(data))));
  getData()

  return ( 
    <SafeAreaView>
    {(allCafeData.length > 0)  ? (
      <FlatList
        data={allCafeData}
        renderItem={({item}) => <CafeItem cafeData={item}/>}
        keyExtractor={item => item.id}/>
    ) : <NoList/>
   }
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  
});

export default Main;
