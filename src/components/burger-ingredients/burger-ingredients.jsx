import React, { useMemo } from "react";
import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredient from "./burger-ingredient";
import { useSelector } from "react-redux";

function BurgerIngredients() {
  const { burgerData } = useSelector((store) => store.burgerData);
  const [current, setCurrent] = React.useState("buns");
  const bunRef = React.useRef();
  const sauceRef = React.useRef();
  const fillingRef = React.useRef();
  const onClickTab = (value) => {
    setCurrent(value);
    const el = document.getElementById(value);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const onScrollTab = (e) => {
    const bunSpace = bunRef.current.getBoundingClientRect().top;
    const sauceSpace = sauceRef.current.getBoundingClientRect().top;
    const fillingSpace = fillingRef.current.getBoundingClientRect().top;
    const top = e.target.getBoundingClientRect().top;

    const offset = {
      buns: Math.abs(bunSpace - top),
      filling: Math.abs(fillingSpace - top),
      sauce: Math.abs(sauceSpace - top),
    };

    const activeTabs = Object.keys(offset).reduce((prev, current) =>
      offset[prev] < offset[current] ? prev : current
    );

    if (current !== activeTabs) {
      setCurrent(activeTabs);
    }
  };

  const burgerBuns = useMemo(
    () => burgerData.filter((item) => item.type === "bun"),
    [burgerData]
  );

  const burgerSauce = useMemo(
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
      <div className={styles.scroll_content + " mt-10"} onScroll={onScrollTab}>
        <p className="text text_type_main-medium" id="buns" ref={bunRef}>
          Булки
        </p>
        <div className={styles.ingrs_list + " pt-6 pr-4 pl-4"}>
          {burgerBuns.map((item) => {
            return <BurgerIngredient key={item._id} item={item} />;
          })}
        </div>
        <p
          className="text text_type_main-medium pt-10"
          id="sauce"
          ref={sauceRef}
        >
          Соусы
        </p>
        <div className={styles.ingrs_list + " pt-6 pr-4 pl-4"}>
          {burgerSauce.map((item) => {
            return <BurgerIngredient key={item._id} item={item} />;
          })}
        </div>
        <p
          className="text text_type_main-medium pt-10"
          id="filling"
          ref={fillingRef}
        >
          Начинки
        </p>
        <div className={styles.ingrs_list + " pt-6 pr-4 pl-4"}>
          {burgerMain.map((item) => {
            return <BurgerIngredient key={item._id} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default BurgerIngredients;
