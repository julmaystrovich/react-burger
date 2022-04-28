import React, { FC } from "react";
import styles from "./order-info.module.css";
import { TIngredient, TParams, TOrder } from "../../utils/types";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useRouteMatch } from "react-router-dom";
import OrderItem from "../order-item/order-item";
import { translateStatus } from "../../utils/utils";

const OrderInfo: FC = () => {
    const { id } = useParams<TParams>();
    const { burgerData } = useSelector((store: any) => store.burgerData);
    const { orders, userOrders } = useSelector((store: any) => store.feed);
    const isUserOrder = useRouteMatch({ path: "/profile/orders/" });
    const order = orders && orders.find((item: TOrder) => item._id === id);
    const userOrder = userOrders && userOrders.find((item: TOrder) => item._id === id);
    const currentOrder = isUserOrder ? userOrder : order;
    const burgerIngredients = burgerData && burgerData.filter((item) => currentOrder?.ingredients.includes(item._id));

    const orderPrice = React.useMemo(
        () =>
        burgerIngredients
            ? burgerIngredients.reduce((sum: number, current: TIngredient) => sum + current.price, 0)
            : 0,
        [burgerIngredients]
    );

    return (
        <div className={styles.order}>
            {currentOrder &&
            <>
                <p className={styles.order_id + " text text_type_digits-default pb-10"}>#{currentOrder.number}</p>
                <p className={styles.order_name + " text text_type_main-default pb-3"}>{currentOrder.name}</p>
                <p className={styles.order_status + " pb-15"}>{translateStatus(currentOrder.status)}</p>
                <h3 className={styles.order_title + " text text_type_main-default pb-6"}>Состав:</h3>
                <ul className={styles.order_list}>
                    {burgerIngredients.map((ingredient) => (
                        <OrderItem 
                            key={ingredient._id}
                            ingredient={ingredient}
                            name={ingredient.name}
                            image={ingredient.image}
                            currentOrder={currentOrder}
                        />
                    ))}
                </ul>
                <div className={styles.order_price + " mt-10"}>
                    <p className={styles.order_date}>{currentOrder.createdAt}</p>
                    <div className={styles.order_total}>
                        <p className={styles.order_number + " text text_type_digits-default"}>{orderPrice}</p>
                        &nbsp;
                        <CurrencyIcon type="primary" />
                    </div>
                </div>
            </>}
        </div>
      );
};

export default OrderInfo;