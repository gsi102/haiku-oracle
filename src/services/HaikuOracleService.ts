import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../constants/CONST";

export const haikuAPI = createApi({
  reducerPath: "haikuAPI",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getHaiku: builder.query<any, any>({
      query: ({ language, theme }) => `haiku/${language}/${theme}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetHaikuQuery, useLazyGetHaikuQuery } = haikuAPI;
export const { getHaiku } = haikuAPI.endpoints;
