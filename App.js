import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TailwindProvider from 'babel-plugin-tailwind-rn/dist/useTailwind'

function App() {
  return (
    <View className="bg-blue-400 lg:bg-red-400">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default TailwindProvider(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
