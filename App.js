import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigate from './navigation';


const App = () => {
  return (
    <SafeAreaProvider>
      <Navigate/>
    </SafeAreaProvider>

  );
};

const styles = StyleSheet.create({
  
});

export default App;
