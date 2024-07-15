import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseApi from "./baseApi";
import { saveCurrentUser } from "./currentUserSlice";

const userApi = createApi({
  reducerPath: "user",
  baseQuery: baseApi("authentication").baseQuery,
  endpoints: (builder) => ({
    profile: builder.query({
      query: () => "/profile/",
      providesTags: ["Profile"],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log("Profile response:", data);
          dispatch(saveCurrentUser(data));
        } catch (error) {
          console.error("Profile error:", error);
        }
      },
    }),
    getUsers: builder.query({
      query: () => "/users/",
    }),
    getUser: builder.query({
      query: (id) => `/users/${id}`,
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: "/users/",
        method: "POST",
        body: user,
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id, ...update }) => ({
        url: `/users/${id}/`,
        method: "PUT",
        body: update,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}/`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useProfileQuery,
  useGetUsersQuery,
  useGetUserQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;

export default userApi;
