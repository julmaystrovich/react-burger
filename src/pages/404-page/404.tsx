import styles from "./404-page.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Empty from "../../images/empty.png";
import { FC } from "react";

export const NotFoundPage: FC<any> = ({ history }) => {
  function handleBack() {
    history.goBack();
  }
  
  return (
    <main className={styles.error_page}>
        <img src={Empty} className={styles.error_pic} alt="empty burger store" />
      <p className="text text_type_main-large mt-6">Ошибка</p>
      <p className="text text_type_digits-large mt-6">404</p>
      <p className="text text_type_main-medium mt-6 mb-6">
        Кажется, вы нажали неверную ссылку или ввели адрес, которого нет на этом
        сайте.
      </p>
      <Button type="primary" size="large" onClick={() => handleBack()}>
        Назад
      </Button>
    </main>
  );
}