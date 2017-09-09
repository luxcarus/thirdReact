import * as A from 'actions';
import {combineReducers} from 'redux';

const initial = {
  id: null, name: null, isMember: false
}
const signin = (state = initial, action) => {
  console.log('signin-reducer')
  switch (action.type) {
    case A.UPDATE_MEMBER_STATUS:
      return {
        ...state,
        id:action.id,
        name:action.name,
        isMember:action.isMember
      }
    case A.SIGN_OUT:
      return {
        ...state,
        id:action.id,
        name:action.name,
        isMember:action.isMember
      }
    default :
      return state
  }
};
const extra = (state = { list: 'this_is_extra_reducer' }, action) => {
  switch (action.type) {
    default: return state
  }
}
export default combineReducers({
    signin,
    extra
})