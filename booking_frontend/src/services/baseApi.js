import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "http://localhost:8000/api";

const baseApi = (path) => ({
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/${path}`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token.token;

      if (token) {
        headers.set("Authorization", `Token ${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
});

export default baseApi;
