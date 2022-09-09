import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react"; 
import { Modal, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import YaMap, { Circle, Polyline, Geocoder, Marker } from 'react-native-yamap';
import { MainProfileScreenNavigationProp } from "../../navigation";
import globalStyles from "../../styles/Styles";
import { WHITE } from "../../styles/stylesConstant";

YaMap.init('01f330f0-0188-44c8-a36d-f4e0b38a746b');


interface MapProps {
  children?: React.ReactNode,
  allCafeData: cafeData[]
}

type cafeData = {
  id: string;
  name: string;
  address: string;
  coordinates: string;
  description: string;
  images: string;
}
 
export const Map: React.FC<MapProps> = ({allCafeData}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [modalID, setModalID] = useState<string>('')
  const navigation = useNavigation<MainProfileScreenNavigationProp>();
 
  const toYaCoordinates = ( arg: string ) => {
    const coordinatesArr = arg.split(', ')
    return  {
      lat: +coordinatesArr[0],
      lon: +coordinatesArr[1]
    }
  }

  const onMarkerPress = (id: string) => {
    setModalID(id);
    !modalVisible ? setModalVisible(true) : null;
  };

  
  const cafeData = allCafeData.find(i => i.id == modalID)

  return (
    <>
      <YaMap
        style={{ flex: 1, zIndex: -1, marginTop: 5 }}
        initialRegion={{
          lat: 46.834278, 
          lon: 29.624740,
          zoom: 15,
          azimuth: 0
        }}
        maxFps={60}
        mapType={'vector'}
      >
        {allCafeData.map( i => (
          <Marker 
            key={i.id}
            point={toYaCoordinates(i.coordinates)}
            scale={3}
            onPress={() => onMarkerPress(i.id)}
          />))
        }

      </YaMap>
      <TouchableWithoutFeedback onPress={()=>navigation.navigate('Cafe', cafeData)}>
        <View style={[globalStyles.mapInfoContainer, {display: (!modalVisible? 'none' : 'flex')}]}>
          <Text style={globalStyles.cafeTitle} >{cafeData?.name}</Text>
          <Text style={globalStyles.cafeSubText}>Мы находимся:</Text>
          <Text style={globalStyles.cafeText}>{cafeData?.address}</Text>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({

})
