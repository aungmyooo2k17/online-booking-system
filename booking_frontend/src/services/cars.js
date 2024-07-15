import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseApi from "./baseApi";

const carApi = createApi({
  reducerPath: "car",
  baseQuery: baseApi("inventory").baseQuery,
  endpoints: (builder) => ({
    getCars: builder.query({
      query: (filters) => ({
        url: "/cars/",
        params: filters,
      }),
    }),
    getCar: builder.query({
      query: (id) => `/cars/${id}`,
    }),
    addCar: builder.mutation({
      query: (car) => ({
        url: "/cars/",
        method: "POST",
        body: car,
      }),
    }),
    updateCar: builder.mutation({
      query: ({ id, ...update }) => ({
        url: `/cars/${id}/`,
        method: "PUT",
        body: update,
      }),
    }),
    deleteCar: builder.mutation({
      query: (id) => ({
        url: `/cars/${id}/`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetCarsQuery,
  useGetCarQuery,
  useAddCarMutation,
  useUpdateCarMutation,
  useDeleteCarMutation,
} = carApi;

export default carApi;
