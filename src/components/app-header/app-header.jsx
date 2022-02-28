import React from "react";
import styles from "./app-header.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

export default function AppHeader() {
  return (
    <header>
      <nav>
        <a className={styles.nav_link + " pr-5 pl-5 pt-4 pb-4 mr-2"}>
          <BurgerIcon type="primary" />
          <p className="text text_type_main-default pl-2">Конструктор</p>
        </a>
        <a className={styles.nav_link + " pr-5 pl-5 pt-4 pb-4"}>
          <ListIcon type="secondary" />
          <p className="text text_type_main-default text_color_inactive pl-2">
            Лента заказов
          </p>
        </a>
      </nav>
      <Logo />
      <a className={styles.nav_link + " pr-5 pl-5 pt-4 pb-4"}>
        <ProfileIcon type="secondary" />
        <p className="text text_type_main-default text_color_inactive pl-2">
          Личный кабинет
        </p>
      </a>
    </header>
  );
}
