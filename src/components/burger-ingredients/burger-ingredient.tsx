import React, { FC, useMemo } from "react";
import { TIngredientComponent, TIngredient } from "../../utils/types";
import styles from "./burger-ingredients.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { openIngredientsDetails } from "../../services/actions/ingredients";
import { useDrag } from "react-dnd";
import { useLocation, Link } from "react-router-dom";

const BurgerIngredient: FC<TIngredientComponent> = ({ item }) => {
  const dispatch = useDispatch();
  const { burgerData } = useSelector((store: any) => store.burgerData);
  const { burgerConstructor } = useSelector((store: any) => store.constructor);
  const count = useMemo(() => burgerConstructor?.filter((it: TIngredient) => it._id === item._id).length, [burgerConstructor]);
  const location = useLocation();

  const handleClick = (e: any) => {
    const currentData = burgerData.find(
      (item: TIngredient) => item._id === e.currentTarget.id
    );
    dispatch(openIngredientsDetails(currentData));
  };

  const [{ isDrag }, dragRef] = useDrag({
    type: "ingredients",
    item: item,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const ingredientId = item['_id'];

  return (
    <Link
      key={item._id}
      to={{
        pathname: `/ingredients/${ingredientId}`,
        state: { background: location },
      }}
      className={styles.nodec_link}
    >
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
    </Link>
  );
}

export default BurgerIngredient;
