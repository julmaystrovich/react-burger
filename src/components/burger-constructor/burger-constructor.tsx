import React, { useMemo, FC } from "react";
import styles from "./burger-constructor.module.css";
import {
  Button,
  CurrencyIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorItem from "./burger-constructor-item";
import { useSelector, useDispatch } from "../../services/hooks";
import { v4 as uuidv4 } from "uuid";
import {
  addIngredient,
  removeIngredient,
  moveIngredient,
} from "../../services/actions/constructor";
import { useDrop } from "react-dnd";
import { getOrderNumber } from "../../services/actions/order";
import { useHistory } from 'react-router-dom';
import { TIngredient } from "../../utils/types";

const BurgerConstructor: FC = () => {
  const dispatch = useDispatch();
  const { burgerConstructor } = useSelector((store) => store.constructor);
  const { orderNumberRequest } = useSelector((store) => store.order);
  const history = useHistory();
  const { loggedIn } = useSelector((store) => store.auth);
  const burgerBuns = burgerConstructor?.find(
    (ingredient) => ingredient.type === "bun"
  );
  const burgerFill = useMemo(
    () => burgerConstructor?.filter((ingredient) => ingredient.type !== "bun"),
    [burgerConstructor]
  );

  const getOrderNumberPopup = React.useCallback(() => {
    if (loggedIn) {
      const burgerIngredients = burgerConstructor.map(((item) => item._id));
      dispatch(getOrderNumber(burgerIngredients));
  } else {
      history.push("/login");
  }
}, [dispatch, burgerConstructor, history, loggedIn]);

  const orderPrice = React.useMemo(
    () =>
      burgerConstructor
        ? burgerConstructor.reduce((sum, current) => sum + current.price, 0)
        : 0,
    [burgerConstructor]
  );

  const handleDrop = (item: TIngredient) => {
    const uuid = uuidv4();
    if (item.type === "bun" && burgerBuns) {
      dispatch(removeIngredient(burgerBuns.uuid));
    }
    dispatch(addIngredient(item, uuid));
  };

  const handleMove = (dragIndex: number, hoverIndex: number) => {
    dispatch(moveIngredient(dragIndex, hoverIndex));
  };

  const [, dropTarget] = useDrop({
    accept: "ingredients",
    drop: (ingredient: TIngredient) => {
      handleDrop(ingredient);
    },
  });

  const handleRemove = (uuid: string) => {
    dispatch(removeIngredient(uuid));
  };

  const isDisabled = !burgerConstructor?.length || orderNumberRequest || !burgerBuns;

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
