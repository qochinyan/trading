import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import settingsReducer from "./features/settings/settingsSlice";
import  thunkMiddleware  from "redux-thunk";
export const store = configureStore({
  reducer: {
    settings: settingsReducer,
  },
  middleware:[
    thunkMiddleware
  ]
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
