import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-detail';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { getBurgerData } from '../../utils/connectAPI';
import { BurgerIngredientsContext } from "../../utils/ingredientsContext";

function App() {
  const [currentIngredients, setCurrentIngredients] = useState("");
  const [burgerData, setBurgerData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOrderModal, setIsOrderModal] = useState(false);
  const [isIngrModal, setIsIngrModal] = useState(false);

  React.useEffect(() => {
    getBurgerData()
    .then((res) => {
      setBurgerData(res.data);
    })
    .catch((err) => console.log(err));
}, [])

  function handleCloseModal() {
    setIsModalOpen(false);
    setIsOrderModal(false);
    setIsIngrModal(false);
  };

  function handleOpenIngrModal(id) {
    setIsModalOpen(true);
    setIsIngrModal(true);
    setCurrentIngredients(id);
  };

  function handleOpenOrderModal() {
    setIsModalOpen(true);
    setIsOrderModal(true);
  };

  return (
    <div className="App">
      <AppHeader />
      <BurgerIngredientsContext.Provider value={{burgerData}}>
      <main className={styles.main_section}>
        <BurgerIngredients burgerData={burgerData} action={handleOpenIngrModal} />
        <BurgerConstructor burgerData={burgerData} action={handleOpenOrderModal} />
      </main>
      </BurgerIngredientsContext.Provider>
      {isModalOpen &&
          <Modal onClose={handleCloseModal} header={isIngrModal ? "Детали ингредиента" : ""}>
            {isIngrModal
              ? <IngredientDetails ingredient={currentIngredients} burgerData={burgerData} />
              : <OrderDetails />
            }
          </Modal>
      }
    </div>
  );
}

export default App;
