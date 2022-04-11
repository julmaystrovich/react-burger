import { Location } from "history";

export type TIngredient = {
    _id: string,
    name: string,
    type: string,
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    price: number,
    image: string,
    image_mobile: string,
    image_large: string,
    __v: number,
    uuid: string,
}

export type TIngredientId = Pick<TIngredient, '_id'>;

export type TIngredientComponent = {
    item: TIngredient;
}

export type TIngredientsItemComponent = {
    ingredients: TIngredient[];
    name: string;
}

export type TBurgerConstructorComponent = {
    burgerItem: TIngredient;
    index: number;
    onDelete: (uuid: string) => void;
    onMove: (dragIndex: number, hoverIndex: number) => void;
}

export type TModal = {
    header: string;
    onClose: () => void;
}

export type TModalOverlay = {
    onClose: () => void;
}

export type TLocation = {
    from: Location;
    background?: Location;
}

export type TParams = {
    ingredientId: string;
}

export type TForm = {
    name?: string;
    email?: string;
    password?: string;
    token?: string;
}