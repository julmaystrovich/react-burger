import { AnyAction } from "redux";
import { ingredientsInitialState } from "./ingredients";
import ingredientsReducer from "./ingredients";
import {
  GET_BURGER_INGREDIENTS_REQUEST,
  GET_BURGER_INGREDIENTS_FAILED,
  GET_BURGER_INGREDIENTS_SUCCESS,
  OPEN_INGREDIENTS_DETAILS,
  CLOSE_INGREDIENTS_DETAILS,
} from "../actions/ingredients";

describe("Проверка Ingredients Reducer", () => {
  const ingredient = {
    _id: "60d3b41abdacab0026a733c9",
    name: "Мясо бессмертных моллюсков Protostomia",
    type: "main",
    proteins: 433,
    fat: 244,
    carbohydrates: 33,
    calories: 420,
    price: 1337,
    image: "https://code.s3.yandex.net/react/code/meat-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
    __v: 0,
  };
  const ingredients = [ingredient];

  it("Проверка Initial State", () => {
    expect(ingredientsReducer(undefined, {} as AnyAction)).toEqual(
      ingredientsInitialState
    );
  });

  it("Проверка GET_BURGER_INGREDIENTS_REQUEST", () => {
    expect(
      ingredientsReducer(ingredientsInitialState, {
        type: GET_BURGER_INGREDIENTS_REQUEST,
      })
    ).toEqual({
      ...ingredientsInitialState,
      ingredientsRequest: true,
      ingredientsFailed: false,
    });
  });
  it("Проверка GET_BURGER_INGREDIENTS_SUCCESS", () => {
    expect(ingredientsReducer(ingredientsInitialState, {
        type: GET_BURGER_INGREDIENTS_SUCCESS,
        ingredients
    })).toEqual({
      ...ingredientsInitialState,
      ingredients: [ingredient],
      ingredientsRequest: false,
      ingredientsFailed: false,
    });
  });
  it("Проверка GET_BURGER_INGREDIENTS_FAILED", () => {
    expect(
      ingredientsReducer(ingredientsInitialState, {
        type: GET_BURGER_INGREDIENTS_FAILED,
      })
    ).toEqual({
      ...ingredientsInitialState,
      ingredientsFailed: true,
      ingredientsRequest: false,
    });
  });

  it('Проверка OPEN_INGREDIENTS_DETAILS', () => {
    expect(ingredientsReducer(ingredientsInitialState, {
        type: OPEN_INGREDIENTS_DETAILS,
        currentIngredient: ingredient,
    })).toEqual({
        ...ingredientsInitialState,
        currentIngredient: ingredient
    });
});

it('Проверка CLOSE_INGREDIENTS_DETAILS', () => {
    expect(ingredientsReducer(ingredientsInitialState, {
        type: CLOSE_INGREDIENTS_DETAILS,
    })).toEqual({
        ...ingredientsInitialState,
        currentIngredient: null
    });
});
});
