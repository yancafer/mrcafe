import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { colors } from './src/styles/colors';
import Login from './src/pages/Login';
import { useFonts, IMFellEnglishSC_400Regular } from '@expo-google-fonts/im-fell-english-sc'
import AppLoading from 'expo-app-loading';

console.disableYellowBox=true;

export default function App() {

    let [fontsLoaded] = useFonts({
      IMFellEnglishSC_400Regular,
    });

    if (!fontsLoaded) {
      return null;
    }

  return (
    <>
    <StatusBar
    barStyle="light-content"
    />
    <Login/>
    </>
  );
};