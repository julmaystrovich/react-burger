import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import React from "react";
import styles from "../../styles/pages.module.css";

export function IngredientsPage() {
  const params = useParams();
  const id = params.ingredientId;
  const { burgerData } = useSelector((store) => store.burgerData);
  const currentIngredient = React.useMemo(
    () => burgerData.find((item) => item._id === id),
    [burgerData, id]
  );
  
  return (
    <main className={styles.page}>
      <h1 className="text text_type_main-medium">Детали ингредиента</h1>
      { currentIngredient && <IngredientDetails /> }
    </main>
  );
}
