import React, { useState } from "react";
import { FlatList, Image, ImageBackground, Modal, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import  Header from '../components/Header';
import globalStyles from '../../styles/Styles'
import HitFlag from "../components/HitFlag";
import DrinkIcons from "../components/DrinkIcons";
import { DrinkProps, StackParamList } from "../../navigation";
import LikeButton from "../components/LikeButton";
import { TouchableOpacity } from "react-native-gesture-handler";

type ProductData = {
  id: string,
  productName: string,
  price: number,
  cofeId: string,
  cofeName: string,
  favarite: boolean,
  attribute: [
    {
      id: string,
      description: string,
      iconType: string
    }
  ],
  imagesPath: string
}
 
const Drink = ({route}: DrinkProps) => {
  const [productData, setProductData] = useState<ProductData|null>(null) 
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const myProduct = {
    sessionID: route.params.sessionID,
    productId: route.params.productId,
  }

  const getDrinkURL  = 'http://ci2.dextechnology.com:8000/api/Product/GetProduct'

  const getCafeData = (url: string) => { 
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(myProduct)
    })
    .then((r) => r.json())
    .catch(function(error) {
      console.log(error)
    }); 
  };

  const getData  = () => getCafeData(getDrinkURL).then((data) => (setProductData(data)));
  getData()

  return ( 
    <View style={{flex: 1}}>
      <Header/>
      <HitFlag/>
      <Modal transparent={true} visible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.modalBlock}>
            <Text style={styles.Modalitle}>Спасибо за покупку</Text>
            <TouchableWithoutFeedback style={styles.loginBtn} onPress={() => setModalVisible(false)}>
              <Text style={styles.loginText}>Закрыть</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </Modal>
      <View style={globalStyles.drinkContainer}>
        <Image source={{uri: productData?.imagesPath}} style={{width: '100%', height: '40%'}}/>
        <View style={globalStyles.containerRow}>
          <Text style={globalStyles.drinkCardName}>{productData?.productName}</Text>
          <LikeButton id={productData?.id} favorite={productData?.favarite} size={22}/>
        </View>
        <DrinkIcons/>
        <Text style={globalStyles.drinkCardDescription}>{productData?.cofeName}</Text> 
        <View style={[globalStyles.containerRow, {justifyContent: 'space-between'}]}>
          <View style={globalStyles.containerRow}>
            <Text style={globalStyles.drinkPrice}>{productData?.price}</Text>
            <Image source={require('../../assets/img/rubleBig.png')}/>
          </View>
          <Pressable 
            style={({ pressed }) => [{ backgroundColor: pressed ? '#B3C29C' : '#C8D9AF'}, globalStyles.buyButton]} onPress={() =>setModalVisible(true)}>
            <Text style={globalStyles.buttonText}>заказать</Text>
          </Pressable>
        </View>
      </View>
    </View>    
   );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
    paddingVertical: 200,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    
  },

  modalBlock: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 65,
    alignItems: "center",
    shadowColor: "#fff",
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 1,
    shadowRadius: 40
  },

  modalButton: {
    height: 60,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#226ba7',
    borderRadius: 50,    
    justifyContent: 'center',
    backgroundColor: '#56a4f2',
    paddingHorizontal: 15
  },

  Modalitle: {
    fontFamily: 'SF-UI-Display-Regular',
    fontSize: 16,
    color: '#717171'
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: '#C8D9AF'
  },

  loginText: {
    fontFamily: 'SF-UI-Display-Regular',
    fontSize: 18,
    color: '#FFFFFF'
  },
})

export default Drink;

