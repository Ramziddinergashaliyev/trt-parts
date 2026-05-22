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

        // SearchCatalog: build.query({
        //     query: (params) => ({
        //         url: "/products",
        //         method: "GET",
        //         params,
        //     }),
        //     invalidatesTags: ["Catalog"],
        // }),

        SearchCatalog: build.query({
            query: (params) => ({
                url: "/catalog/products/filter",
                method: "GET",
                params,
            }),
            providesTags: ["Catalog"],
        }),

        createExcelCatalog: build.mutation({
            query: (body) => ({
                url: "/catalog/products/import/excel",
                method: "POST",
                body,
                formData: true,
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
    useSearchCatalogQuery,
    useCreateExcelCatalogMutation,
    useDeleteCatalogMutation,
    useUpdateCatalogMutation
} = catalogApi;
