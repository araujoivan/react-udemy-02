import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';

import MealsNavigator from './navigation/MealsNavigator'

// improve the performance for rendering screens into mobile devices
enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf'),
  });
}

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  // while fonts are not loaded...
  if(!fontLoaded) {
    return ( 
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
    /> );
  }

  return (
    <MealsNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
