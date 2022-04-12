import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import React, { FC } from "react";
import styles from "../../styles/pages.module.css";
import { TParams, TIngredient } from "../../utils/types";

export const IngredientsPage: FC = () => {
  const params = useParams<TParams>();
  const id = params.ingredientId;
  const { burgerData } = useSelector((store: any) => store.burgerData);
  const currentIngredient = React.useMemo(
    () => burgerData.find((item: TIngredient) => item._id === id),
    [burgerData, id]
  );
  
  return (
    <main className={styles.page}>
      <h1 className="text text_type_main-medium">Детали ингредиента</h1>
      { currentIngredient && <IngredientDetails /> }
    </main>
  );
}
