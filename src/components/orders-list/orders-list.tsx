import React, { FC } from "react";
import styles from "./orders-list.module.css";
import FeedItem from "../feed-item/feed-item";
import { useSelector, useDispatch } from "../../services/hooks";
import { useRouteMatch } from "react-router-dom";
import { 
  wsConnectionStartAction,
  wsConnectionClosedAction
} from "../../services/actions/feed";
import { wsUrl } from "../../utils/const";
import { getCookie } from "../../utils/cookie";

const OrdersList: FC = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((store) => store.feed);
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
        <section className={styles.order_section}>
          {orders && 
            <ul className={styles.order_list}>
                {orders?.map((item) => (
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