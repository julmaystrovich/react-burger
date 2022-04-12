import React, { useState, FC } from "react";
import { Link, useLocation, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../../styles/pages.module.css";
import { register } from "../../services/actions/authorization";
import { TLocation, TForm } from "../../utils/types";

export const RegisterPage: FC = () => {
  const dispatch = useDispatch();
  const { state } = useLocation<TLocation>();
  const { loggedIn } = useSelector((store: any) => store.auth);
  const [form, setValue] = useState<TForm>({ email: "", password: "", name: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(register(form.email, form.password, form.name));
    console.log(form.email, form.password, form.name);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  if (loggedIn) {
    return <Redirect to={state?.from || "/"} />;
  }
  return (
    <main className={styles.page}>
      <p className="text text_type_main-medium pb-6">Регистрация</p>
      <form onSubmit={handleSubmit} className={styles.container}>
        <Input
          type={"text"}
          name={"name"}
          placeholder={"Имя"}
          onChange={handleChange}
          value={`${form.name}`}
          error={false}
          size={"default"}
        />
        <EmailInput onChange={handleChange} value={`${form.email}`} name={'email'} />
        <PasswordInput
          onChange={handleChange}
          value={`${form.password}`}
          name={"password"}
        />
        <Button type="primary" size="medium">
          Зарегистрироваться
        </Button>
      </form>
      <p className="text text_type_main-default text_color_inactive mt-20">
        Уже зарегистрированы?{" "}
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