export const ADD_CONSTRUCTOR_INGREDIENTS = 'ADD_CONSTRUCTOR_INGREDIENTS';
export const REMOVE_CONSTRUCTOR_INGREDIENTS = 'REMOVE_CONSTRUCTOR_INGREDIENTS';
export const MOVE_CONSTRUCTOR_INGREDIENTS = 'MOVE_CONSTRUCTOR_INGREDIENTS';

export function addIngredient(item, uuid) {
    return function (dispatch) {
        dispatch({
            type: ADD_CONSTRUCTOR_INGREDIENTS,
            item: {...item, uuid: uuid}
        });
    }
}

export function removeIngredient(uuid) {
    return function (dispatch) {
        dispatch({
            type: REMOVE_CONSTRUCTOR_INGREDIENTS,
            uuid
        });
    }
}

export function moveIngredient(dragIndex, hoverIndex) {
    return {
        type: MOVE_CONSTRUCTOR_INGREDIENTS,
        dragIndex,
        hoverIndex
    };
}