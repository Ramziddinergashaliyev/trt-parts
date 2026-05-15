import { api } from "./index";

export const catalogApi = api.injectEndpoints({
    endpoints: (build) => ({
        getCatalog: build.query({
            query: (params) => ({
                url: "/catalog/products",
                params,
            }),
            providesTags: ["Catalog"],
        }),

        createCatalog: build.mutation({
            query: (body) => ({
                url: "/catalog/products",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Catalog"],
        }),

        createExcelCatalog: build.mutation({
            query: (body) => ({
                url: "/catalog/products/import/excel",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Catalog"],
        }),

        deleteCatalog: build.mutation({
            query: (id) => ({
                url: `/catalog/products/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Catalog"],
        }),

        updateCatalog: build.mutation({
            query: ({ id, body }) => ({
                url: `/catalog/products/${id}`,
                method: "PUT",
                body,
            }),
            invalidatesTags: ["Catalog"],
        }),
    }),
});

export const {
    useGetCatalogQuery,
    useCreateCatalogMutation,
    useCreateExcelCatalogMutation,
    useDeleteCatalogMutation,
    useUpdateCatalogMutation
} = catalogApi;
