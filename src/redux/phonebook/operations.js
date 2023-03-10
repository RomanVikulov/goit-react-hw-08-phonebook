import axios from 'axios';
import { createApi } from '@reduxjs/toolkit/query/react';
// or import { createAsyncThunk } from '@reduxjs/toolkit';


// === code with RTK Query ===

// Creates wrapper around fetchBaseQuery by axios
const axiosBaseQuery =
  () =>
  // axios defaults baseURL is already in use with auth
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const phonebookApi = createApi({
  reducerPath: 'phonebookApi',
  baseQuery: axiosBaseQuery({
    // adds token authentication and validates it
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Contact'],
  endpoints: build => ({
    getContacts: build.query({
      query: () => ({
        url: '/contacts',
        method: 'get',
      }),
      providesTags: ['Contact'],
    }),

    addContact: build.mutation({
      query: ({ name, number }) => ({
        url: '/contacts',
        method: 'post',
        data: {
          name: name,
          number: number,
        },
      }),
      invalidatesTags: ['Contact'],
    }),

    deleteContact: build.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'delete',
      }),
      invalidatesTags: ['Contact'],
    }),

    updateContact: build.mutation({
      query({ id, name, number }) {
        return {
          url: `/contacts/${id}`,
          method: 'PATCH',
          data: {
            name: name,
            number: number,
          },
        };
      },
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = phonebookApi;
