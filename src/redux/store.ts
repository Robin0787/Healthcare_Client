import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./base-api";
import counterReducer from "./features/counter/counter-slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
