import * as A from '../actions/actions';
import {combineReducers} from 'redux';

const initial = {
  id:null,password:null,remember:false
}

const loginReducers = (state = initial, action) => {
  switch (action.type) {
    case A.SIGN_IN:
      return {
        ...state,
        id:action.id,
        password:action.password,
        remember:action.remember
      }
    case A.SIGN_OUT:
      return {
        ...state,
        id:action.id,
        password:action.password,
        remember:action.remember
      }
    case A.SIGN_UP:
      return {
        ...state,
        id:action.id,
        password:action.password,
        remember:action.remember
      }
    case A.SIGN_DOWN:
      return {
        ...state,
        id:action.id,
        password:action.password,
        remember:action.remember
      }
    default :
      return state;
  }
};
const extra = (state = { list: 'this_is_extra_reducer' }, action) => {
  switch (action.type) {
    default: return state;
  }
}
export default combineReducers({
    loginReducers,
    extra
});