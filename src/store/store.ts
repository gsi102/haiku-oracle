import { compose, configureStore } from "@reduxjs/toolkit";
import { ReduxDevtoolsExtensionCompose } from "@redux-devtools/extension";
import { LanguageType } from "types/types";
import { commonReducer } from "./reducers/commonSlice";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};

export const store = configureStore({
  reducer: {
    common: commonReducer,
  },
  preloadedState: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
