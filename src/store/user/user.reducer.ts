import { AnyAction} from 'redux'
import { Userdata } from '../../utils/firebase/firebase.utils';
import { signInFailed, signInSuccess, signOutFailed, signOutSuccess, signUpFailed } from './user.action';
import { USER_ACTION_TYPES } from './user.types';

const INITIAL_STATE : UserState= {
  currentUser: null,
  isLoading: false,
  error: null,
};
export type UserState = {
  currentUser : Userdata|null;
  isLoading:boolean;
  error: null|Error;
}
export const userReducer = (state = INITIAL_STATE, action:AnyAction) => {
 
  if(signInSuccess.match(action))
  return { ...state, currentUser: action.payload };

  if (signOutSuccess.match(action))
  return { ...state, currentUser: null };

  if(signOutFailed.match(action)||signInFailed.match(action)||signUpFailed.match(action))
  return { ...state, error: action.payload };



  // switch (type) {
  //   case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
  //     return { ...state, currentUser: payload };
  //   case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
  //     return { ...state, currentUser: null };
  //   case USER_ACTION_TYPES.SIGN_OUT_FAILED:
  //   case USER_ACTION_TYPES.SIGN_IN_FAILED:
  //   case USER_ACTION_TYPES.SIGN_UP_FAILED:
  //     return { ...state, error: payload };
  //   default:
      return state;
 // }
};
