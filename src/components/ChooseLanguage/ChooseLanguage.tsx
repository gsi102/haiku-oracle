import React, { useState, useEffect } from "react";
import { LanguageType } from "types/types";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { setLanguage } from "../../store/reducers/commonSlice";
import { LANGUAGE, RU_CODE, EN_CODE } from "../../constants/CONST";
import Button from "components/UI/Button/Button";

import mainStyles from "../../styles/mainStyles.module.scss";
import styles from "./ChooseLanguage.module.scss";

const CLOSE_BUTTON_STYLE =
  mainStyles.chooseLanguage__button + " " + styles.chooseLanguage__closeButton;

const CHOICE_BUTTON_STYLE =
  mainStyles.button + " " + styles.chooseLanguage__choice__button;

const RU_NAME = LANGUAGE.RU.LANGUAGE_NAME;
const EN_NAME = LANGUAGE.EN.LANGUAGE_NAME;

const ChooseLanguage: React.FC = () => {
  const [appear, setAppear] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    setAppear(styles.appear);
    return () => {
      setAppear("");
    };
  }, []);

  const onChoice = (langType: LanguageType) => {
    dispatch(setLanguage({ data: langType }));
  };

  // prettier-ignore
  return (
    <div className={styles.chooseLanguage + " " + appear}>
      <span className={styles.chooseLanguage__header}>{"\uD83D\uDCAD"}</span>
      <div className={styles.chooseLanguage__choice}>
        <Button className={CHOICE_BUTTON_STYLE} onClick={() => {onChoice(EN_CODE)}}>{EN_NAME}</Button>
        <Button className={CHOICE_BUTTON_STYLE} onClick={() => {onChoice(RU_CODE)}}>{RU_NAME}</Button>
      </div>
    </div>
  );
};

export default ChooseLanguage;
