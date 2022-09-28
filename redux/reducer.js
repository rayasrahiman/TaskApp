import {GET_USER_SUCCESS} from './actionsConstants';

const initialState = {
  users: [],
};

const myFirstReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {...state, users: action.users};
    default:
      return state;
  }
};

export default myFirstReducer;
