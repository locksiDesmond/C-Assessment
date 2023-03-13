import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://localhost:4500';
interface Employee {
  email: string;
  dateJoined: string;
  position: string;
  id: string;
}

export const employeesApi = createApi({
  reducerPath: 'employeesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + '/employees',
  }),
  endpoints: (builder) => ({
    getEmployees: builder.query<Employee[], void>({
      query: () => '',
      transformResponse: (response: Employee[], meta, arg) => response,
    }),
    getEmployee: builder.query<Employee, string>({
      query: (id) => id,
      transformResponse: (response: Employee, meta, arg) => response,
    }),

    updateEmployee: builder.mutation<Employee, Employee>({
      query: (credentials) => ({
        url: '',
        method: 'PUT',
        body: credentials,
      }),
    }),
    createEmployee: builder.mutation<Employee, Employee>({
      query: (credentials) => ({
        url: '',
        method: 'POST',
        body: credentials,
      }),
    }),
    deleteEmployee: builder.mutation<void, void>({
      query: () => ({
        url: '',
        method: 'DELETE',
      }),
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
