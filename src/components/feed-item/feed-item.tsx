import React, { FC } from "react";
import styles from "./feed-item.module.css";
import { TFeedItemComponent, TIngredient } from "../../utils/types";
import { useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { translateStatus } from "../../utils/utils";

const FeedItem: FC<TFeedItemComponent> = ({orderID, orderNumber, orderDate, orderName, ingredients, status, isUserOrder}) => {
    const location = useLocation();
    const { burgerData } = useSelector((store: any) => store.burgerData);
    const burgerIngredients = burgerData?.filter((item: TIngredient) => ingredients.includes(item._id));

    const orderPrice = React.useMemo(
        () =>
        burgerIngredients
            ? burgerIngredients.reduce((sum: number, current: TIngredient) => sum + current.price, 0)
            : 0,
        [burgerIngredients]
    );

    const ingredientsIconShow = burgerIngredients.length > 5
        ? burgerIngredients.slice(0, 5)
        : burgerIngredients;

    const ingredientsIconHidden = burgerIngredients.length > 5
        ? burgerIngredients.length - 5
        : 0;

    return (
        <Link to={{ pathname: `${location.pathname}/${orderID}`, state: { background: location } }} className={styles.link}>
        <article className={styles.feed_item + " mb-4"}>
          <div className={styles.item_section}>
            <div className={styles.order_info}>
              <p className={styles.order_id + " text text_type_digits-default pb-6"}>#{orderNumber}</p>
              <p className="text text_type_main-default pb-6">{orderDate}</p>
          </div>
              <p className={styles.order_name + " text text_type_main-default pb-6"}>{orderName}</p>
              {isUserOrder && <p className="text text_type_main-default pt-2 pb-6">{translateStatus(status)}</p>}
              <div className={styles.order_info}>
                    <ul className={styles.ingredient_list}>
                        {ingredientsIconShow.map((item, index) => (
                            <li key={index} className={styles.ingredient_img}>
                                <img className={styles.i_image} src={item.image} alt={item.name}/>
                                {index === 0 && ingredientsIconHidden > 0 && (
                                    <span className={styles.max_ingredient}>+{ingredientsIconHidden}</span>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className={styles.order_price}>
                        <p className="text text_type_digits-default">{orderPrice}</p>
                        &nbsp;
                        <CurrencyIcon type="primary" />
                    </div>
            </div>
          </div>
        </article>
        </Link>
      );
};

export default FeedItem;