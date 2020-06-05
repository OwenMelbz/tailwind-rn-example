import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'babel-plugin-tailwind-rn/dist/useTailwind'

export default function App() {
  return (
    <View className="bg-blue-600 p-10 h-full w-full">
      <Text className="text-white">Open up App.js to start working on your app!</Text>
    </View>
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
