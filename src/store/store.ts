import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { commonReducer } from "./reducers/commonSlice";
import { haikuAPI } from "../services/HaikuOracleService";

const initialState = {};

export const store = configureStore({
  reducer: {
    common: commonReducer,
    [haikuAPI.reducerPath]: haikuAPI.reducer,
  },
  preloadedState: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(haikuAPI.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
