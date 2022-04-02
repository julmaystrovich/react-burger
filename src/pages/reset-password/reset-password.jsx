import { React, useState } from "react";
import { Link, useLocation, Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../../styles/pages.module.css";
import { resetPassword } from "../../services/actions/authorization";

export function ResetPasswordPage() {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const history = useHistory();
  const { loggedIn, resetPasswordFailed } = useSelector((store) => store.auth);
  const [form, setValue] = useState({ password: "", token: "" });
  const prevPathname = history.location.state?.prevPathname;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword(form));
    if (!resetPasswordFailed) {
      history.replace({ pathname: "/login" });
    }
  };

  const handleChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  if (loggedIn) {
    return <Redirect to={state?.from || "/"} />;
  }

  if (!prevPathname) {
    return (
        <Redirect to={'/login'} />
    );
}

  return (
    <main className={styles.page}>
      <p className="text text_type_main-medium pb-6">Восстановление пароля</p>
      <form onSubmit={handleSubmit} className={styles.container}>
        <PasswordInput
          onChange={handleChange}
          value={form.password}
          name={"password"}
          placeholder={"Введите новый пароль"}
        />
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          onChange={handleChange}
          name="token"
          value={form.token}
          size={"default"}
        />
        <Button type="primary" size="medium">
          Сохранить
        </Button>
      </form>
      <p className="text text_type_main-default text_color_inactive mt-20">
        Вспомнили пароль?{" "}
        <Link
          to="/login"
          className={styles.link + " text text_type_main-default"}
        >
          Войти
        </Link>
      </p>
    </main>
  );
}
