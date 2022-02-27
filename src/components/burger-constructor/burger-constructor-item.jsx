import React from "react";
import PropTypes from "prop-types";
import { ConstItemsPropTypes } from "../../utils/propTypes";
import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructorItem({ burgerItem }) {
  return (
    <div className={styles.const_item + " pt-4 pr-1"}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={burgerItem.name}
        price={burgerItem.price}
        thumbnail={burgerItem.image_mobile}
      />
    </div>
  );
}

BurgerConstructorItem.propTypes = {
  burgerItem: ConstItemsPropTypes.isRequired,
};

export default BurgerConstructorItem;
