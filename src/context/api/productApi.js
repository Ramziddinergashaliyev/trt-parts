import { api } from "./index";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: (params) => ({
        url: "/products/all",
        params,
      }),
      providesTags: ["Product"],
    }),

    getProductById: build.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      providesTags: ["Product"],
    }),

    SearchProducts: build.query({
      query: (params) => ({
        url: "/products",
        method: "GET",
        params,
      }),
      invalidatesTags: ["Product"],
    }),

    SearchAllProducts: build.query({
      query: (params) => ({
        url: "/products/part/search",
        method: "GET",
        params,
      }),
      invalidatesTags: ["Product"],
    }),

    createProduct: build.mutation({
      query: (body) => ({
        url: "/products",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Product"],
    }),

    deleteProduct: build.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),

    updateProduct: build.mutation({
      query: ({ id, body }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
    
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useSearchProductsQuery,
  useSearchAllProductsQuery,
} = productApi;




