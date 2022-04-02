import { React, useState } from "react";
import { Link, useLocation, Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Input,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../../styles/pages.module.css";
import { forgotPassword } from "../../services/actions/authorization";

export function ForgotPasswordPage() {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const history = useHistory();
  const { loggedIn } = useSelector((store) => store.auth);
  const [form, setValue] = useState({ email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(form.email));
    history.push({ pathname: '/reset-password', state: { prevPathname: history.location.pathname } });
  };

  const handleChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  if (loggedIn) {
    <Redirect to={{ pathname: '/' }} />
  }

  return (
   <main className={styles.page}>
    <p className="text text_type_main-medium pb-6">Восстановление пароля</p>
    <form onSubmit={handleSubmit} className={styles.container}>
      <EmailInput
        onChange={handleChange}
        value={form.email}
        name={"email"}
        size={"default"}
        className="pt-6"
      />
      <Button type="primary" size="medium">
        Восстановить
      </Button>
    </form>
    <p className="text text_type_main-default text_color_inactive mt-20">
      Вспомнили пароль? {" "}
      <Link
        to="/login"
        className={styles.link + " text text_type_main-default"}
      >
        Войти
      </Link>
    </p>
  </main>
  )
}
