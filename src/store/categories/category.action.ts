import { CATEGORIES_ACTION_TYPES } from './category.types';

import { createAction,Action, ActionWithPayload } from '../../utils/reducer/reducer.utils';
import { Category,CategoryItem } from './category.types';
import { withMatcher } from '../../utils/reducer/reducer.utils';

export const fetchCategoriesStart = withMatcher(():FetchCategoriesStart =>
createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START));

export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>
export type FetchCategoriesSuccess= ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,Category[]>
export type FetchCategoriesFailed= ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,Error>

export const fetchCategoriesSuccess = withMatcher((categoriesArray:Category[]):FetchCategoriesSuccess =>
createAction(
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  categoriesArray
));

export const fetchCategoriesFailed = withMatcher((error:Error):FetchCategoriesFailed =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,error));

  export type CategoryAction = FetchCategoriesFailed|FetchCategoriesStart|FetchCategoriesSuccess;
