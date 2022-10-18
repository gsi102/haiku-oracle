import React, { useEffect } from "react";
import ChooseLanguage from "../ChooseLanguage/ChooseLanguage";
import ChooseTheme from "../ChooseTheme/ChooseTheme";
import HaikuItem from "../HaikuItem/HaikuItem";
import { useTelegram } from "../../hooks/useTelegram";

import styles from "./MainComponent.module.scss";

const MainComponent: React.FC = () => {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className={styles.mainComponent}>
      <div className={styles.mainComponent__content}>
        <ChooseLanguage />
        <ChooseTheme />
        <HaikuItem />
      </div>
    </div>
  );
};

export default MainComponent;
