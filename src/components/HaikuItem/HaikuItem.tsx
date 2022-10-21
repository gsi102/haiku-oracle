import React, { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";

import styles from "./HaikuItem.module.scss";
import mainStyles from "../../styles/mainStyles.module.scss";

const HaikuItem: React.FC = () => {
  const haikuText = useAppSelector((state) => state.common.haikuText);

  const haikuAuthor = useAppSelector((state) => state.common.haikuAuthor);
  const haikuYears = useAppSelector((state) => state.common.haikuYears);

  const [appear, setAppear] = useState("");
  const keepHaiku = useRef(haikuText);

  const haikuStrings = haikuText.split("\n");

  useEffect(() => {
    if (keepHaiku.current !== haikuText) setAppear(mainStyles.appear);
    return () => {
      setAppear("");
    };
  }, [haikuText]);

  return (
    <div className={styles.haikuItem + " " + appear}>
      <div className={styles.haikuItem__wrapper}>
        <div className={styles.haikuItem__text}>
          {haikuStrings.map((el) => {
            return (
              <>
                <span>{el}</span>
                <br />
              </>
            );
          })}
        </div>
        <br />
        <p>{haikuAuthor}</p>
        <p>{haikuYears}</p>
      </div>
    </div>
  );
};

export default HaikuItem;
