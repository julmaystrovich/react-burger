import React, { FC } from "react";
import styles from "./order.module.css";
import OrderInfo from "../../components/order-info/order-info";
import { useDispatch } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { 
    wsUserOrderConnectionStartAction,
    wsOrderConnectionStartAction,
    wsUserOrderConnectionClosedAction,
    wsOrderConnectionClosedAction
 } from "../../services/actions/feed";

export const OrderPage: FC = () => {
  const dispatch = useDispatch();
  const isUserOrder = useRouteMatch({ path: "/profile/orders/" });

    React.useEffect(
        () => {
            dispatch(isUserOrder ? wsUserOrderConnectionStartAction() : wsOrderConnectionStartAction());
                return () => {
            dispatch(isUserOrder ? wsUserOrderConnectionClosedAction() : wsOrderConnectionClosedAction());
              };
            }, [],
    );
  return (
    <main className={styles.order_section}>
        <OrderInfo />
    </main>
  );
};