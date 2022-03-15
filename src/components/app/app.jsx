import React from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-detail";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { useSelector, useDispatch } from "react-redux";
import {
  getBurgerIngredients,
  closeIngredientModal,
} from "../../services/actions/ingredients";
import { closeOrderModal } from "../../services/actions/order";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getBurgerIngredients());
  }, []);

  const closeIngredientModalPopup = () => {
    dispatch(closeIngredientModal());
  };

  const closeOrderModalPopup = () => {
    dispatch(closeOrderModal());
  };

  const { currentIngredient } = useSelector((store) => store.burgerData);
  const { orderNumber } = useSelector((store) => store.order);

  return (
    <div className="App">
      <AppHeader />
      <main className={styles.main_section}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      </main>
      {currentIngredient && (
        <Modal header="Детали ингредиента" onClose={closeIngredientModalPopup}>
          <IngredientDetails />
        </Modal>
      )}
      {orderNumber && (
        <Modal header="" onClose={closeOrderModalPopup}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}

export default App;
