import React, { useState, useEffect } from "react";
import { LanguageType } from "types/types";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { setHaiku, setLanguage } from "../../store/reducers/commonSlice";
import { LANGUAGE, RU_CODE, EN_CODE } from "../../constants/CONST";
import Button from "../UI/Button/Button";

import mainStyles from "../../styles/mainStyles.module.scss";
import styles from "./ChooseLanguage.module.scss";

const CLOSE_BUTTON_STYLE =
  mainStyles.chooseLanguage__button + " " + styles.chooseLanguage__closeButton;

const CHOICE_BUTTON_STYLE =
  mainStyles.button + " " + styles.chooseLanguage__choice__button;

const RU_NAME = LANGUAGE.RU.LANGUAGE_NAME;
const EN_NAME = LANGUAGE.EN.LANGUAGE_NAME;

const ChooseLanguage: React.FC = () => {
  const haikuText = useAppSelector((state) => state.common.haikuText);

  const [appear, setAppear] = useState("");
  const [activeEN, setActiveEN] = useState("");
  const [activeRU, setActiveRU] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    setAppear(mainStyles.appear);
    return () => {
      setAppear("");
    };
  }, []);

  const onChoice = (langType: LanguageType) => {
    dispatch(setLanguage({ data: langType }));
    if (haikuText) {
      dispatch(
        setHaiku({
          data: { text: "", author: "", years: "" },
        })
      );
    }

    if (langType === EN_CODE) {
      setActiveRU("");
      return setActiveEN(styles.active);
    }

    if (langType === RU_CODE) {
      setActiveRU(styles.active);
      return setActiveEN("");
    }
  };

  // prettier-ignore
  return (
    <div className={styles.chooseLanguage + " " + appear}>
      <span className={styles.chooseLanguage__header}>{"\uD83D\uDCAD"}</span>
      <div className={styles.chooseLanguage__choice}>
        <div className={styles.chooseLanguage__choice__btnWrapper}>
          <div className={styles.chooseLanguage__choice__btnWrapper__btnBackground}/>
          <Button className={CHOICE_BUTTON_STYLE + " " + activeEN} onClick={() => onChoice(EN_CODE)}>{EN_NAME}</Button>
        </div >
        <div className={styles.chooseLanguage__choice__btnWrapper}>
          <div className={styles.chooseLanguage__choice__btnWrapper__btnBackground}/>
          <Button className={CHOICE_BUTTON_STYLE + " " + activeRU} onClick={(e: any) => onChoice(RU_CODE)}>{RU_NAME}</Button></div>
      </div>
    </div>
  );
};

export default ChooseLanguage;
