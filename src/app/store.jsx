import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
// import storage from "redux-persist/lib/storage";
// üstteki lokal storage hali
// buraya session eklersek o zaman session storage kullanır.
// defaults to localStorage for web
import stockReducer from "../features/stockSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);
//1 uygulamanın tamamını persistent hale getirmek istiyorsak o zaman rootReducer demeliyiz ama bazılarını persistent yapmak istersek o zaman yukarıya sadece persistent yapmak istediğimizi yazmamız gerekir. Şimdi appte persistoru sarmalamamız gerekli

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    // auth reducerı persistent hale getir.
    stock: stockReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

export default store;
