import React, { FC } from "react";
import styles from "./order-info.module.css";
import { TParams } from "../../utils/types";
import { useSelector } from "../../services/hooks";
import { useParams } from "react-router-dom";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useRouteMatch } from "react-router-dom";
import OrderItem from "../order-item/order-item";
import { translateStatus } from "../../utils/utils";
import moment from "moment";

const OrderInfo: FC = () => {
    const { id } = useParams<TParams>();
    const { burgerData } = useSelector((store) => store.burgerData);
    const { orders } = useSelector((store) => store.feed);
    const isUserOrder = useRouteMatch({ path: "/profile/orders/" });
    const order = orders && orders.find((item) => item._id === id);
    //const userOrder = userOrders && userOrders.find((item) => item._id === id);
    //const currentOrder = isUserOrder ? userOrder : order;
    const burgerIngredients = burgerData && burgerData.filter((item) => order?.ingredients.includes(item._id));

    const orderPrice = React.useMemo(
        () =>
        burgerIngredients
            ? burgerIngredients.reduce((sum, current) => sum + current.price, 0)
            : 0,
        [burgerIngredients]
    );

    return (
        <div className={styles.order}>
            {order &&
            <>
                <p className={styles.order_id + " text text_type_digits-default pb-10"}>#{order.number}</p>
                <p className={styles.order_name + " text text_type_main-default pb-3"}>{order.name}</p>
                <p className={styles.order_status + " pb-15"}>{translateStatus(order.status)}</p>
                <h3 className={styles.order_title + " text text_type_main-default pb-6"}>Состав:</h3>
                <ul className={styles.order_list}>
                    {burgerIngredients.map((ingredient) => (
                        <OrderItem 
                            key={ingredient._id}
                            ingredient={ingredient}
                            name={ingredient.name}
                            image={ingredient.image}
                            currentOrder={order}
                        />
                    ))}
                </ul>
                <div className={styles.order_price + " mt-10"}>
                    <p className={styles.order_date}>{moment(order.createdAt).calendar()}</p>
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