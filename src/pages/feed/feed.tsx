import React, { FC } from "react";
import styles from "./feed.module.css";
import OrdersTable from "../../components/orders-table/orders-table";
import OrdersList from "../../components/orders-list/orders-list";

export const FeedPage: FC = () => {
  return (
    <main className={styles.feed_section}>
      <p className="text text_type_main-large mt-10 mb-5">Лента заказов</p>
      <div className={styles.feed_wrapper}>
        <OrdersList />
        <OrdersTable />
      </div>
    </main>
  );
};
