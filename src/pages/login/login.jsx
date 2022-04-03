import { React, useState } from "react";
import { Link, useLocation, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../../styles/pages.module.css";
import { logIn } from "../../services/actions/authorization";

export function LoginPage() {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { loggedIn } = useSelector((store) => store.auth);
  const [form, setValue] = useState({ email: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(form.email, form.password));
  };

  const handleChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  if (loggedIn) {
    return <Redirect to={state?.from || "/"} />;
  }

  return (
    <main className={styles.page}>
      <p className="text text_type_main-medium pb-6">Вход</p>
      <form onSubmit={handleSubmit} className={styles.container}>
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
        <Button type="primary" size="medium">
          Войти
        </Button>
      </form>
      <p className="text text_type_main-default text_color_inactive mt-20">
        Вы - новый пользователь?{" "}
        <Link
          to="/register"
          className={styles.link + " text text_type_main-default"}
        >
          Зарегистрироваться
        </Link>
      </p>
      <p className="text text_type_main-default text_color_inactive mt-4">
        Забыли пароль?{" "}
        <Link
          to="/forgot-password"
          className={styles.link + " text text_type_main-default"}
        >
          Восстановить пароль
        </Link>
      </p>
    </main>
  );
}
