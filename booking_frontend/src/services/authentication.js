import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseApi from "./baseApi";
import { setToken } from "./authToken";
import userApi from "./users";

const API_URL = "http://localhost:8000/api";
const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/authentication`,
  }),
  endpoints: (builder) => ({
    profile: builder.query({
      query: () => "/profile/",
      providesTags: ["Profile"],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log("Profile response:", data);
          dispatch(setToken(data.token));
        } catch (error) {
          console.error("Profile error:", error);
        }
      },
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login/",
        method: "POST",
        body: credentials,
      }),
      // Handle token saving after successful login
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log("Login success response:", data);
          const token = data.token; // Adjust based on your actual response structure
          if (token) {
            localStorage.setItem("token", token);
            dispatch(setToken(token));
            dispatch(userApi.endpoints.profile.initiate());
          }
        } catch (error) {
          console.error("Login error:", error);
        }
      },
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: "/register/",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;

export default authApi;