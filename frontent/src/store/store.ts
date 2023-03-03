import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import uiReducer from "./slices/ui";

const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
