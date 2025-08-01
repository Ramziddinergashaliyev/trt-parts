import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { logout } from "../slices/authSlice";

const baseQuery = async (args, api, extraOptions) => {
  const { dispatch } = api;
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: "https://car-parts-1kdm.onrender.com",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("x-auth-token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });

  const result = await rawBaseQuery(args, api, extraOptions);

  if (result.error) {
    const { status } = result.error;
    if (status === 401 || status === 403) {
      dispatch(logout());
    }
  }
  return result;
};
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

export const api = createApi({
  reducerPath: "myApi",
  baseQuery: baseQueryWithRetry,
  tagTypes: ["Product", "Categories","Contact"],
  endpoints: () => ({}),
});
