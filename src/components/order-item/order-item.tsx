import React, { FC } from "react";
import styles from "./order-item.module.css";
import { TOrderItem } from "../../utils/types";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const OrderItem: FC<TOrderItem> = ({name, ingredient, image, currentOrder}) => {
    const count = currentOrder?.ingredients.filter((item) => item === ingredient._id).length;
    return (
        <div className={styles.order_item + " pb-4"}>
            <div className={styles.container}>
                <img className={styles.i_image + " ml-1 mt-1"} src={image} alt={name}/>
                <p className="text text_type_main-medium ml-4 pt-5 pb-5">{name}</p>
            </div>
            <div className={styles.pricing + " ml-4 pt-5 pb-5"}>
                <p className={styles.order_number + " text text_type_digits-default"}>{count}</p>
                &nbsp;
                <span className={styles.order_span + " text text_type_main-medium"}>x</span>
                &nbsp;
                <p className={styles.order_number + " text text_type_digits-default"}>{ingredient.price}</p> 
                &nbsp;
                <CurrencyIcon type="primary" />
            </div>
        </div>
    )
}

export default OrderItem;