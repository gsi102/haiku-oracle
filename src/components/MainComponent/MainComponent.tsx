import React, { useEffect } from "react";
import ChooseLanguage from "../ChooseLanguage/ChooseLanguage";
import { useTelegram } from "hooks/useTelegram";

import styles from "./MainComponent.module.scss";
import ChooseTheme from "../ChooseTheme/ChooseTheme";

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
      </div>
    </div>
  );
};

export default MainComponent;
