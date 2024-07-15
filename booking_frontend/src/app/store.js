import { configureStore } from "@reduxjs/toolkit";
import carApi from "../services/cars";
import brandApi from "../services/brands";
import authApi from "../services/authentication";
import tokenSlice from "../services/authToken";
import bookingApi from "../services/bookings";
import userApi from "../services/users";
import modalSlice from "../services/modalSlice";
import currentUserSlice from "../services/currentUserSlice";

export const store = configureStore({
  reducer: {
    [carApi.reducerPath]: carApi.reducer,
    [brandApi.reducerPath]: brandApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [bookingApi.reducerPath]: bookingApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [tokenSlice.reducerPath]: tokenSlice.reducer,
    [modalSlice.reducerPath]: modalSlice.reducer,
    [currentUserSlice.reducerPath]: currentUserSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(carApi.middleware)
      .concat(authApi.middleware)
      .concat(brandApi.middleware)
      .concat(userApi.middleware)
      .concat(bookingApi.middleware),
});

export default store;
