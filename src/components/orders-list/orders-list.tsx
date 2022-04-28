import React, { useMemo, FC } from "react";
import styles from "./orders-list.module.css";
import FeedItem from "../feed-item/feed-item";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { 
  wsOrderConnectionStartAction,
  wsOrderConnectionClosedAction,
  wsUserOrderConnectionStartAction,
  wsUserOrderConnectionClosedAction
} from "../../services/actions/feed";

const OrdersList: FC = () => {
  const dispatch = useDispatch();
  const { orders, userOrders } = useSelector((store: any) => store.feed);
  const isUserOrder = useRouteMatch({ path: "/profile/orders/" });
  const currentOrder = isUserOrder ? userOrders : orders;

  React.useEffect(
    () => {
        dispatch(isUserOrder ? wsUserOrderConnectionStartAction() : wsOrderConnectionStartAction());
            return () => {
            dispatch(isUserOrder ? wsUserOrderConnectionClosedAction() : wsOrderConnectionClosedAction());
            };
        }, [],
  );

    return (
        <section className={styles.order_section}>
          {currentOrder && 
            <ul className={styles.order_list}>
                {currentOrder.map((item) => (
                    <FeedItem
                        key={item._id}
                        orderID={item._id}
                        orderNumber={item.number}
                        orderName={item.name}
                        orderDate={item.createdAt}
                        ingredients={item.ingredients}
                        status={item.status}
                        isUserOrder={isUserOrder}
                    />
                ))}
            </ul>}
        </section>
      );
};

export default OrdersList;