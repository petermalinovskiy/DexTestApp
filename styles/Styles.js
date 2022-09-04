import React from "react";
import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  headerText: {
    color: '#474747',
    fontSize: 22,
    fontFamily: 'Lobster-Regular',
  },

  bgImage: {
    flex: 1,
    justifyContent: 'space-around',
  },

  loginText: {
    fontFamily: 'Lobster-Regular',
    fontSize: 64, 
    color: '#FFFFFF', 
    textAlign: 'center'
  },

  gradient: {
    flex: 1,
    justifyContent: 'space-around',
  },

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

  mainCafeImage: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },

  cafeImageGradient: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingLeft: 15
  },

  cafeName: {
    fontFamily: 'Lobster-Regular',
    fontSize: 28,
    color: '#474747'
  },

  cafeAdress: {
    fontFamily: 'SF-UI-Display-Regular',
    fontSize: 18,
    color: '#717171'
  },

  cafeDrinkContainer: {
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    width: '45%',
    height: 220,
    padding: 10,
    margin: 10
  },

  cafeDrinkTitle: {
    fontFamily: 'SF-UI-Display-Bold',
    fontSize: 16,
    color: '#717171',
  },
  
  cafeDrinkSubtitle: {
    fontFamily: 'SF-UI-Display-Regular',
    fontSize: 12,
    color: '#717171',
  },

  cafeDrinkFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  cafeDrinkPriiceContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  cafeDrinkPriice: {
    fontFamily: 'Lobster-Regular',
    fontSize: 24,
    color: '#C8D9AF',
    marginRight: 5,
    marginBottom: -5
  },

  productListContainer: {
    flexWrap: 'wrap',
    flexDirection: 'column',
  },

  drinkFlag: {
    position: 'absolute',
    top: 75,
    left: 0,
    width: 72,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },

  drinkFlagText: {
    fontFamily: 'SF-UI-Display-Regular',
    color: '#ffffff',
    fontSize: 16,
    marginRight: 16
  },

  drinkContainer:{
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },

  drinkCardImage: {
    alignSelf: 'center',
  },

  containerRow: {
    flexDirection: 'row',
    alignItems: 'center',  
  },

  drinkCardName: {
    fontFamily: 'Lobster-Regular',
    fontSize: 24,
    color: '#373737',
    marginRight: 10
  },

  drinkCardDescription: {
    fontFamily: 'SF-UI-Display-Regular',
    fontSize: 16,
    color: '#474747'
  },

  iconContainer: {
    height: 35,
    width: 35,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },

  iconText: {
    fontFamily: 'SF-UI-Display-Light',
    fontSize: 10,
    color: '#474747',
    textAlign: 'center'
  },

  iconCard: {
    marginRight: 16,
  },

  drinkPrice: {
    fontFamily: 'SF-UI-Display-Regular',
    fontSize: 28,
    color: '#5E5E5E',
    marginRight: 15,
  },

  buyButton: {
    height: 41,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: '#ffffff',
    fontFamily: 'SF-UI-Display-Regular',
    fontSize: 20,
  },

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

})

export default globalStyles