import React from "react";
import { tg } from "../../App";

import styles from "./ChooseLanguage.module.scss";
import mainStyles from "../../styles/mainStyles.module.scss";
import { useEffect } from "react";
import { useState } from "react";

const CLOSE_BUTTON_STYLE =
  mainStyles.chooseLanguage__button + " " + styles.chooseLanguage__closeButton;

const CHOICE_BUTTON_STYLE =
  mainStyles.button + " " + styles.chooseLanguage__choice__button;

const ChooseLanguage: React.FC = () => {
  const [appear, setAppear] = useState("");
  // const dispatch = useAppDispatch();

  useEffect(() => {
    setAppear(styles.appear);
    return () => {
      setAppear("");
    };
  }, []);

  const onChoice = (langType: string) => {};

  // const onClose = () => {
  //   tg.close();
  // };

  return (
    <div className={styles.chooseLanguage + " " + appear}>
      <span className={styles.chooseLanguage__header}>{"\uD83D\uDCAD"}</span>
      <div className={styles.chooseLanguage__choice}>
        <button
          className={CHOICE_BUTTON_STYLE}
          onClick={() => {
            onChoice("en");
          }}
        >
          {"\uD83C\uDDEC\uD83C\uDDE7 English"}
        </button>
        <button
          className={CHOICE_BUTTON_STYLE}
          onClick={() => {
            onChoice("ru");
          }}
        >
          {"\uD83C\uDDF7\uD83C\uDDFA Русский"}
        </button>
        <button
          className={CHOICE_BUTTON_STYLE}
          onClick={() => {
            onChoice("kz");
          }}
        >
          {"\uD83C\uDDF0\uD83C\uDDFF Қазақша"}
        </button>
      </div>
    </div>
  );
};

export default ChooseLanguage;
