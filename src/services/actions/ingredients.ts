import { getBurgerData } from "../../utils/connectAPI";
import { TIngredient } from "../../utils/types";
import { AppDispatch, AppThunk } from '../types';

export const GET_BURGER_INGREDIENTS_REQUEST: "GET_BURGER_INGREDIENTS_REQUEST" =
  "GET_BURGER_INGREDIENTS_REQUEST";
export const GET_BURGER_INGREDIENTS_SUCCESS: "GET_BURGER_INGREDIENTS_SUCCESS" =
  "GET_BURGER_INGREDIENTS_SUCCESS";
export const GET_BURGER_INGREDIENTS_FAILED: "GET_BURGER_INGREDIENTS_FAILED" =
  "GET_BURGER_INGREDIENTS_FAILED";

export const OPEN_INGREDIENTS_DETAILS: "OPEN_INGREDIENTS_DETAILS" =
  "OPEN_INGREDIENTS_DETAILS";
export const CLOSE_INGREDIENTS_DETAILS: "CLOSE_INGREDIENTS_DETAILS" =
  "CLOSE_INGREDIENTS_DETAILS";

export interface IGetBurgerIngredientsRequestAction {
  readonly type: typeof GET_BURGER_INGREDIENTS_REQUEST;
}

export interface IGetBurgerIngredientsSuccessAction {
  readonly type: typeof GET_BURGER_INGREDIENTS_SUCCESS;
  readonly ingredients: ReadonlyArray<TIngredient>;
}

export interface IGetBurgerIngredientsFailedAction {
  readonly type: typeof GET_BURGER_INGREDIENTS_FAILED;
}

export interface IOpenIngredientsDetailsAction {
  readonly type: typeof OPEN_INGREDIENTS_DETAILS;
  readonly currentIngredient: TIngredient;
}

export interface ICloseIngredientsDetailsAction {
  readonly type: typeof CLOSE_INGREDIENTS_DETAILS;
}

export type TIngredientsActions =
  | IGetBurgerIngredientsRequestAction
  | IGetBurgerIngredientsSuccessAction
  | IGetBurgerIngredientsFailedAction
  | IOpenIngredientsDetailsAction
  | ICloseIngredientsDetailsAction;

const getBurgerIngredientsRequestAction = (): IGetBurgerIngredientsRequestAction => ({
  type: GET_BURGER_INGREDIENTS_REQUEST,
});

const getBurgerIngredientsSuccessAction = (
  ingredients: ReadonlyArray<TIngredient>
): IGetBurgerIngredientsSuccessAction => ({
  type: GET_BURGER_INGREDIENTS_SUCCESS,
  ingredients,
});

const getBurgerIngredientsFailedAction = (): IGetBurgerIngredientsFailedAction => ({
  type: GET_BURGER_INGREDIENTS_FAILED,
});

export const getBurgerIngredients: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch(getBurgerIngredientsRequestAction());
  getBurgerData()
    .then((res) => {
        dispatch(getBurgerIngredientsSuccessAction(res.data));
    })
    .catch((err) => {
        console.log(err);
        dispatch(getBurgerIngredientsFailedAction());
    });
}

export const openIngredientsDetails = (
  currentIngredient: TIngredient
): IOpenIngredientsDetailsAction => ({
  type: OPEN_INGREDIENTS_DETAILS,
  currentIngredient,
});

export const closeIngredientsDetails = (): ICloseIngredientsDetailsAction => ({
  type: CLOSE_INGREDIENTS_DETAILS,
});