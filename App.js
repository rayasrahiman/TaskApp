import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, BackHandler, LogBox} from 'react-native';

import MainNavigator from './navigation/NavigationScreen';
import {Colors} from './constants/colors';

const App = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['new NativeEventEmitter']);
    LogBox.ignoreAllLogs();
    // const backHandler = BackHandler.addEventListener(
    //   'hardwareBackPress',
    //   () => true,
    // );
    // return () => backHandler.remove();
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
    backgroundColor: Colors.white,
  },
});

export default App;
