import { AnyAction } from "redux";
import { constructorInitialState } from "./constructor";
import constructorReducer from "./constructor";
import {
  ADD_CONSTRUCTOR_INGREDIENTS,
  REMOVE_CONSTRUCTOR_INGREDIENTS,
  MOVE_CONSTRUCTOR_INGREDIENTS,
  CLEAR_CONSTRUCTOR,
} from "../actions/constructor";

describe("Проверка Constructor Reducer", () => {
    const ingredients = [
        {
        _id: "60d3b41abdacab0026a733c7",
        name: "Флюоресцентная булка R2-D3",
        type: "bun",
        proteins: 44,
        fat: 26,
        carbohydrates: 85,
        calories: 643,
        price: 988,
        image: "https://code.s3.yandex.net/react/code/bun-01.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
        __v: 0,
        uuid: "4c37baf8-560e-443f-af79-3ba9c7bbcf9d"
        },
        {
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
        uuid: "c23847f2-6455-4002-859b-05987165c282"
        },
        {
        _id: "60d3b41abdacab0026a733ce",
        name: "Соус традиционный галактический",
        type: "sauce",
        proteins: 42,
        fat: 24,
        carbohydrates: 42,
        calories: 99,
        price: 15,
        image: "https://code.s3.yandex.net/react/code/sauce-03.png",
        image_mobile: "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/sauce-03-large.png",
        __v: 0,
        uuid: "159d7896-37a2-4247-b342-61c7f9b6e4be"
        }
    ];

    it("Проверка Initial State", () => {
        expect(constructorReducer(undefined, {} as AnyAction)).toEqual(constructorInitialState);
    });

    it('Проверка ADD_CONSTRUCTOR_INGREDIENTS', () => {
        expect(constructorReducer({
            ...constructorInitialState,
            burgerConstructor: []
        }, {
            type: ADD_CONSTRUCTOR_INGREDIENTS,
            item: ingredients[0]
        })).toEqual({
            ...constructorInitialState,
            burgerConstructor: [ingredients[0], ingredients[0]]
        });
    });

    it('Проверка REMOVE_CONSTRUCTOR_INGREDIENTS', () => {
        expect(constructorReducer({
            ...constructorInitialState,
            burgerConstructor: [ingredients[0], ingredients[1]]
        }, {
            type: REMOVE_CONSTRUCTOR_INGREDIENTS,
            uuid: ingredients[1].uuid
        })).toEqual({
            ...constructorInitialState,
            burgerConstructor: [ingredients[0]]
        });
    });

    it('Проверка MOVE_CONSTRUCTOR_INGREDIENTS', () => {
        expect(constructorReducer({
            ...constructorInitialState,
            burgerConstructor: [ingredients[1], ingredients[2]]
        }, {
            type: MOVE_CONSTRUCTOR_INGREDIENTS,
            dragIndex: 1,
            hoverIndex: 0
        })).toEqual({
            ...constructorInitialState,
            burgerConstructor: [ingredients[2], ingredients[1]]
        });
    });

    it('Проверка CLEAR_CONSTRUCTOR', () => {
        expect(constructorReducer({
            ...constructorInitialState,
            burgerConstructor: ingredients
        }, {
            type: CLEAR_CONSTRUCTOR,
        })).toEqual({
            ...constructorInitialState,
            burgerConstructor: []
        });
    });
});