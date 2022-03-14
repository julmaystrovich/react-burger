import { getBurgerData } from '../../utils/connectAPI';

export const GET_BURGER_INGREDIENTS_REQUEST = 'GET_BURGER_INGREDIENTS_REQUEST';
export const GET_BURGER_INGREDIENTS_SUCCESS = 'GET_BURGER_INGREDIENTS_SUCCESS';
export const GET_BURGER_INGREDIENTS_FAILED = 'GET_BURGER_INGREDIENTS_FAILED';

export const OPEN_INGREDIENTS_DETAILS = 'OPEN_INGREDIENTS_DETAILS';
export const CLOSE_INGREDIENTS_DETAILS = 'CLOSE_INGREDIENTS_DETAILS';

export function getBurgerIngredients() {
  return function (dispatch) {
    dispatch({
      type: GET_BURGER_INGREDIENTS_REQUEST
    });
    getBurgerData()
      .then((res) => {
        
        dispatch({
          type: GET_BURGER_INGREDIENTS_SUCCESS,
          data: res.data
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_BURGER_INGREDIENTS_FAILED
        })
      });
  };
}

export function openIngredientModal(currentIngredient) {
  return function (dispatch) {
    dispatch({
      type: OPEN_INGREDIENTS_DETAILS,
      currentIngredient
    });
  }
}

export function closeIngredientModal() {
  return function (dispatch) {
    dispatch({
      type: CLOSE_INGREDIENTS_DETAILS
    });
  }
}