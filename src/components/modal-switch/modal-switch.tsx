import React, { FC } from "react";
import AppHeader from "../app-header/app-header";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-detail";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { useSelector, useDispatch } from "react-redux";
import { closeOrderModal } from "../../services/actions/order";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { NotFoundPage } from "../../pages/404-page/404";
import { RegisterPage } from "../../pages/register/register";
import { ResetPasswordPage } from "../../pages/reset-password/reset-password";
import { LoginPage } from "../../pages/login/login";
import { ForgotPasswordPage } from "../../pages/forgot-password/forgot-password";
import { MainPage } from "../../pages/main/main";
import { ProfilePage } from "../../pages/profile/profile";
import ProtectedRoute from "../protected-route/protected-route";
import { IngredientsPage } from "../../pages/ingredients/ingredients-list";
import { TLocation } from "../../utils/types";

const ModalSwitch: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation<TLocation>();
  const background = location.state && location.state.background;
  const { orderNumber } = useSelector((store: any) => store.order);

  const closeIngredientModalPopup = () => {
    history.goBack();
  };

  const closeOrderModalPopup = () => {
    dispatch(closeOrderModal());
  };

  return (
    <div className="App">
      <AppHeader />
      <Switch location={background || location}>
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
        <Route path="/ingredients/:ingredientId">
          <IngredientsPage />
        </Route>
        <Route path="*">
          <NotFoundPage history={history} />
        </Route>
      </Switch>
      {background && (
        <Route path="/ingredients/:ingredientId">
          <Modal
            header="Детали ингредиента"
            onClose={closeIngredientModalPopup}
          >
            <IngredientDetails />
          </Modal>
        </Route>
      )}
      {orderNumber && (
        <Modal header="" onClose={closeOrderModalPopup}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}

export default ModalSwitch;
