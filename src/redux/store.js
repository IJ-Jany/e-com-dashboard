

import { configureStore } from "@reduxjs/toolkit";
import { eCom} from "./apiSlice";
import  authSlice from "./authSlice";



const store = configureStore({
  reducer: {
    [eCom.reducerPath]: eCom.reducer,
   authSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(eCom.middleware),
});

export default store;