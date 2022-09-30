
import { CartItem, CART_ACTION_TYPES } from './cart.types';
import {AnyAction} from 'redux';

export type CartState = {
  isCartOpen : boolean;
  cartItems: CartItem[]
}

export const CART_INITIAL_STATE : CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {} as AnyAction) => {
  switch (action.type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: action.payload,
      };
    default:
      return state;
  }
};
