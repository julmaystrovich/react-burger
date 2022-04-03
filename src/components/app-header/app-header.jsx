import React from "react";
import styles from "./app-header.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, NavLink, useRouteMatch } from "react-router-dom";

export default function AppHeader() {
  const homeMatch = useRouteMatch("/");
  const profileMatch = useRouteMatch("/profile");

  return (
    <header>
      <nav>
        <NavLink
          exact
          to="/"
          className={styles.nav_link + " pr-5 pl-5 pt-4 pb-4 mr-2"}
          activeClassName={styles.nav_link_active + " pr-5 pl-5 pt-4 pb-4 mr-2"}
        >
          <BurgerIcon type={homeMatch.isExact ? "primary" : "secondary"} />
          <p className="text text_type_main-default pl-2">Конструктор</p>
        </NavLink>
        <a className={styles.nav_link + " pr-5 pl-5 pt-4 pb-4"}>
          <ListIcon type="secondary" />
          <p className="text text_type_main-default text_color_inactive pl-2">
            Лента заказов
          </p>
        </a>
      </nav>
      <Link to="/">
        <Logo />
      </Link>
      <NavLink
          to="/profile"
          className={styles.nav_link + " pr-5 pl-5 pt-4 pb-4"}
          activeClassName={styles.nav_link_active + " pr-5 pl-5 pt-4 pb-4"}
        >
          <ProfileIcon type={profileMatch ? "primary" : "secondary"} />
          <p className="text text_type_main-default pl-2">
          Личный кабинет
        </p>
        </NavLink>
    </header>
  );
}
