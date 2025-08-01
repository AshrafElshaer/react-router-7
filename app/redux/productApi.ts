import {
  buildCreateApi,
  coreModule,
  reactHooksModule,
  fetchBaseQuery,

} from "@reduxjs/toolkit/query/react";


const createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({ unstable__sideEffectsInRender: true }),
);

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dev-webstore.aether-stores.io/public/api/v1/" }),
  endpoints: (builder) => ({
    getProduct: builder.query<any, void>({ query: () => "front/products/6607" }),
  }),
});

export const { useGetProductQuery } = productApi;