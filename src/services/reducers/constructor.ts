import {
    ADD_CONSTRUCTOR_INGREDIENTS,
    REMOVE_CONSTRUCTOR_INGREDIENTS,
    MOVE_CONSTRUCTOR_INGREDIENTS,
    CLEAR_CONSTRUCTOR,
    TConstructorActions
} from '../actions/constructor';
import { TIngredient } from '../../utils/types';

export type TConstructorState = {
    burgerConstructor: Array<TIngredient>;
};

export const constructorInitialState: TConstructorState = {
    burgerConstructor: []
};

const constructorReducer = (state = constructorInitialState, action: TConstructorActions): TConstructorState => {
    switch (action.type) {
        case ADD_CONSTRUCTOR_INGREDIENTS: {
            return {
                ...state, burgerConstructor:
                    state.burgerConstructor
                        ? action.item.type === "bun"
                            ? [...state.burgerConstructor, action.item, action.item]
                            : [...state.burgerConstructor, action.item]
                        : action.item.type === "bun"
                            ? [action.item, action.item]
                            : [action.item]
            };
        }
        case REMOVE_CONSTRUCTOR_INGREDIENTS: {
            return { ...state, burgerConstructor: [...state.burgerConstructor.filter((ingredient) => ingredient.uuid !== action.uuid)] };
        }
        case MOVE_CONSTRUCTOR_INGREDIENTS: {
            const burgerFilling = state.burgerConstructor.filter((ingredient) => ingredient.type !== 'bun');
            const burgerBun = state.burgerConstructor.filter((ingredient) => ingredient.type === 'bun');
            const newBurgerFilling = [...burgerFilling];
            const dragItem = newBurgerFilling.splice(action.dragIndex, 1);
            newBurgerFilling.splice(action.hoverIndex, 0, dragItem[0]);
            return {
                ...state,
                burgerConstructor: [...burgerBun, ...newBurgerFilling],
            };
        }
        case CLEAR_CONSTRUCTOR: {
            return { ...state, burgerConstructor: [] };
        }
        default: {
            return state;
        }
    }
};

export default constructorReducer;