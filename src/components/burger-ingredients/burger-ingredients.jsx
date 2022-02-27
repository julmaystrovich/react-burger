import React from "react";
import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredient from "./burger-ingredient";

function BurgerIngredients({ burger_data, action }) {
  const [current, setCurrent] = React.useState("buns");

  return (
    <section className={styles.burger_section + " mt-10"}>
      <p className="text text_type_main-large pb-5">Соберите бургер</p>
      <div style={{ display: "flex" }}>
        <Tab value="buns" active={current === "buns"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab
          value="filling"
          active={current === "filling"}
          onClick={setCurrent}
        >
          Начинки
        </Tab>
      </div>
      <div className={styles.scroll_content + " mt-10"}>
        <p className="text text_type_main-medium">Булки</p>
        <div className={styles.ingrs_list + " pt-6 pr-4 pl-4"}>
          {burger_data.map((item) => {
            return (
              item.type === "bun" && (
                <BurgerIngredient key={item._id} item={item} onClick={action} />
              )
            );
          })}
        </div>
        <p className="text text_type_main-medium pt-10">Соусы</p>
        <div className={styles.ingrs_list + " pt-6 pr-4 pl-4"}>
          {burger_data.map((item) => {
            return (
              item.type === "sauce" && (
                <BurgerIngredient key={item._id} item={item} onClick={action} />
              )
            );
          })}
        </div>
        <p className="text text_type_main-medium pt-10">Начинки</p>
        <div className={styles.ingrs_list + " pt-6 pr-4 pl-4"}>
          {burger_data.map((item) => {
            return (
              item.type === "main" && (
                <BurgerIngredient key={item._id} item={item} onClick={action} />
              )
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BurgerIngredients;
