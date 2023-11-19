import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Character, CharacterSearchparams, ResData } from '../models/apiTypes';

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/',
  }),
  endpoints: (build) => ({
    list: build.query<ResData<Character[]>, CharacterSearchparams | undefined>({
      query: (params?) => ({
        url: 'character',
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
