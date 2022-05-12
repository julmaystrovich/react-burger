import React, { useState, FC } from "react";
import { Link, useLocation, Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "../../services/hooks";
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../../styles/pages.module.css";
import { forgotPassword } from "../../services/actions/authorization";
import { TLocation, TForm } from "../../utils/types";

export const ForgotPasswordPage: FC = () => {
  const dispatch = useDispatch();
  const { state } = useLocation<TLocation>();
  const history = useHistory();
  const { loggedIn } = useSelector((store) => store.auth);
  const [form, setValue] = useState<TForm>({ email: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(forgotPassword(form.email));
    history.push({ pathname: '/reset-password', state: { prevPathname: history.location.pathname } });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  if (loggedIn) {
    return <Redirect to={state?.from || "/"} />;
  }

  return (
   <main className={styles.page}>
    <p className="text text_type_main-medium pb-6">Восстановление пароля</p>
    <form onSubmit={handleSubmit} className={styles.container}>
      <EmailInput
        onChange={handleChange}
        value={`${form.email}`}
        name={"email"}
        size={"default"}
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