import { FC, useMemo } from "react";
import styles from "./orders-table.module.css";
import { useSelector } from "../../services/hooks";

const OrdersTable: FC = () => {
const { total, totalToday, orders } = useSelector((store) => store.feed);
const pendingOrders = useMemo(() => orders?.filter((item) => item.status === "pending").slice(0, 10), [orders]);
const doneOrders = useMemo(() => orders?.filter((item) => item.status === "done").slice(0, 10), [orders]);
  return (
    <section className={styles.order_section}>
      <div className={styles.table_section + " mb-15"}>
        <div className={styles.table_item}>
          <p className="text text_type_main-medium mb-6">Готовы:</p>
          <ul className={styles.list}>
            {doneOrders?.map((order) => (
                <li className={styles.order_done + " text text_type_digits-default"} key={order._id}>{order.number}</li>
            ))}
          </ul>
        </div>
        <div className={styles.table_item}>
          <p className="text text_type_main-medium mb-6">В работе:</p>
          <ul className={styles.list}>
            {pendingOrders?.map((order) => (
                <li className="text text_type_digits-default" key={order._id}>{order.number}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mb-15">
        <p className="text text_type_main-medium">Выполнено за все время:</p>
        <p className="text text_type_digits-large">{total}</p>
      </div>
      <div>
        <p className="text text_type_main-medium">Выполнено за сегодня:</p>
        <p className="text text_type_digits-large">{totalToday}</p>
      </div>
    </section>
  );
};

export default OrdersTable;
