import React from "react";
import PropTypes from "prop-types";
import { IngredientPropTypes } from "../../utils/propTypes";
import styles from "./burger-ingredients.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerIngredient({ item, onClick }) {
  const handleClick = (e) => {
    onClick(e.currentTarget.id);
};
  return (
    <article
      onClick={handleClick}
      className={styles.ingr_section}
      id={item._id}
    >
      <img
        src={item.image}
        className={styles.ingr_image + " mr-4 ml-4"}
      />
      <Counter count={1} size="default" />
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
  onClick: PropTypes.func.isRequired,
};

export default BurgerIngredient;
