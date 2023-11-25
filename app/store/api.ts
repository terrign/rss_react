import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Character, CharacterSearchparams, ResData } from "../models/apiTypes";
import { HYDRATE } from "next-redux-wrapper";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api/",
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (build) => ({
    list: build.query<ResData<Character[]>, CharacterSearchparams | undefined>({
      query: (params?) => ({
        url: "character",
        params,
      }),
      serializeQueryArgs: ({ queryArgs }) => {
        return { name: queryArgs?.name, page: queryArgs?.page };
      },
    }),
    details: build.query<Character, { id: number }>({
      query: ({ id }) => `character/${id}`,
    }),
  }),
});

export default api;

export const {
  useListQuery,
  useDetailsQuery,
  util: { getRunningQueriesThunk },
} = api;

export const { list, details } = api.endpoints;
