import {call, put, takeEvery, all, fork} from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {GET_USER_FETCH, GET_USER_SUCCESS} from './actionsConstants';

const usersFetch = async () => {
  const array = await AsyncStorage.getItem('users');
  const arr = array ? JSON.parse(array) : [];
  return arr;
};

function* workGetUsersFetch() {
  console.log('FUNCTION HERE');
  const users = yield usersFetch();
  console.log(JSON.stringify(users), 'USERS HERE');
  yield put({type: GET_USER_SUCCESS, users});
}

function* mySaga() {
  yield takeEvery(GET_USER_FETCH, workGetUsersFetch);
}

function* rootSaga() {
  yield all([fork(mySaga)]);
}

export default rootSaga;
