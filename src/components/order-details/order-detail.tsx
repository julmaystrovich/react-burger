import React, { FC } from "react";
import styles from "./order-details.module.css";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";

const OrderDetails: FC = () => {
  const { orderNumber } = useSelector((store: any) => store.order);
  return (
    <div className={styles.order_container + " pb-30 pt-6"}>
      <p className="text text_type_digits-large">{orderNumber}</p>
      <p className="text text_type_main-medium pt-8 pb-15">идентификатор заказа</p>
      <div className={styles.check_bg}>
        <CheckMarkIcon type="primary" />
      </div>
      <p className="text text_type_main-default pt-15 pb-2">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

export default OrderDetails;