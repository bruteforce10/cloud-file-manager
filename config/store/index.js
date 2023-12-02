import { configureStore } from "@reduxjs/toolkit";
import cloudReducer from "../producers/cloudSlice";

export const store = configureStore({
  reducer: { cloudReducer },
});
