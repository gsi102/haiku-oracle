import Button from "components/UI/Button/Button";
import {
  LANGUAGE,
  THEME_1_CODE,
  THEME_2_CODE,
  THEME_3_CODE,
} from "constants/CONST";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import React, { useEffect, useRef, useState } from "react";
import { ThemeType } from "types/types";
import { setTheme } from "../../store/reducers/commonSlice";

import styles from "./ChooseTheme.module.scss";

const ChooseTheme: React.FC = () => {
  const dispatch = useAppDispatch();

  let language = useAppSelector((state) => state.common.language);
  // @ts-ignore
  language = language.toUpperCase();
  // @ts-ignore
  const { CHOOSE_THEME, THEME_1, THEME_2, THEME_3 } = LANGUAGE[language];
  const keepLang = useRef(language);
  const [appear, setAppear] = useState("");

  useEffect(() => {
    if (appear === "" && keepLang.current !== language) {
      setAppear(styles.appear);
      keepLang.current = language;
    }
  }, [language]);

  const onChoice = (theme: ThemeType) => {
    dispatch(setTheme({ data: theme }));
  };

  return (
    <div className={styles.chooseTheme + " " + appear}>
      <span>{CHOOSE_THEME}</span>
      <div className={styles.chooseTheme__choice}>
        <Button
          className={styles.chooseTheme__choice__button}
          onClick={() => {
            onChoice(THEME_1_CODE);
          }}
        >
          {THEME_1}
        </Button>
        <Button
          className={styles.chooseTheme__choice__button}
          onClick={() => {
            onChoice(THEME_2_CODE);
          }}
        >
          {THEME_2}
        </Button>
        <Button
          className={styles.chooseTheme__choice__button}
          onClick={() => {
            onChoice(THEME_3_CODE);
          }}
        >
          {THEME_3}
        </Button>
      </div>
    </div>
  );
};

export default ChooseTheme;
