import React, { useMemo } from "react";
import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredient from "./burger-ingredient";
import PropTypes from "prop-types";
import { IngredientsPropTypes } from "../../utils/propTypes";

function BurgerIngredients({ burgerData, action }) {
  const [current, setCurrent] = React.useState("buns");

  const onClickTab = (value) => {
    setCurrent(value);
    const el = document.getElementById(value);
    if (el) el.scrollIntoView({behavior: "smooth"});
  };

  const burgerBuns = useMemo(
    () => burgerData.filter((item) => item.type === "bun"),
    [burgerData]
  );

  const burgerSause = useMemo(
    () => burgerData.filter((item) => item.type === "sauce"),
    [burgerData]
  );

  const burgerMain = useMemo(
    () => burgerData.filter((item) => item.type === "main"),
    [burgerData]
  );

  return (
    <section className={styles.burger_section + " mt-10"}>
      <p className="text text_type_main-large pb-5">Соберите бургер</p>
      <div className={styles.tabs_section}>
        <Tab value="buns" active={current === "buns"} onClick={onClickTab}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={onClickTab}>
          Соусы
        </Tab>
        <Tab
          value="filling"
          active={current === "filling"}
          onClick={onClickTab}
        >
          Начинки
        </Tab>
      </div>
      <div className={styles.scroll_content + " mt-10"}>
        <p className="text text_type_main-medium" id="buns">Булки</p>
        <div className={styles.ingrs_list + " pt-6 pr-4 pl-4"}>
          {burgerBuns.map((item, index) => {
            return (
                <BurgerIngredient key={index} item={item} onClick={action} />
            );
          })}
        </div>
        <p className="text text_type_main-medium pt-10" id="sauce">Соусы</p>
        <div className={styles.ingrs_list + " pt-6 pr-4 pl-4"}>
          {burgerSause.map((item, index) => {
            return (
                <BurgerIngredient key={index} item={item} onClick={action} />
            );
          })}
        </div>
        <p className="text text_type_main-medium pt-10" id="filling">Начинки</p>
        <div className={styles.ingrs_list + " pt-6 pr-4 pl-4"}>
          {burgerMain.map((item, index) => {
            return (
                <BurgerIngredient key={index} item={item} onClick={action} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
  burgerData: IngredientsPropTypes.isRequired,
  action: PropTypes.func.isRequired,
};

export default BurgerIngredients;
