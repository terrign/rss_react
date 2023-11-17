import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse, Character, CharacterSearchparams } from '../models/newApiTypes';

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/',
  }),
  endpoints: (build) => ({
    list: build.query<ApiResponse<Character[]>, CharacterSearchparams | undefined>({
      query: (params?) => ({
        url: 'character',
        params,
      }),
    }),
    details: build.query<Character, { id: number }>({
      query: ({ id }) => `character/${id}`,
    }),
  }),
});

export default api;
