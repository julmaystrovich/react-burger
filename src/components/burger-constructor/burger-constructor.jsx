import React, { useEffect } from "react";
import { IngredientsPropTypes } from "../../utils/propTypes";
import styles from "./burger-constructor.module.css";
import {
  Button,
  CurrencyIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorItem from "./burger-constructor-item";
import PropTypes from "prop-types";

function BurgerConstructor({ burgerData, action }) {

  const burgerBuns = burgerData.find((item) => {
    return item.type === "bun";
  });

  return (
    <section className={styles.constr_section + " ml-10 pt-25"}>
      <div className={styles.constr_inside + " pr-4 pl-4"}>
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
          {burgerData.map((item, index) => {
            return (
              item.type != "bun" && (
                <BurgerConstructorItem key={index} burgerItem={item} />
              )
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
          <p className="text text_type_digits-medium mr-2">12345</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="medium" onClick={action}> 
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  burgerData: IngredientsPropTypes.isRequired,
  action: PropTypes.func.isRequired
};

export default BurgerConstructor;
