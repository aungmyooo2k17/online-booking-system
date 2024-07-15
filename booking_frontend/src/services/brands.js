import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseApi from "./baseApi";

const brandApi = createApi({
  reducerPath: "brand",
  baseQuery: baseApi("inventory").baseQuery,
  endpoints: (builder) => ({
    getBrands: builder.query({
      query: () => "/brands/",
    }),
    getBrand: builder.query({
      query: (id) => `/brands/${id}`,
    }),
    addBrand: builder.mutation({
      query: (brand) => ({
        url: "/brands/",
        method: "POST",
        body: brand,
      }),
    }),
    updateBrand: builder.mutation({
      query: ({ id, ...update }) => ({
        url: `/brands/${id}/`,
        method: "PUT",
        body: update,
      }),
    }),
    deleteBrand: builder.mutation({
      query: (id) => ({
        url: `/brands/${id}/`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetBrandsQuery,
  useGetBrandQuery,
  useAddBrandMutation,
  useUpdateBrandMutation,
  useDeleteBrandMutation,
} = brandApi;

export default brandApi;
