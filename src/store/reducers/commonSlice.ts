import { createSlice } from "@reduxjs/toolkit";
import { LanguageType, ThemeType } from "types/types";

const initialState = {
  language: "DEFAULT" as LanguageType,
  theme: "DEFAULT" as ThemeType,
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
  },
});

export const { setLanguage, setTheme } = commonSlice.actions;

export const commonReducer = commonSlice.reducer;
