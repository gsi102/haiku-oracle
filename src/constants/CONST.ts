import { ThemeType } from "types/types";
export const RU_LANG = "Русский";
export const EN_LANG = "English";
export const EN_CODE = "en";
export const RU_CODE = "ru";

export const THEME_1_CODE = "eternity";
export const THEME_2_CODE = "love";
export const THEME_3_CODE = "freedom";

export const DEFAULT = "DEFAULT";

// export const API_URL = "https://haiku-oracle-back-prod.herokuapp.com/";
export const API_URL = "http://localhost:3001/";
const EN = {
  LANGUAGE_NAME: EN_LANG,
  CHOOSE_THEME: "Choose the theme",
  THEME_1: "Eternity",
  THEME_2: "Love",
  THEME_3: "Freedom",
};

export const LANGUAGE = {
  EN,
  RU: {
    LANGUAGE_NAME: RU_LANG,
    CHOOSE_THEME: "Выберите тему",
    THEME_1: "Вечность",
    THEME_2: "Любовь",
    THEME_3: "Свобода",
  },
  DEFAULT: EN,
};
