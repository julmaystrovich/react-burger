import React from "react";
import PropTypes from "prop-types";
import { IngredientPropTypes } from "../../utils/propTypes";
import styles from "./burger-ingredients.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { openIngredientModal } from "../../services/actions/ingredients";
import { useDrag } from "react-dnd";

function BurgerIngredient({ item }) {
  const dispatch = useDispatch();
  const { burgerData } = useSelector((store) => store.burgerData);
  const { burgerConstructor } = useSelector((store) => store.constructor);
  const count = burgerConstructor?.filter((it) => it._id === item._id).length;

  const handleClick = (e) => {
    const currentData = burgerData.find(
      (item) => item._id === e.currentTarget.id
    );
    dispatch(openIngredientModal(currentData));
  };

  const [{ isDrag }, dragRef] = useDrag({
    type: "ingredients",
    item: item,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  return (
    <article
      className={styles.ingr_section}
      id={item._id}
      onClick={handleClick}
      ref={dragRef}
    >
      <img
        src={item.image}
        alt={item.name}
        className={styles.ingr_image + " mr-4 ml-4"}
      />
      {count > 0 && <Counter count={count} size="default" />}
      <div className={styles.ingr_price + " mt-1 mb-1"}>
        <p className="text text_type_digits-default mr-2">{item.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default">{item.name}</p>
    </article>
  );
}

BurgerIngredient.propTypes = {
  item: IngredientPropTypes.isRequired,
};

export default BurgerIngredient;
