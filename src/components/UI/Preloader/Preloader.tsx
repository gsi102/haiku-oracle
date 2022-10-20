import React from "react";

import styles from "./Preloader.module.scss";
// import mainStyles from "../../styles/mainStyles.module.scss";

const Preloader: React.FC = () => {
  return (
    <div className={styles.preloader}>
      <img alt="preloader.gif" />
    </div>
  );
};

export default Preloader;
