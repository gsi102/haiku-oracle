import React, { useEffect } from "react";
import ChooseLanguage from "../ChooseLanguage/ChooseLanguage";
import { tg } from "../../App";

import styles from "./MainComponent.module.scss";

const MainComponent: React.FC = () => {
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className={styles.mainComponent}>
      <div className={styles.mainComponent__content}>
        <ChooseLanguage />
      </div>
    </div>
  );
};

export default MainComponent;
