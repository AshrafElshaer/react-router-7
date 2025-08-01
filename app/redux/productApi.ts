import {
  buildCreateApi,
  coreModule,
  reactHooksModule,
  fetchBaseQuery,

} from "@reduxjs/toolkit/query/react";

import type { Action, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

type RootState = any // normally inferred from state

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE
}

const createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({ unstable__sideEffectsInRender: true }),
);

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dev-webstore.aether-stores.io/public/api/v1/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<any, void>({ query: () => "front/products/6607" }),
  }),
});

export const { useGetProductsQuery } = productApi;