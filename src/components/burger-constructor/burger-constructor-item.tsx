import React, { FC } from 'react';
import { TBurgerConstructorComponent, TIngredient } from "../../utils/types";
import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrop, useDrag } from "react-dnd";

const BurgerConstructorItem: FC<TBurgerConstructorComponent> = ({ burgerItem, onDelete, index, onMove }) => {
  const ref = React.useRef<HTMLDivElement>(null);
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
    hover(item: any, monitor) {
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

      const hoverClientY = (clientOffset?.y ?? 0) - hoverBoundingRect.top;

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

export default BurgerConstructorItem;
