import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT } from "../../constants/CONST";
import { LanguageType, ThemeType } from "../../types/types";

const initialState = {
  language: DEFAULT as LanguageType,
  theme: DEFAULT as ThemeType,
  haikuText: "" as string,
  haikuAuthor: "" as string,
  haikuYears: "" as string,
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
    setHaiku: (state, action) => {
      console.log("here");

      state.haikuText = action.payload.data.text;
      state.haikuAuthor = action.payload.data.author;
      state.haikuYears = action.payload.data.years;
    },
  },
});

export const { setLanguage, setTheme, setHaiku } = commonSlice.actions;

export const commonReducer = commonSlice.reducer;
