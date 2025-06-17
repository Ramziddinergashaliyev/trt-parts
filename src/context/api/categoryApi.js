import { api } from "./index";

export const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query({
      query: (params) => ({
        url: "/products/parts/categories",
        params,
      }),
      providesTags: ["Categories"],
    }),

    getCategoriesById: build.query({
      query: (id) => ({
        url: `/products/part/category/${id}`,
      }),
      providesTags: ["Categories"],
    }),

    createCategories: build.mutation({
      query: (body) => ({
        url: "/categories",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Categories"],
    }),

    deleteCategories: build.mutation({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Categories"],
    }),

    updateCategories: build.mutation({
      query: ({ id, body }) => ({
        url: `/categories/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Categories"],
    }),
    
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoriesByIdQuery,
  useCreateCategoriesMutation,
  useDeleteCategoriesMutation,
  useUpdateCategoriesMutation,
} = categoryApi;
