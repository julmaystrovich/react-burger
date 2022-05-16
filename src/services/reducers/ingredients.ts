import {
    GET_BURGER_INGREDIENTS_REQUEST,
    GET_BURGER_INGREDIENTS_FAILED,
    GET_BURGER_INGREDIENTS_SUCCESS,
    OPEN_INGREDIENTS_DETAILS,
    CLOSE_INGREDIENTS_DETAILS,
    TIngredientsActions
} from '../actions/ingredients';
import { TIngredient } from '../../utils/types';

export type TIngredientsState = {
    burgerData: ReadonlyArray<TIngredient>;
    ingredientsRequest: boolean;
    ingredientsFailed: boolean;
    currentIngredient: TIngredient | null;
};

export const ingredientsInitialState: TIngredientsState = {
    burgerData: [],
    ingredientsRequest: false,
    ingredientsFailed: false,
    currentIngredient: null,
};

const ingredientsReducer = (state = ingredientsInitialState, action: TIngredientsActions): TIngredientsState => {
    switch (action.type) {
        case GET_BURGER_INGREDIENTS_REQUEST: {
            return { ...state, ingredientsRequest: true, ingredientsFailed: false };
        }
        case GET_BURGER_INGREDIENTS_SUCCESS: {
            return { ...state, ingredientsFailed: false, burgerData: action.ingredients, ingredientsRequest: false };
        }
        case GET_BURGER_INGREDIENTS_FAILED: {
            return { ...state, ingredientsFailed: true, ingredientsRequest: false };
        }
        case OPEN_INGREDIENTS_DETAILS: {
            return { ...state, currentIngredient: action.currentIngredient };
        }
        case CLOSE_INGREDIENTS_DETAILS: {
            return { ...state, currentIngredient: null };
        }
        default: {
            return state;
        }
    }
};

export default ingredientsReducer;