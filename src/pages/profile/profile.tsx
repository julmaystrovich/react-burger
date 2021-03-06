import React, { useState, useEffect, FC } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "../../services/hooks";
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../../styles/pages.module.css";
import { logOut, updateUser } from "../../services/actions/authorization";
import { TForm } from "../../utils/types";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import OrdersList from "../../components/orders-list/orders-list";

export const ProfilePage: FC = () => {
  const dispatch = useDispatch();
  const { loggedIn, user } = useSelector((store) => store.auth);
  const [form, setValue] = useState<TForm>({
    email: "",
    password: "",
    name: "",
  });
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const { path } = useRouteMatch();
  const profilePageMatch = useRouteMatch("/profile");
  const profileOrdersPageMatch = useRouteMatch("/profile/orders");

  const setValues = () => {
    setValue({ email: user!.email, password: "", name: user!.name });
  };

  useEffect(() => {
    setValues();
  }, []);

  useEffect(() => {
    setIsChanged(
      form.email !== user!.email ||
        form.name !== user!.name ||
        form.password !== ""
    );
  }, [user, form]);

  const onCancel = () => {
    setValues();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateUser(form.email, form.name));
  };
  const handleLogout = () => {
    dispatch(logOut());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <main className={styles.profile_page}>
      <div className={styles.nav_container}>
        <NavLink
          to="/profile"
          exact
          activeStyle={{ color: "white" }}
          className={
            styles.nav_item +
            " text text_type_main-medium mt-5 text_color_inactive"
          }
        >
          ??????????????
        </NavLink>
        <NavLink
          to="/profile/orders"
          exact
          activeStyle={{ color: "white" }}
          className={
            styles.nav_item +
            "text text_type_main-medium mt-10 text_color_inactive"
          }
        >
          ?????????????? ??????????????
        </NavLink>
        <NavLink
          to="/"
          onClick={handleLogout}
          exact
          activeStyle={{ color: "white" }}
          className={
            styles.nav_item +
            "text text_type_main-medium mt-10 text_color_inactive"
          }
        >
          ??????????
        </NavLink>
        {profilePageMatch?.isExact && (
          <p className="text text_type_main-small text_color_inactive mt-20">
            ?? ???????? ?????????????? ???? ???????????? ???????????????? ???????? ???????????????????????? ????????????
          </p>
        )}
        {profileOrdersPageMatch?.isExact && (
          <p className="text text_type_main-small text_color_inactive mt-20">
            ?? ???????? ?????????????? ???? ???????????? ???????????????????? ???????? ????????????
          </p>
        )}
      </div>
      <Switch>
        <Route path={`${path}`} exact={true}>
          <form onSubmit={handleSubmit} className={styles.top_container}>
            <Input
              type={"text"}
              name={"name"}
              placeholder={"??????"}
              onChange={handleChange}
              value={`${form.name}`}
              error={false}
              size={"default"}
            />
            <EmailInput
              onChange={handleChange}
              value={`${form.email}`}
              name={"email"}
              size={"default"}
            />
            <PasswordInput
              onChange={handleChange}
              value={`${form.password}`}
              name={"password"}
            />
            {isChanged && (
              <div className={styles.profile_buttons + " mt-6"}>
                <Button type="secondary" size="medium" onClick={onCancel}>
                  ????????????????
                </Button>
                <Button type="primary" size="medium">
                  ??????????????????
                </Button>
              </div>
            )}
          </form>
        </Route>
        <Route path={`${path}/orders`}>
          <OrdersList />
        </Route>
      </Switch>
    </main>
  );
};
