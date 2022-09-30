import { CategoryAction, fetchCategoriesFailed, fetchCategoriesStart, fetchCategoriesSuccess } from './category.action';
import { CATEGORIES_ACTION_TYPES, Category } from './category.types';
import {AnyAction} from 'redux';

export const CATEGORIES_INITIAL_STATE : CategoryState= {
  categories: [],
  isLoading: false,
  error: null,
};
export type CategoryState = {
  readonly categories: Category[],
  readonly isLoading: boolean,
  readonly error: Error|null,
}

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {} as AnyAction
):CategoryState => {

  // switch (action.type) {
  //   case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
  //     return { ...state, isLoading: true };
  //   case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
  //     return { ...state, categories: action.payload, isLoading: false };
  //   case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
  //     return { ...state, error: action.payload, isLoading: false };
  //   default:
  //     return state;import {AnyAction} from 'redux';
  // }
  if(fetchCategoriesStart.match(action)){
    return { ...state, isLoading: true };
  }
  if(fetchCategoriesSuccess.match(action)){
    return { ...state, categories: action.payload, isLoading: false };
  }
  if(fetchCategoriesFailed.match(action)){
    return { ...state, error: action.payload, isLoading: false }; 
  }

  return state
};
