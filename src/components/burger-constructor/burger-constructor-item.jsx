import React from "react";
import PropTypes from "prop-types";
import { ConstItemsPropTypes } from "../../utils/propTypes";
import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrop, useDrag } from "react-dnd";
import { useDispatch } from "react-redux";

function BurgerConstructorItem({ burgerItem, onDelete, index, onMove }) {
  const ref = React.useRef(null);
  const dispatch = useDispatch();
  const [, dragRef] = useDrag({
    type: "constructor",
    item: () => {
      return { index };
    },
  });

  const [{ handlerId }, dropTarget] = useDrop({
    accept: "constructor",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      onMove(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  dragRef(dropTarget(ref));

  return (
    <div
      className={styles.const_item + " pt-4 pr-1"}
      ref={ref}
      data-handler-id={handlerId}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={burgerItem.name}
        price={burgerItem.price}
        thumbnail={burgerItem.image_mobile}
        handleClose={() => onDelete(burgerItem.uuid)}
      />
    </div>
  );
}

BurgerConstructorItem.propTypes = {
  burgerItem: ConstItemsPropTypes.isRequired,
  onDelete: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  onMove: PropTypes.func.isRequired,
};

export default BurgerConstructorItem;
