import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./RootSlice";

const Store = configureStore({
  reducer: {
    root: rootReducer,
  },
});

export default Store;