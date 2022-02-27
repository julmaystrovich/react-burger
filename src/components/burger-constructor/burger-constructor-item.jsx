import React from "react";
import PropTypes from "prop-types";
import { ConstItemsPropTypes } from "../../utils/propTypes";
import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructorItem({ burger_item }) {
  return (
    <div className={styles.const_item + " pt-4 pr-1"}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={burger_item.name}
        price={burger_item.price}
        thumbnail={burger_item.image_mobile}
      />
    </div>
  );
}

BurgerConstructorItem.propTypes = {
  burger_item: ConstItemsPropTypes,
  onClick: PropTypes.func,
};

export default BurgerConstructorItem;
