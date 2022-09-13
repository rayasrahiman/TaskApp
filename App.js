import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, BackHandler} from 'react-native';

import MainNavigator from './navigation/NavigationScreen';

const App = () => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );
    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <MainNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
