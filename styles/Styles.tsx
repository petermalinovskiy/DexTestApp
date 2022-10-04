import React from "react";
import { StyleSheet } from "react-native";
import { DISPLAY_REGULAR, DISPLAY_BOLD, ERROR_RED, LITE_GREY, LOBSTER, WHITE, GREY, LIGHT_GREEN, DISPLAY_LIGHT, BLACK } from "./stylesConstant";

export const globalStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },

  bgWhite: {
    backgroundColor: WHITE
  },

  shadow: {
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  loginButton: {
    height: 52,
    alignSelf: 'center',
    alignItems: 'center',
    width: '80%',
    borderRadius: 26,    
    justifyContent: 'center',
    marginBottom: 20
  },

  loginButtonText: {
    fontFamily: DISPLAY_REGULAR,
    fontSize: 18,
    color: WHITE
  },

  spaceAround: {
    flex: 1,
    justifyContent: 'space-around',
  },

  loginText: {
    fontFamily: LOBSTER,
    fontSize: 64, 
    color: WHITE, 
    textAlign: 'center'
  },

  inputView: {
    borderBottomWidth: 1,
    borderColor: WHITE,
    width: "80%",
    height: 45,
    marginBottom: 20,
    alignSelf: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    color: WHITE,
  },

  loginError: {
    color: WHITE,
    fontFamily: DISPLAY_BOLD,
    fontSize: 18,
    backgroundColor: ERROR_RED,
    borderRadius: 10,
    paddingHorizontal: 10
  },

  errorInputView: {
    borderColor: ERROR_RED,
    color: ERROR_RED
  },

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
    backgroundColor: WHITE,
    borderRadius: 20,
    padding: 65,
    alignItems: "center",
    shadowColor: WHITE,
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 1,
    shadowRadius: 40
  },

  ModalTitle: {
    fontFamily: DISPLAY_REGULAR,
    fontSize: 16,
    color: GREY
  },

  cafeContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    height: 126,
    backgroundColor: WHITE,
  },

  cafeDescription: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 25,
    paddingRight: 10,
    justifyContent: 'center',
    shadowRadius: 4,
    shadowColor: BLACK
  },

  cafeTitle: {
    fontFamily: DISPLAY_BOLD,
    fontSize: 20,
    color: LIGHT_GREEN,
    marginBottom: 10
  },

  cafeSubText: {
    fontFamily: DISPLAY_LIGHT,
    fontSize: 14,
    color: GREY
  },

  cafeText: {
    fontFamily: DISPLAY_REGULAR,
    fontSize: 16,
    color: GREY
  },

  mainCafeImage: {
    width: '100%',
    height: 300,
  },

  cafeImageGradient: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingLeft: 15
  },

  cafeDrinkContainer: {
    justifyContent: 'space-between',
    backgroundColor: WHITE,
    width: '45%',
    height: 220,
    padding: 10,
    margin: 8,
  },

  cafeDrinkTitle: {
    fontFamily: DISPLAY_BOLD,
    fontSize: 16,
    color: GREY,
  },

  cafeDrinkPriice: {
    fontFamily: LOBSTER,
    fontSize: 24,
    color: LIGHT_GREEN,
    marginRight: 5,
    marginBottom: -5
  },

  drinkFlag: {
    position: 'absolute',
    top: 20,
    left: 0,
    width: 72,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2
  },

  containerRow: {
    flexDirection: 'row',
    alignItems: 'center',  
  },

  drinkCardName: {
    fontFamily: LOBSTER,
    fontSize: 24,
    color: BLACK,
    marginRight: 10
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
    fontFamily: DISPLAY_LIGHT,
    fontSize: 10,
    color: GREY,
    textAlign: 'center'
  },

  iconCard: {
    marginRight: 16,
  },

  drinkPrice: {
    fontFamily: DISPLAY_REGULAR,
    fontSize: 28,
    color: GREY,
    marginRight: 15,
  },

  buyButton: {
    height: 41,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: WHITE,
    fontFamily: DISPLAY_REGULAR,
    fontSize: 20,
  },

  mapToggle: {
    position: 'absolute',
    zIndex: 2,
    marginTop: 5,
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-around',
    alignSelf: 'center',
    minHeight: 35,
    padding: 5,
    borderRadius: 25,
    borderColor: LIGHT_GREEN,
    borderWidth: 2
  },

  mapToggleButton: {
    minWidth: '15%',
    height: 35,
    borderRadius: 25,
    alignSelf: 'center',
    paddingTop: 5,
    paddingHorizontal: 20
  },

  mapInfoContainer: {
    position: 'absolute',
    bottom: 0,
    height: 150,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: WHITE,
    padding: 20,
    zIndex: 2
  },

  cafeDescriptionContainer : {
    flex: 1,
    alignItems: 'flex-end',
    paddingBottom: 5
  },

  heartContainer: {
    backgroundColor: WHITE,
    width: 50,
    height: 32,
    borderRadius: 15.5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: GREY,
  },

  heartButton: {
    backgroundColor: WHITE,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: GREY,
    padding: 5,
  },

  topLine: {
    position: 'absolute',
    top: 0,
    zIndex: 3,
    height: 2,
    width: '95%',
    backgroundColor: LITE_GREY,
    alignSelf: 'center'
  },

  noList: {
    minHeight: 600,
    paddingVertical: 100
  },

  imagePickerContainer: {
    width: 130, 
    height: 130, 
    borderWidth: 2, 
    borderColor: WHITE, 
    borderRadius: 65, 
    alignSelf: 'center', 
    padding: 3
  },

  imagePicker: {
    width: 120, 
    height: 120, 
    borderWidth: 1, 
    borderColor: WHITE, 
    borderRadius: 60, 
    backgroundColor: WHITE, 
    justifyContent: 'space-around'
  }

})
