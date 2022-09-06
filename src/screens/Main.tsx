import React, { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getAllCafe, selectCafeAll } from '../app/reducers/cafeAllReducer';
import { selectSessionID } from '../app/reducers/loginReducer';
import { CafeItem } from '../components/CafeItem';
import { NoList } from '../components/NoList';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome'
import { BLACK, LIGHT_GREEN } from '../../styles/stylesConstant';
import { TouchableWithoutFeedback, View } from 'react-native';
import globalStyles from '../../styles/Styles';

const Main = () => {
  const dispatch = useAppDispatch();
  const sessionID = useAppSelector(selectSessionID);
  const allCafeData = useAppSelector(selectCafeAll)
  const [mapToggle, setMapToggle] = useState<boolean>(false)


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
    <SafeAreaView style={{flex: 1}}>
      <View style={globalStyles.mapToggle}>
        <TouchableWithoutFeedback  onPress={() => !mapToggle ? setMapToggle(true) : null}>
          <Icon
            name="map-marker" 
            size={25} 
            color={BLACK} 
            style={[globalStyles.mapToggleButton, (mapToggle ? {backgroundColor: LIGHT_GREEN} : null)]}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => mapToggle ? setMapToggle(false) : null}>
          <Icon
            name="list" size={25} 
            color={BLACK} 
            style={[globalStyles.mapToggleButton, (!mapToggle ? {backgroundColor: LIGHT_GREEN} : null)]}
            
          />          
        </TouchableWithoutFeedback>

      </View>
    {!mapToggle ? (
      (allCafeData.length > 0)  ? (
      <FlatList
        data={allCafeData}
        
        renderItem={({item}) => <CafeItem cafeData={item}/>}
        keyExtractor={item => item.id}/>
    ) : <NoList/>
    ) : null }

    </SafeAreaView>
  );
}

export default Main;

