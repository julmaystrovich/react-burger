import React from "react";
import styles from "./ingredient-details.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function IngredientDetails() {
  const { burgerData } = useSelector((store) => store.burgerData);
  const params = useParams();
  const id = params.ingredientId;
  const currentIngredient = React.useMemo(
    () => burgerData.find((item) => item._id === id),
    [burgerData, id]
  );
  
  return (
    <>
      { currentIngredient && 
        <div className={styles.ingr_container + " pb-15"}>
          <img
            className={styles.image}
            src={currentIngredient.image_large}
            alt={currentIngredient.name}
          />
          <p className="text_type_main-medium mb-8 mt-4">
            {currentIngredient.name}
          </p>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              <p className="text text_type_main-default text_color_inactive">
                Калории, ккал
              </p>
              <p className="text text_type_digits-default text_color_inactive">
                {currentIngredient.calories}
              </p>
            </li>
            <li className={styles.list_item}>
              <p className="text text_type_main-default text_color_inactive">
                Белки, г
              </p>
              <p className="text text_type_digits-default text_color_inactive">
                {currentIngredient.proteins}
              </p>
            </li>
            <li className={styles.list_item}>
              <p className="text text_type_main-default text_color_inactive">
                Жиры, г
              </p>
              <p className="text text_type_digits-default text_color_inactive">
                {currentIngredient.fat}
              </p>
            </li>
            <li className={styles.list_item}>
              <p className="text text_type_main-default text_color_inactive">
                Углеводы, г
              </p>
              <p className="text text_type_digits-default text_color_inactive">
                {currentIngredient.carbohydrates}
              </p>
            </li>
          </ul>
        </div>
      }
    </>
  );
}

export default IngredientDetails;
