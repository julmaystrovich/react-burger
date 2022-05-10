import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import { useSelector } from "../../services/hooks";
import { useParams } from "react-router-dom";
import React, { FC } from "react";
import styles from "../../styles/pages.module.css";
import { TParams } from "../../utils/types";

export const IngredientsPage: FC = () => {
  const params = useParams<TParams>();
  const id = params.id;
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
