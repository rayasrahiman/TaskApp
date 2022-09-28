import React from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import myFirstReducer from '../../redux/reducer';
import rootSaga from '../../redux/sagas';

export const renderWithRedux = renderedComp => {
  const sagaMiddleware = createSagaMiddleware();
  const rootReducer = combineReducers({myFirstReducer});

  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);

  return render(<Provider store={store}>{renderedComp}</Provider>);
};
