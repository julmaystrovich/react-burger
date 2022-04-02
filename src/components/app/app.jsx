import React from "react";
//import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-detail";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { useSelector, useDispatch } from "react-redux";
import {
  getBurgerIngredients,
  closeIngredientModal,
} from "../../services/actions/ingredients";
import { closeOrderModal } from "../../services/actions/order";
import { Route, Switch, useHistory } from "react-router-dom";
import { NotFoundPage } from "../../pages/404-page/404";
import { RegisterPage } from "../../pages/register/register";
import { ResetPasswordPage } from "../../pages/reset-password/reset-password";
import { LoginPage } from "../../pages/login/login";
import { ForgotPasswordPage } from "../../pages/forgot-password/forgot-password";
import { MainPage } from "../../pages/main/main";
import { ProfilePage } from "../../pages/profile/profile";
import { OrdersPage } from "../../pages/profile-orders/profile-orders";
import ProtectedRoute from "../protected-route/protected-route";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();

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
      <Switch>
        <Route path="/" exact={true}>
          <MainPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/forgot-password">
          <ForgotPasswordPage />
        </Route>
        <Route path="/reset-password">
          <ResetPasswordPage />
        </Route>
        <ProtectedRoute path="/profile">
          <ProfilePage />
        </ProtectedRoute>
        <Route path="/profile/orders">
          <OrdersPage />
        </Route>
        <Route path="*">
          <NotFoundPage history={history} />
        </Route>
      </Switch>
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
