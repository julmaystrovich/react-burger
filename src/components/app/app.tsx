import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-detail';
import IngredientDetails from '../ingredient-details/ingredient-details';

function App() {
  const apiUrl = "https://norma.nomoreparties.space/api/ingredients";
  const [state, setState] = React.useState({
    burgerData: [],
    isModalOpen: false,
    isOrderModal: false,
    isIngrModal: false
  });
  const [currentIngredients, setCurrentIngredients] = useState("");


  React.useEffect(() => {
    fetch(apiUrl)
      .then((res) => {
        if (res.ok) {
          return res.json();
      } else {
          return Promise.reject("Error: " + res.status);
      }})
      .then((res) => {
        setState({...state, burgerData: res.data });
      })
      .catch((err) => console.log(err));
  }, [])

  function handleCloseModal() {
    setState({ ...state, isModalOpen: false, isIngrModal: false, isOrderModal: false });
  };

  function handleOpenIngrModal(id) {
    setState({ ...state, isModalOpen: true, isIngrModal: true });
    setCurrentIngredients(id);
  };

  function handleOpenOrderModal() {
    setState({ ...state, isModalOpen: true, isOrderModal: true });
  };

  return (
    <div className="App">
      <AppHeader />
      <main className={styles.main_section}>
        <BurgerIngredients burger_data={state.burgerData} action={handleOpenIngrModal} />
        <BurgerConstructor burger_data={state.burgerData} action={handleOpenOrderModal} />
      </main>
      {state.isModalOpen &&
          <Modal onClose={handleCloseModal} header={state.isIngrModal ? "Детали ингредиента" : ""}>
            { state.isIngrModal
              ? <IngredientDetails ingredient={currentIngredients} burger_data={state.burgerData} />
              : <OrderDetails />
            }
          </Modal>
      }
    </div>
  );
}

export default App;
