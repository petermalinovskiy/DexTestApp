import React, { useEffect } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigate from './navigation';
import SplashScreen from 'react-native-splash-screen'


const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  return (
    <SafeAreaProvider>
      <Navigate/>
    </SafeAreaProvider>

  );
};

const styles = StyleSheet.create({
  
});

export default App;
