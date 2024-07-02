import { baseApi } from "@/redux/base-api";
import {} from "@reduxjs/toolkit/query/react";

export const SpecialtiesAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSpecialties: builder.query({
      query: () => `/specialties`,
    }),
  }),
});

export const { useGetAllSpecialtiesQuery } = SpecialtiesAPI;
