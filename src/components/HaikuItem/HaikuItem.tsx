import React, { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";

import styles from "./HaikuItem.module.scss";
import mainStyles from "../../styles/mainStyles.module.scss";

const HaikuItem: React.FC = () => {
  const haikuText = useAppSelector((state) => state.common.haikuText);

  const [appear, setAppear] = useState("");
  const keepHaiku = useRef("");

  useEffect(() => {
    if (appear === "" && keepHaiku.current !== haikuText) {
      setAppear(mainStyles.appear);
    }
  }, [haikuText]);

  return <div className={styles.haikuItem + " " + appear}>{haikuText}</div>;
};

export default HaikuItem;
