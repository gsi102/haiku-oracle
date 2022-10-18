import Button from "../UI/Button/Button";
import {
  LANGUAGE,
  THEME_1_CODE,
  THEME_2_CODE,
  THEME_3_CODE,
} from "../../constants/CONST";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import React, { useEffect, useRef, useState } from "react";
import {
  useGetHaikuQuery,
  useLazyGetHaikuQuery,
} from "../../services/HaikuOracleService";
import { ThemeType } from "types/types";
import { setHaikuText, setTheme } from "../../store/reducers/commonSlice";

import styles from "./ChooseTheme.module.scss";
import mainStyles from "../../styles/mainStyles.module.scss";

const ChooseTheme: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.common.theme);
  let language = useAppSelector((state) => state.common.language);

  // const getHaiku = useGetHaikuQuery({ language, theme: currentTheme });
  const [lazyGetHaiku] = useLazyGetHaikuQuery();

  // @ts-ignore
  language = language.toUpperCase();
  // @ts-ignore
  const { CHOOSE_THEME, THEME_1, THEME_2, THEME_3 } = LANGUAGE[language];
  const keepLang = useRef(language);
  const [appear, setAppear] = useState("");

  useEffect(() => {
    if (appear === "" && keepLang.current !== language) {
      setAppear(mainStyles.appear);
      keepLang.current = language;
    }
  }, [language]);

  const onChoice = (theme: ThemeType) => {
    dispatch(setTheme({ data: theme }));

    lazyGetHaiku({
      language,
      theme,
    })
      .unwrap()
      .then((res) => {
        const haikuBody = res.responseBody;
        dispatch(setHaikuText({ data: haikuBody }));
      })
      .catch((rejected) => console.error(rejected));
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
