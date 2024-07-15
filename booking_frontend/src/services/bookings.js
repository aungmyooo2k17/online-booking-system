import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseApi from "./baseApi";

const bookingApi = createApi({
  reducerPath: "booking",
  baseQuery: baseApi("").baseQuery,
  endpoints: (builder) => ({
    getBookings: builder.query({
      query: () => "/bookings/",
    }),
    getBooking: builder.query({
      query: (id) => `/bookings/${id}`,
    }),
    addBooking: builder.mutation({
      query: (booking) => ({
        url: "/bookings/",
        method: "POST",
        body: booking,
      }),
    }),
    updateBooking: builder.mutation({
      query: ({ id, ...update }) => ({
        url: `/bookings/${id}/`,
        method: "PUT",
        body: update,
      }),
    }),
    deleteBooking: builder.mutation({
      query: (id) => ({
        url: `/bookings/${id}/`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetBookingsQuery,
  useGetBookingQuery,
  useAddBookingMutation,
  useUpdateBookingMutation,
  useDeleteBookingMutation,
} = bookingApi;

export default bookingApi;
