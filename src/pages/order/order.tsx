import React, { FC } from "react";
import styles from "./order.module.css";
import OrderInfo from "../../components/order-info/order-info";
import { useDispatch } from "../../services/hooks";
import { useRouteMatch } from "react-router-dom";
import {
  wsConnectionStartAction,
  wsConnectionClosedAction
} from "../../services/actions/feed";
import { wsUrl } from "../../utils/const";
import { getCookie } from "../../utils/cookie";

export const OrderPage: FC = () => {
  const dispatch = useDispatch();
  const isUserOrder = useRouteMatch({ path: "/profile/orders/" });
  const token = isUserOrder ? `?token=${getCookie('token')?.replace('Bearer ', '')}` : '';

  React.useEffect(() => {
    dispatch(
      isUserOrder
      ? wsConnectionStartAction(wsUrl + token)
      : wsConnectionStartAction(wsUrl + "/all")
    );
    return () => {
      dispatch(wsConnectionClosedAction);
    };
  }, []);
  return (
    <main className={styles.order_section}>
      <OrderInfo />
    </main>
  );
};
