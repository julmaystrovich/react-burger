import React from "react";
import styles from './ingredient-details.module.css';
import { IngredientsPropTypes } from "../../utils/propTypes";
import PropTypes from "prop-types";

function IngredientDetails({ ingredient, burgerData }) {
    const ingredientItem = burgerData.filter((item) => item._id === ingredient);
    return(
        <>
        {ingredientItem.map((item) => {
            return(
        <div className={styles.ingr_container + " pb-15"} key={item._id}>
            <img className={styles.image} src={item.image_large} alt={item.name} />
            <p className="text_type_main-medium mb-8 mt-4">{item.name}</p>
            <ul className={styles.list}>
                <li className={styles.list_item}>
                    <p className="text text_type_main-default text_color_inactive">Калории, ккал</p>
                    <p className="text text_type_digits-default text_color_inactive">{item.calories}</p>
                </li>
                <li className={styles.list_item}>
                    <p className="text text_type_main-default text_color_inactive">Белки, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{item.proteins}</p>
                </li>
                <li className={styles.list_item}>
                    <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{item.fat}</p>
                </li>
                <li className={styles.list_item}>
                    <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{item.carbohydrates}</p>
                </li>
            </ul>
        </div>)
        })}
        </>
    )
}

IngredientDetails.propTypes = {
    burgerData: IngredientsPropTypes.isRequired,
    ingredient: PropTypes.string.isRequired
};

export default IngredientDetails;