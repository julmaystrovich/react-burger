import React, { useEffect } from "react";
//import { ingredientsPropTypes } from "../../utils/PropTypes";
import styles from "./burger-constructor.module.css";
import {
  Button,
  CurrencyIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorItem from "./burger-constructor-item";

function BurgerConstructor({ burger_data, action }) {
  //    const totalSum = () => {
  //     const bunPrice = (bun.price * 2)
  //    };

  const burger_buns = burger_data.find((item) => {
    return item.type === "bun";
  });

  return (
    <section className={styles.constr_section + " ml-10 pt-25"}>
      <div className={styles.constr_inside + " pr-4 pl-4"}>
        {burger_buns && (
          <ConstructorElement
            type="top"
            isLocked={true}
            text={burger_buns.name + " (верх)"}
            price={burger_buns.price}
            thumbnail={burger_buns.image_mobile}
            style={{ marginLeft: "32px", width: "100%" }}
            className={styles.constr_inside + " pr-4 pl-4"}
          />
        )}
        <div className={styles.constr_scroll}>
          {burger_data.map((item) => {
            return (
              item.type != "bun" && (
                <BurgerConstructorItem key={item._id} burger_item={item} />
              )
            );
          })}
        </div>
        {burger_buns && (
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={burger_buns.name + " (низ)"}
            price={burger_buns.price}
            thumbnail={burger_buns.image_mobile}
            style={{ marginLeft: "32px" }}
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

export default BurgerConstructor;
