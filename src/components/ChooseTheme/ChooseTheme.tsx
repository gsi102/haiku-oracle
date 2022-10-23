import Button from "../UI/Button/Button";
import {
  LANGUAGE,
  THEME_1_CODE,
  THEME_2_CODE,
  THEME_3_CODE,
} from "../../constants/CONST";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useLazyGetHaikuQuery } from "../../services/HaikuOracleService";
import { ThemeType } from "types/types";
import { setHaiku, setTheme } from "../../store/reducers/commonSlice";
import Preloader from "../UI/Preloader/Preloader";

import styles from "./ChooseTheme.module.scss";
import mainStyles from "../../styles/mainStyles.module.scss";

const ChooseTheme: React.FC = () => {
  const dispatch = useAppDispatch();
  let language = useAppSelector((state) => state.common.language);

  const [lazyGetHaiku] = useLazyGetHaikuQuery();

  // @ts-ignore
  language = language.toUpperCase();
  // @ts-ignore
  const { CHOOSE_THEME, THEME_1, THEME_2, THEME_3 } = LANGUAGE[language];
  const keepLang = useRef(language);
  const [appear, setAppear] = useState("");
  const [activeTh1, setActiveTh1] = useState("");
  const [activeTh2, setActiveTh2] = useState("");
  const [activeTh3, setActiveTh3] = useState("");
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    if (appear === "" && keepLang.current !== language) {
      setAppear(mainStyles.appear);
      keepLang.current = language;
    }

    return () => {
      setActiveTh1("");
      setActiveTh2("");
      setActiveTh3("");
    };
  }, [language]);

  const onChoice = useCallback(
    (theme: ThemeType) => {
      setShowPreloader(true);
      dispatch(setHaiku({ data: { text: "", author: "" } }));
      dispatch(setTheme({ data: theme }));

      if (theme === THEME_1_CODE) {
        setActiveTh1(styles.active);
        setActiveTh2("");
        setActiveTh3("");
      }

      if (theme === THEME_2_CODE) {
        setActiveTh1("");
        setActiveTh2(styles.active);
        setActiveTh3("");
      }

      if (theme === THEME_3_CODE) {
        setActiveTh1("");
        setActiveTh2("");
        setActiveTh3(styles.active);
      }

      lazyGetHaiku({
        language,
        theme,
      })
        .unwrap()
        .then((res) => {
          const haikuBody = res.data.text;
          const haikuAuthor = res.data.author;
          const haikuYears = res.data.years;
          setShowPreloader(false);
          dispatch(
            setHaiku({
              data: { text: haikuBody, author: haikuAuthor, years: haikuYears },
            })
          );
        })
        .catch((rejected) => console.error(rejected));
    },
    [language]
  );

  return (
    <div className={styles.chooseTheme + " " + appear}>
      <span className={styles.chooseTheme__header}>{CHOOSE_THEME}</span>
      <div className={styles.chooseTheme__choice}>
        <div className={styles.chooseTheme__choice__btnWrapper}>
          <div
            className={styles.chooseTheme__choice__btnWrapper__btnBackground}
          />
          <Button
            className={styles.chooseTheme__choice__button + " " + activeTh1}
            onClick={() => {
              onChoice(THEME_1_CODE);
            }}
          >
            {THEME_1}
          </Button>
        </div>
        <div className={styles.chooseTheme__choice__btnWrapper}>
          <div
            className={styles.chooseTheme__choice__btnWrapper__btnBackground}
          />
          <Button
            className={styles.chooseTheme__choice__button + " " + activeTh2}
            onClick={() => {
              onChoice(THEME_2_CODE);
            }}
          >
            {THEME_2}
          </Button>
        </div>
        <div className={styles.chooseTheme__choice__btnWrapper}>
          <div
            className={styles.chooseTheme__choice__btnWrapper__btnBackground}
          />
          <Button
            className={styles.chooseTheme__choice__button + " " + activeTh3}
            onClick={() => {
              onChoice(THEME_3_CODE);
            }}
          >
            {THEME_3}
          </Button>
        </div>
      </div>
      <div className={styles.chooseTheme__preloaderWrapper}>
        {showPreloader && <Preloader />}
      </div>
    </div>
  );
};

export default ChooseTheme;
