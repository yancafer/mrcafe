import React from 'react';
import { View, Text, StatusBar, SafeAreaView } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View>
        <Text>Olá mundo!</Text>
      </View>
    </SafeAreaView>
  );
}