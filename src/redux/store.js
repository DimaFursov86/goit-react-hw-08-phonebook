import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
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
import { appReducer } from "./app";
import { authReducer } from "./auth";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: appReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);

// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query";
// import appReducer from "./app/app-reducer";
// import { contactApi } from "./app/contactSlice";
// import logger from "redux-logger";
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   contactApi.middleware,
//   logger,
// ];

// export const store = configureStore({
//   reducer: {
//     contacts: appReducer,
//     [contactApi.reducerPath]: contactApi.reducer,
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === "development",
// });

// setupListeners(store.dispatch);
