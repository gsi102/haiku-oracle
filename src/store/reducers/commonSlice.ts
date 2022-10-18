import { createSlice } from "@reduxjs/toolkit";
import { LanguageType, ThemeType } from "types/types";

const initialState = {
  language: "DEFAULT" as LanguageType,
  theme: "DEFAULT" as ThemeType,
  haikuText: "" as string,
};

export const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload.data;
    },
    setTheme: (state, action) => {
      state.theme = action.payload.data;
    },
    setHaikuText: (state, action) => {
      state.haikuText = action.payload.data;
    },
  },
});

export const { setLanguage, setTheme, setHaikuText } = commonSlice.actions;

export const commonReducer = commonSlice.reducer;
