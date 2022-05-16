import React, { FC } from "react";
import AppHeader from "../app-header/app-header";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-detail";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { useSelector, useDispatch } from "../../services/hooks";
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
import { FeedPage } from "../../pages/feed/feed";
import { OrderPage } from "../../pages/order/order";

const ModalSwitch: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation<TLocation>();
  const background = location.state && location.state.background;
  const { orderNumber } = useSelector((store) => store.order);

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
        <Route path={["/", "/react-burger"]} exact={true}>
          <MainPage />
        </Route>
        <ProtectedRoute path="/profile/orders/:id">
          <OrderPage />
        </ProtectedRoute>
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
        <Route path="/ingredients/:id">
          <IngredientsPage />
        </Route>
        <Route path="/feed" exact={true}>
          <FeedPage />
        </Route>
        <Route path="/feed/:id" exact={true}>
          <OrderPage />
        </Route>
        <Route path="*">
          <NotFoundPage history={history} />
        </Route>
      </Switch>
      {background && (
        <Route path="/ingredients/:id">
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
      {background && (
        <Route path="/feed/:id">
          <Modal header="Заказ" onClose={closeIngredientModalPopup}>
            <OrderPage />
          </Modal>
        </Route>
      )}
      {background && (
        <ProtectedRoute path="/profile/orders/:id">
          <Modal header="Заказ" onClose={closeIngredientModalPopup}>
            <OrderPage />
          </Modal>
        </ProtectedRoute>
      )}
    </div>
  );
};

export default ModalSwitch;
