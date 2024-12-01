import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from 'js-cookie'

export const eCom = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl:import.meta.env.VITE_API_BASE_URL
    }),
    tagTypes:["Category", "Profile", "SubCategory"],
    endpoints:(builder)=>({
        // category apis
        getCategories:builder.query({
            query:()=> "/categories",
            providesTags:["Category"]
        }),
        createCategory:builder.mutation({
            query:(data)=>({
                url: "/categories/create",
                method: "POST",
                body: data,
                headers: {
                    Authorization: Cookies.get("accessToken"),
                },
            }),
            invalidatesTags:["Category"]
        }),
        //subcategory apis
        getSubCategories:builder.query({
            query:()=> "/subcategories",
            providesTags:["SubCategory"]
        }),
        createSubCategory:builder.mutation({
            query:(data)=>({
                url: "/subcategories/create",
                method: "POST",
                body: data,
                headers: {
                    Authorization: Cookies.get("accessToken"),
                },
            }),
            invalidatesTags:["SubCategory"]
        }),

        //variation apis
    //    getVariation: builder.query({
    //       query: () => "/variations",
    //        providesTags: [ "Variation"]
    //    })
    //    createVariation:builder.mutation({
          
    //        query:(data)=>{
              
     //           return{
     //            url: "/variations/create",
     //           method: "POST",
      //          body: data ,
     //           headers: {
     //               Authorization: Cookies.get("accessToken"),
     //           },
     //           }
     //       },  }),

           //inventory apis
       
    //    createInventory:builder.mutation({
          
    //        query:(data)=>{
              
     //           return{
     //            url: "/inventory/create",
     //           method: "POST",
      //          body: data ,
     //           headers: {
     //               Authorization: Cookies.get("accessToken"),
     //           },
     //           }
     //       },  }),
         //Products apis
       
        createProduct:builder.mutation({
          
            query:(data)=>{
              
                return{
                 url: "/product/create",
                method: "POST",
                body: data ,
                headers: {
                    Authorization: Cookies.get("accessToken"),
                },
                }
            },
        }),
        // profile apis
        getProfile: builder.query({
            query:(id)=> `/user/${id}`,
            providesTags:["Profile"]
        }),
        updateProfile:builder.mutation({
            query:(data)=>{
                const formData = new FormData();
                formData.append('profilepic',data);
                return {
                    url: "/user/update",
                    method: "POST",
                    body: formData,
                    headers: {
                        Authorization: Cookies.get("accessToken"),
                    },
                }
            },
            invalidatesTags:["Profile"]
        }),
    })
})

export const  {useCreateCategoryMutation, useGetCategoriesQuery, useUpdateProfileMutation, useGetProfileQuery, useGetSubCategoriesQuery,useCreateSubCategoryMutation,
    useCreateProductMutation , useGetVariationQuery,useCreateVariationMutation
} = eCom