import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, BackHandler, LogBox} from 'react-native';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';

import myFirstReducer from './redux/reducer';
import rootSaga from './redux/sagas';
import MainNavigator from './navigation/NavigationScreen';
import {Colors} from './constants/colors';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({myFirstReducer});
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

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
      <Provider store={store}>
        <MainNavigator />
      </Provider>
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
