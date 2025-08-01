import {
  buildCreateApi,
  coreModule,
  reactHooksModule,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({ unstable__sideEffectsInRender: true }) // Change this to false for SSR
);

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ 
    baseUrl: "https://dev-webstore.aether-stores.io/public/api/v1/",
  }),
  endpoints: (builder) => ({
    getProduct: builder.query<any, string>({ 
      query: (id) => `front/products/${id}`,
    }),
  }),
});

export const { useGetProductQuery } = productApi;