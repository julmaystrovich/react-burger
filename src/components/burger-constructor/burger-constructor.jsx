import React, { useCallback } from "react";
import styles from "./burger-constructor.module.css";
import {
  Button,
  CurrencyIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorItem from "./burger-constructor-item";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  addIngredient,
  removeIngredient,
  moveIngredient,
} from "../../services/actions/constructor";
import { useDrop } from "react-dnd";
import { getOrderNumber } from "../../services/actions/order";

function BurgerConstructor() {
  const dispatch = useDispatch();
  const { burgerConstructor } = useSelector((store) => store.constructor);
  const { orderRequest } = useSelector((store) => store.order);
  const burgerBuns = burgerConstructor?.find(
    (ingredient) => ingredient.type === "bun"
  );
  const burgerFill = burgerConstructor?.filter(
    (ingredient) => ingredient.type !== "bun"
  );

  const getOrderNumberPopup = React.useCallback(() => {
    const burgerIngredients = burgerConstructor.map((item) => item._id);
    dispatch(getOrderNumber(burgerIngredients));
  }, [dispatch, burgerConstructor]);

  const orderPrice = React.useMemo(
    () =>
      burgerConstructor
        ? burgerConstructor.reduce((sum, current) => sum + current.price, 0)
        : 0,
    [burgerConstructor]
  );

  const handleDrop = (item) => {
    const uuid = uuidv4();
    if (item.type === "bun" && burgerBuns) {
      dispatch(removeIngredient(burgerBuns.uuid));
    }
    dispatch(addIngredient(item, uuid));
  };

  const handleMove = useCallback((dragIndex, hoverIndex) => {
    dispatch(moveIngredient(dragIndex, hoverIndex));
  });

  const [, dropTarget] = useDrop({
    accept: "ingredients",
    drop: (ingredient) => {
      handleDrop(ingredient);
    },
  });

  const handleRemove = (uuid) => {
    dispatch(removeIngredient(uuid));
  };

  const isDisabled = !burgerConstructor?.length || orderRequest || !burgerBuns;

  return (
    <section className={styles.constr_section + " ml-10 pt-25"}>
      <div className={styles.constr_inside + " pr-4 pl-4"} ref={dropTarget}>
        {burgerBuns && (
          <ConstructorElement
            type="top"
            isLocked={true}
            text={burgerBuns.name + " (верх)"}
            price={burgerBuns.price}
            thumbnail={burgerBuns.image_mobile}
            className={styles.constr_inside + " pr-4 pl-4"}
          />
        )}
        <div className={styles.constr_scroll}>
          {burgerFill &&
            burgerFill.map((item, index) => {
              return (
                <BurgerConstructorItem
                  key={item.uuid}
                  burgerItem={item}
                  index={index}
                  onDelete={handleRemove}
                  onMove={handleMove}
                />
              );
            })}
        </div>
        {burgerBuns && (
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={burgerBuns.name + " (низ)"}
            price={burgerBuns.price}
            thumbnail={burgerBuns.image_mobile}
          />
        )}
      </div>
      <div className={styles.total_area + " mt-10 mr-4"}>
        <div className={styles.total_inside + " mr-10"}>
          <p className="text text_type_digits-medium mr-2">{orderPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="medium" onClick={getOrderNumberPopup} disabled={isDisabled}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

export default BurgerConstructor;
