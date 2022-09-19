import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getAllCafe, selectCafeAll } from '../app/reducers/cafeAllReducer';
import { selectSessionID } from '../app/reducers/authorizationReducer';
import { CafeItem } from '../components/CafeItem';
import { NoList } from '../components/NoList';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome'
import { BLACK, LIGHT_GREEN } from '../../styles/stylesConstant';
import { FlatList, TouchableWithoutFeedback, View } from 'react-native';
import globalStyles from '../../styles/Styles';
import { Map } from '../components/Map';
import { serverRequest } from '../features/serverRequest';
import { getAllCafeURL } from '../features/requestURL';

const Main = () => {
  const dispatch = useAppDispatch();
  const sessionID = useAppSelector(selectSessionID);
  const allCafeData = useAppSelector(state => state.cafeAll.CafeAllData)
  const [mapToggle, setMapToggle] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => await serverRequest(getAllCafeURL, sessionID).then((data) => (dispatch(getAllCafe(data))))
    fetchData()
  }, [sessionID])


  return ( 
    <SafeAreaView style={globalStyles.flex}>
      <View style={globalStyles.mapToggle}>
        <TouchableWithoutFeedback  onPress={() =>setMapToggle(prev => prev||!prev)}>
          <Icon
            name="map-marker" 
            size={25} 
            color={BLACK} 
            style={[globalStyles.mapToggleButton, (mapToggle ? {backgroundColor: LIGHT_GREEN} : null)]}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() =>setMapToggle(prev => prev&&!prev)}>
          <Icon
            name="list" size={25} 
            color={BLACK} 
            style={[globalStyles.mapToggleButton, (!mapToggle ? {backgroundColor: LIGHT_GREEN} : null)]}
          />          
        </TouchableWithoutFeedback>
      </View>
    {!mapToggle ? (
      <FlatList
        data={allCafeData}
        renderItem={({item}) => <CafeItem cafeData={item}/>}
        keyExtractor={item => item.id}
        ListEmptyComponent={<NoList/>}
        style={{marginTop: 55}}/>
    ) : <Map allCafeData={allCafeData}/> }

    </SafeAreaView>
  );
}

export default Main;

