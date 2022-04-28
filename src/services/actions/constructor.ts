import { TIngredient } from "../../utils/types";

export const ADD_CONSTRUCTOR_INGREDIENTS: "ADD_CONSTRUCTOR_INGREDIENTS" =
  "ADD_CONSTRUCTOR_INGREDIENTS";
export const REMOVE_CONSTRUCTOR_INGREDIENTS: "REMOVE_CONSTRUCTOR_INGREDIENTS" =
  "REMOVE_CONSTRUCTOR_INGREDIENTS";
export const MOVE_CONSTRUCTOR_INGREDIENTS: "MOVE_CONSTRUCTOR_INGREDIENTS" =
  "MOVE_CONSTRUCTOR_INGREDIENTS";
export const CLEAR_CONSTRUCTOR: "CLEAR_CONSTRUCTOR" = "CLEAR_CONSTRUCTOR";

export interface IAddConstructorIngredientsAction {
  readonly type: typeof ADD_CONSTRUCTOR_INGREDIENTS;
  readonly item: TIngredient;
}

export interface IRemoveConstructorIngredientsAction {
  readonly type: typeof REMOVE_CONSTRUCTOR_INGREDIENTS;
  readonly uuid: string;
}

export interface IMoveConstructorIngredientsAction {
  readonly type: typeof MOVE_CONSTRUCTOR_INGREDIENTS;
  readonly dragIndex: number;
  readonly hoverIndex: number;
}

export interface IClearConstructorAction {
  readonly type: typeof CLEAR_CONSTRUCTOR;
}

export type TConstructorActions =
  | IAddConstructorIngredientsAction
  | IRemoveConstructorIngredientsAction
  | IMoveConstructorIngredientsAction
  | IClearConstructorAction;

export const addIngredient = (
  item: TIngredient,
  uuid: string
): IAddConstructorIngredientsAction => ({
  type: ADD_CONSTRUCTOR_INGREDIENTS,
  item: { ...item, uuid: uuid },
});

export const removeIngredient = (
  uuid: string
): IRemoveConstructorIngredientsAction => {
  return {
    type: REMOVE_CONSTRUCTOR_INGREDIENTS,
    uuid,
  };
};

export const moveIngredient = (
  dragIndex: number,
  hoverIndex: number
): IMoveConstructorIngredientsAction => {
  return {
    type: MOVE_CONSTRUCTOR_INGREDIENTS,
    dragIndex,
    hoverIndex,
  };
};

export const clearConstructorAction = (): IClearConstructorAction => ({
  type: CLEAR_CONSTRUCTOR,
});
