import React, { useState, FC } from "react";
import { Link, useLocation, Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../../styles/pages.module.css";
import { resetPassword } from "../../services/actions/authorization";
import { TLocation,TForm } from "../../utils/types";

export const ResetPasswordPage: FC = () => {
  const dispatch = useDispatch();
  const { state } = useLocation<TLocation>();
  const history = useHistory() as any;
  const { loggedIn, resetPasswordFailed, resetPasswordSuccess } = useSelector((store: any) => store.auth);
  const [form, setValue] = useState<TForm>({ password: "", token: "" });
  const prevPathname = history.location.state?.prevPathname;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(resetPassword(form.password, form.token));
    if (!resetPasswordFailed) {
      window.setTimeout(() => {
        history.push({ pathname: '/login' });
     }, 5000)
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          value={`${form.password}`}
          name={"password"}
        />
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          onChange={handleChange}
          name="token"
          value={`${form.token}`}
          size={"default"}
        />
        <Button type="primary" size="medium">
          Сохранить
        </Button>
      </form>
      {resetPasswordSuccess && <p className="text text_type_main-default mt-10">Пароль успешно изменен. Перенаправляем на страницу входа...</p>}
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