import { React, useState, useEffect } from "react";
import { Link, useLocation, Redirect, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../../styles/pages.module.css";
import { logOut , updateUser} from "../../services/actions/authorization";

export function ProfilePage() {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { loggedIn, user } = useSelector((store) => store.auth);
  const [form, setValue] = useState({ email: "", password: "", name: "" });
  const location = useLocation();
  const [isChanged, setIsChanged] = useState(false);

  // const setValues = () => {
  //   setValue({ email: user.email, password: "", name: user.name });
  // };

  // useEffect(() => {
  //   setValues();
  // }, []);

  // useEffect(() => {
  //   setIsChanged(
  //     form.email !== user.email ||
  //       form.name !== user.name ||
  //       form.password
  //   );
  // }, [user, form]);

  // const onCancelClick = (e) => {
  //     e.preventDefault();
  //     setValues();
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(form));
  };
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logOut());
  };

  const handleChange = (e) => {
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
          Профиль
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
          История заказов
        </NavLink>
        <NavLink
          to="/logout"
          onClick={handleLogout}
          exact
          activeStyle={{ color: "white" }}
          className={
            styles.nav_item +
            "text text_type_main-medium mt-10 text_color_inactive"
          }
        >
          Выход
        </NavLink>
        <p className="text text_type_main-small text_color_inactive mt-20">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <form onSubmit={handleSubmit} className={styles.top_container}>
        <Input
          type={"text"}
          name={"name"}
          placeholder={"Имя"}
          onChange={handleChange}
          value={form.name}
          error={false}
          size={"default"}
        />
        <EmailInput
          onChange={handleChange}
          value={form.email}
          name={"email"}
          size={"default"}
        />
        <PasswordInput
          onChange={handleChange}
          value={form.password}
          name={"password"}
        />
      </form>
    </main>
  );
}
