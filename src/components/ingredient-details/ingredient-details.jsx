import React from "react";
import styles from "./ingredient-details.module.css";
import { useSelector } from "react-redux";

function IngredientDetails() {
  const { name, image_large, calories, proteins, fat, carbohydrates } =
    useSelector((store) => store.burgerData.currentIngredient);

  return (
    <>
      <div className={styles.ingr_container + " pb-15"}>
        <img className={styles.image} src={image_large} alt={name} />
        <p className="text_type_main-medium mb-8 mt-4">{name}</p>
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <p className="text text_type_main-default text_color_inactive">
              Калории, ккал
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {calories}
            </p>
          </li>
          <li className={styles.list_item}>
            <p className="text text_type_main-default text_color_inactive">
              Белки, г
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {proteins}
            </p>
          </li>
          <li className={styles.list_item}>
            <p className="text text_type_main-default text_color_inactive">
              Жиры, г
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {fat}
            </p>
          </li>
          <li className={styles.list_item}>
            <p className="text text_type_main-default text_color_inactive">
              Углеводы, г
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {carbohydrates}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default IngredientDetails;