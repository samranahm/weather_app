import React from 'react';
import { SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomePage from './HomePage';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <HomePage />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
