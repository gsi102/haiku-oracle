import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  common: {},
};

export const store = configureStore({
  reducer: {},
  preloadedState: { common: initialState.common },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
