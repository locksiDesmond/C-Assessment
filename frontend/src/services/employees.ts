import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Employee, EmployeeCredentials } from '../utils/types';

const BASE_URL = 'http://localhost:4500';

export const employeesApi = createApi({
  reducerPath: 'employeesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + '/employees',
  }),
  refetchOnFocus: true,
  tagTypes: ['Employee'],
  endpoints: (builder) => ({
    getEmployees: builder.query<Employee[], void>({
      query: () => '',
      transformResponse: (response: Employee[], meta, arg) => response,
      providesTags: ['Employee'],
    }),
    getEmployee: builder.query<Employee, string>({
      query: (id) => id,
      transformResponse: (response: Employee, meta, arg) => response,
    }),

    updateEmployee: builder.mutation<Employee, { id: string; body: EmployeeCredentials }>({
      query: (credentials) => ({
        url: `/${credentials.id}`,
        method: 'PUT',
        body: credentials.body,
      }),
      invalidatesTags: ['Employee'],
    }),
    createEmployee: builder.mutation<Employee, EmployeeCredentials>({
      query: (credentials) => ({
        url: '',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Employee'],
    }),
    deleteEmployee: builder.mutation<void, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Employee'],
    }),
  }),
});

export const {
  useGetEmployeeQuery,
  useCreateEmployeeMutation,
  useDeleteEmployeeMutation,
  useGetEmployeesQuery,
  useUpdateEmployeeMutation,
} = employeesApi;
